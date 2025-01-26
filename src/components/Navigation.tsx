import Link from 'next/link';

export default function Navigation({ className = "" }) {
  return (
    <nav className={`flex justify-between items-center ${className}`}>
      <ul className="flex gap-8 text-lg">
        <li>
          <Link href="/" className="hover:opacity-70">
            Hem
          </Link>
        </li>
        <li>
          <Link href="/projects" className="hover:opacity-70">
            Projekt
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:opacity-70">
            Om mig
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:opacity-70">
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
}
