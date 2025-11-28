import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <span className="text-indigo-600 mr-2">●</span>
              <span className="text-gray-900">Workifyo</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">
              Find Work
            </a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">
              Find Talent
            </a>
            <div className="relative group">
              <button className="text-gray-700 hover:text-indigo-600 transition-colors flex items-center gap-1">
                Resources
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">
              About
            </a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-indigo-600 transition-colors">
              Log In
            </button>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
              Sign Up
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-indigo-600"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
            >
              Find Work
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
            >
              Find Talent
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
            >
              Resources
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
            >
              About
            </a>
            <div className="pt-4 space-y-2">
              <button className="block w-full text-left px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-50">
                Log In
              </button>
              <button className="block w-full bg-indigo-600 text-white px-3 py-2 rounded-lg hover:bg-indigo-700">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
