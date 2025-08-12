import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-gray-900 text-white">
      {/* ...other nav items... */}
      <Link href="/blogs" className="flex items-center gap-2 hover:text-blue-400">
        {/* Simple PR Docs logo */}
        <span role="img" aria-label="PR Docs">📄</span>
        <span className="hidden md:inline">PR Docs</span>
      </Link>
    </nav>
  );
}
