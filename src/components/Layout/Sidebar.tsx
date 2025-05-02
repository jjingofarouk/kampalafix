'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Home, Calendar, Briefcase, MessageCircle } from 'lucide-react';

export default function Sidebar() {
  const [activeLink, setActiveLink] = useState('/dashboard');

  const links = [
    { href: '/dashboard', label: 'Dashboard', icon: Home },
    { href: '/dashboard/bookings', label: 'Bookings', icon: Calendar },
    { href: '/dashboard/services', label: 'Services', icon: Briefcase },
    { href: '/dashboard/chat', label: 'Chat', icon: MessageCircle },
  ];

  return (
    <aside className="w-64 h-screen bg-slate-900 text-white p-6 flex flex-col">
      {/* Logo / App Name */}
      <div className="mb-8">
        <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          AppDash
        </h2>
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        <ul className="space-y-2">
          {links.map(({ href, label, icon: Icon }) => {
            const isActive = activeLink === href;

            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 group ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'hover:bg-slate-800'
                  }`}
                  onClick={() => setActiveLink(href)}
                >
                  <span
                    className={`p-2 rounded-md ${
                      isActive
                        ? 'bg-white/20'
                        : 'bg-slate-700 group-hover:bg-slate-600'
                    }`}
                  >
                    <Icon
                      size={18}
                      className={isActive ? 'text-white' : 'text-slate-400'}
                    />
                  </span>
                  <span className="font-medium">{label}</span>
                  {isActive && (
                    <span className="ml-auto h-2 w-2 rounded-full bg-blue-300"></span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User profile */}
      <div className="mt-auto pt-6 border-t border-slate-700">
        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-all cursor-pointer">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-sm font-bold">
            US
          </div>
          <div>
            <p className="text-sm font-medium">User Profile</p>
            <p className="text-xs text-slate-400">Premium Plan</p>
          </div>
        </div>
      </div>
    </aside>
  );
}