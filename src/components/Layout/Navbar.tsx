
import Link from 'next/link';
import { useAuth } from '../../hooks/useAuth';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, User, LogOut, Grid, Tool, Bell } from 'lucide-react';

export default function Navbar() {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-lg text-gray-800' 
        : 'bg-gradient-to-r from-orange-500 to-orange-600 text-white'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className={`h-8 w-8 rounded-lg ${isScrolled ? 'bg-orange-500' : 'bg-white'} flex items-center justify-center`}>
              <Tool size={20} className={isScrolled ? 'text-white' : 'text-orange-500'} />
            </div>
            <span className="text-xl font-extrabold tracking-tight">
              Kampala<span className={isScrolled ? 'text-orange-500' : 'text-white'}>Fix</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              href="/services"
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-white/20 ${
                isScrolled ? 'hover:bg-orange-100 hover:text-orange-600' : ''
              }`}
            >
              Services
            </Link>
            <Link 
              href="/about"
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-white/20 ${
                isScrolled ? 'hover:bg-orange-100 hover:text-orange-600' : ''
              }`}
            >
              About
            </Link>

            {user ? (
              <>
                <Link 
                  href="/dashboard"
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-white/20 ${
                    isScrolled ? 'hover:bg-orange-100 hover:text-orange-600' : ''
                  }`}
                >
                  Dashboard
                </Link>
                
                {/* Notifications */}
                <button 
                  className={`p-2 rounded-full relative transition-all ${
                    isScrolled ? 'hover:bg-orange-100' : 'hover:bg-white/20'
                  }`}
                >
                  <Bell size={18} />
                  <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
                </button>
                
                {/* User menu */}
                <div className="relative">
                  <button
                    onClick={toggleDropdown}
                    className={`flex items-center space-x-1 p-1 rounded-full transition-all ${
                      isScrolled 
                        ? 'hover:bg-orange-100' 
                        : 'hover:bg-white/20'
                    }`}
                  >
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-orange-300 to-orange-600 flex items-center justify-center border-2 border-white shadow-md overflow-hidden">
                      {user.avatar ? (
                        <img src={user.avatar} alt="User avatar" className="h-full w-full object-cover" />
                      ) : (
                        <User size={16} className="text-white" />
                      )}
                    </div>
                    <ChevronDown size={16} />
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 rounded-xl bg-white shadow-xl border border-gray-100 py-1 z-50">
                      <div className="px-4 py-3 border-b border-gray-100">
                        <p className="text-sm font-medium text-gray-900">{user.name || 'User'}</p>
                        <p className="text-xs text-gray-500 truncate">{user.email || 'user@example.com'}</p>
                      </div>
                      <Link href="/profile" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-orange-50">
                        <User size={16} className="mr-2 text-orange-500" />
                        Profile
                      </Link>
                      <Link href="/dashboard" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-orange-50">
                        <Grid size={16} className="mr-2 text-orange-500" />
                        Dashboard
                      </Link>
                      <button 
                        onClick={logout} 
                        className="w-full text-left flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                      >
                        <LogOut size={16} className="mr-2" />
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <Link 
                href="/login"
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  isScrolled 
                    ? 'bg-orange-500 text-white hover:bg-orange-600' 
                    : 'bg-white text-orange-500 hover:bg-orange-50'
                }`}
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
          >
            {isOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isOpen 
          ? 'max-h-screen opacity-100 visible' 
          : 'max-h-0 opacity-0 invisible'
      }`}>
        <div className={`px-4 pt-2 pb-4 space-y-1 ${
          isScrolled ? 'bg-white shadow-inner' : 'bg-orange-600'
        }`}>
          <Link 
            href="/services"
            className="block px-3 py-3 rounded-lg text-base font-medium hover:bg-white/10"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link 
            href="/about"
            className="block px-3 py-3 rounded-lg text-base font-medium hover:bg-white/10"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          
          {user ? (
            <>
              <Link 
                href="/dashboard"
                className="block px-3 py-3 rounded-lg text-base font-medium hover:bg-white/10"
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </Link>
              <Link 
                href="/profile"
                className="block px-3 py-3 rounded-lg text-base font-medium hover:bg-white/10"
                onClick={() => setIsOpen(false)}
              >
                Profile
              </Link>
              <button 
                onClick={() => {
                  logout();
                  setIsOpen(false);
                }}
                className="w-full text-left block px-3 py-3 rounded-lg text-base font-medium hover:bg-white/10"
              >
                Logout
              </button>
            </>
          ) : (
            <Link 
              href="/login"
              className={`block px-3 py-3 rounded-lg text-base font-medium ${
                isScrolled 
                  ? 'bg-orange-500 text-white' 
                  : 'bg-white/20 hover:bg-white/30'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

