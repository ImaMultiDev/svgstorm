import { useState, useEffect } from "react";
import { IconData, UseIconOptions, UseIconResult } from "../types";
import { useSVGStormContextOptional } from "../context/SVGStormContext";

// Simple in-memory cache
const iconCache = new Map<string, { data: IconData; timestamp: number }>();

const DEFAULT_API_BASE_URL = "http://localhost:3000";
const DEFAULT_CACHE_TIME = 5 * 60 * 1000; // 5 minutes
const DEFAULT_RETRY_ATTEMPTS = 3;
const DEFAULT_RETRY_DELAY = 1000;

async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function useIcon(
  name: string,
  options: UseIconOptions = {}
): UseIconResult {
  const context = useSVGStormContextOptional();

  // Use context values as fallback, then options, then defaults
  const apiBaseUrl =
    options.apiBaseUrl || context?.apiBaseUrl || DEFAULT_API_BASE_URL;
  const cacheTime =
    options.cacheTime || context?.cacheTime || DEFAULT_CACHE_TIME;
  const retryAttempts =
    options.retryAttempts || context?.retryAttempts || DEFAULT_RETRY_ATTEMPTS;
  const retryDelay =
    options.retryDelay || context?.retryDelay || DEFAULT_RETRY_DELAY;

  const [data, setData] = useState<IconData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!name) {
      setError("Icon name is required");
      setLoading(false);
      return;
    }

    const cacheKey = `${apiBaseUrl}:${name}`;
    const cached = iconCache.get(cacheKey);

    // Check if we have valid cached data
    if (cached && Date.now() - cached.timestamp < cacheTime) {
      setData(cached.data);
      setLoading(false);
      setError(null);
      return;
    }

    // Fetch icon from API with retry logic
    const fetchIcon = async () => {
      try {
        setLoading(true);
        setError(null);

        let lastError: Error = new Error("Unknown error");
        for (let attempt = 1; attempt <= retryAttempts; attempt++) {
          try {
            const response = await fetch(`${apiBaseUrl}/api/icons/${name}`);

            if (!response.ok) {
              throw new Error(`Failed to fetch icon: ${response.statusText}`);
            }

            const result = await response.json();

            if (!result.success) {
              throw new Error(result.message || "Failed to fetch icon");
            }

            const iconData = result.data;

            // Cache the result
            iconCache.set(cacheKey, {
              data: iconData,
              timestamp: Date.now(),
            });

            setData(iconData);
            return; // Success, exit retry loop
          } catch (err) {
            lastError = err instanceof Error ? err : new Error("Unknown error");

            // If this is not the last attempt, wait before retrying
            if (attempt < retryAttempts) {
              await sleep(retryDelay * attempt); // Exponential backoff
            }
          }
        }

        // If we get here, all retries failed
        throw lastError;
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchIcon();
  }, [name, apiBaseUrl, cacheTime, retryAttempts, retryDelay]);

  return { data, loading, error };
}
