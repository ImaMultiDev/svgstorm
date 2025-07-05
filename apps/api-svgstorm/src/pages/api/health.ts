import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Configure CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    return res.status(200).json({
      success: true,
      message: "SVGStorm API is running successfully",
      timestamp: new Date().toISOString(),
      status: "healthy",
    });
  } catch (error) {
    console.error("Health check error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      status: "unhealthy",
    });
  }
}
