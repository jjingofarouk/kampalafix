"use client";

import Link from 'next/link';
import { useAuth } from '../../hooks/useAuth';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, User, LogOut, Grid, Wrench, Bell } from 'lucide-react';

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
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-2xl shadow-[0_0_20px_rgba(147,51,234,0.3)]'
          : 'bg-gradient-to-r from-purple-600 to-pink-600'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div
              className={`h-10 w-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                isScrolled
                  ? 'bg-gradient-to-br from-purple-500 to-pink-500 shadow-[0_0_15px_rgba(147,51,234,0.5)]'
                  : 'bg-white/90'
              }`}
            >
              <Wrench
                size={24}
                className={isScrolled ? 'text-white' : 'text-purple-600'}
              />
            </div>
            <span
              className={`text-2xl font-extrabold tracking-tight text-transparent bg-clip-text ${
                isScrolled
                  ? 'bg-gradient-to-r from-purple-400 to-pink-500'
                  : 'bg-white'
              }`}
            >
              Kampala<span className={isScrolled ? 'text-pink-500' : 'text-purple-300'}>Fix</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <Link
              href="/services"
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isScrolled
                  ? 'text-gray-200 hover:bg-purple-900/30 hover:text-purple-300'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              Services
            </Link>
            <Link
              href="/about"
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isScrolled
                  ? 'text-gray-200 hover:bg-purple-900/30 hover:text-purple-300'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              About
            </Link>

            {user ? (
              <>
                <Link
                  href="/dashboard"
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isScrolled
                      ? 'text-gray-200 hover:bg-purple-900/30 hover:text-purple-300'
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  Dashboard
                </Link>

                {/* Notifications */}
                <button
                  className={`p-3 rounded-full relative transition-all duration-300 ${
                    isScrolled
                      ? 'text-gray-200 hover:bg-purple-900/30'
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  <Bell size={20} />
                  <span className="absolute top-1 right-1 h-2.5 w-2.5 bg-pink-500 rounded-full animate-pulse"></span>
                </button>

                {/* User menu */}
                <div className="relative">
                  <button
                    onClick={toggleDropdown}
                    className={`flex items-center space-x-2 p-2 rounded-full transition-all duration-300 ${
                      isScrolled
                        ? 'text-gray-200 hover:bg-purple-900/30'
                        : 'text-white hover:bg-white/20'
                    }`}
                  >
                    <div className="h-9 w-9 rounded-full bg-gradient-to-br from-purple-400 to-pink-600 flex items-center justify-center border-2 border-white/50 shadow-[0_0_10px_rgba(147,51,234,0.4)] overflow-hidden">
                      <User size={18} className="text-white" />
                    </div>
                    <ChevronDown size={18} />
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-3 w-56 rounded-xl bg-black/95 backdrop-blur-md shadow-[0_0_20px_rgba(147,51,234,0.3)] border border-purple-900/50 py-2 z-50">
                      <div className="px-4 py-3 border-b border-purple-900/50">
                        <p className="text-sm font-medium text-gray-200">
                          {user.name || 'User'}
                        </p>
                        <p className="text-xs text-gray-400 truncate">
                          {user.email || 'user@example.com'}
                        </p>
                      </div>
                      <Link
                        href="/profile"
                        className="flex items-center px-4 py-2 text-sm text-gray-200 hover:bg-purple-900/50 hover:text-purple-300 transition-all duration-300"
                      >
                        <User size={16} className="mr-2 text-purple-400" />
                        Profile
                      </Link>
                      <Link
                        href="/dashboard"
                        className="flex items-center px-4 py-2 text-sm text-gray-200 hover:bg-purple-900/50 hover:text-purple-300 transition-all duration-300"
                      >
                        <Grid size={16} className="mr-2 text-purple-400" />
                        Dashboard
                      </Link>
                      <button
                        onClick={logout}
                        className="w-full text-left flex items-center px-4 py-2 text-sm text-pink-500 hover:bg-pink-900/50 hover:text-pink-400 transition-all duration-300"
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
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isScrolled
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                    : 'bg-white/90 text-purple-600 hover:bg-white'
                }`}
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
          >
            {isOpen ? (
              <X size={28} className={isScrolled ? 'text-gray-200' : 'text-white'} />
            ) : (
              <Menu size={28} className={isScrolled ? 'text-gray-200' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible'
        }`}
      >
        <div
          className={`px-4 pt-4 pb-6 space-y-2 ${
            isScrolled ? 'bg-black/95 backdrop-blur-md' : 'bg-gradient-to-r from-purple-600 to-pink-600'
          }`}
        >
          <Link
            href="/services"
            className="block px-4 py-3 rounded-xl text-base font-medium text-gray-200 hover:bg-purple-900/50 transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/about"
            className="block px-4 py-3 rounded-xl text-base font-medium text-gray-200 hover:bg-purple-900/50 transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>

          {user ? (
            <>
              <Link
                href="/dashboard"
                className="block px-4 py-3 rounded-xl text-base font-medium text-gray-200 hover:bg-purple-900/50 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </Link>
              <Link
                href="/profile"
                className="block px-4 py-3 rounded-xl text-base font-medium text-gray-200 hover:bg-purple-900/50 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Profile
              </Link>
              <button
                onClick={() => {
                  logout();
                  setIsOpen(false);
                }}
                className="w-full text-left block px-4 py-3 rounded-xl text-base font-medium text-pink-500 hover:bg-pink-900/50 transition-all duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="block px-4 py-3 rounded-xl text-base font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
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