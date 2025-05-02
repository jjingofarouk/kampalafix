import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <h3 className="font-bold">KampalaFix</h3>
            <p>Your Home Service Hub</p>
          </div>
          <div>
            <h3 className="font-bold">Links</h3>
            <ul className="flex flex-col gap-2">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/terms">Terms</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Contact</h3>
            <p>support@kampalafix.com</p>
            <p>+256 123 456 789</p>
          </div>
        </div>
      </div>
    </footer>
  );
}