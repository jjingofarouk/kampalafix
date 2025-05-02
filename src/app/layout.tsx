import '../styles/globals.css';
import ClientLayout from './ClientLayout';

export const metadata = {
  title: 'KampalaFix',
  description: 'Book reliable home services across Uganda.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}