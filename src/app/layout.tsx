// app/layout.tsx
import { ThemeProvider } from '../context/ThemeContext';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import '../styles/globals.css';

export const metadata = {
  title: 'KampalaFix',
  description: 'Book reliable home services across Uganda.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}