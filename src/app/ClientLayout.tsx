"use client";

import { ThemeProvider } from '../context/ThemeContext';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import { Provider } from 'react-redux';
import { store } from '../store';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1 px-4 sm:px-6 md:px-8 lg:px-12">{children}</main>
          <Footer />
        </div>
      </ThemeProvider>
    </Provider>
  );
}