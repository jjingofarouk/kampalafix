// app/layout.tsx

"use client";

import '../styles/globals.css';
import { ThemeProvider } from '../context/ThemeContext';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import { Provider } from 'react-redux';
import { store } from '../store';

export const metadata = {
  title: 'KampalaFix',
  description: 'Book reliable home services across Uganda.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <ThemeProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}