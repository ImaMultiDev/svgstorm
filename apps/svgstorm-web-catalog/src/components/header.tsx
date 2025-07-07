import Link from "next/link";
import { Icon } from "@/components/common/SVGStormIcon";

export default function Header() {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900 flex items-center">
              <Icon name="lightning" size={24} className="mr-2 text-blue-600" />
              SVGStorm
            </h1>
            <span className="ml-2 text-sm text-gray-500">
              Catálogo de Iconos
            </span>
          </div>
          <div className="flex space-x-4">
            <Link
              href="/"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Catálogo
            </Link>
            <Link
              href="/docs"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Documentación
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
