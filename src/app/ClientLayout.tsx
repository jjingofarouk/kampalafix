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
        <Navbar />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </Provider>
  );
}