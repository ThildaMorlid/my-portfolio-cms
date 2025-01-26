import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <Navigation className="p-4" />
      <main className="px-4 py-8">
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="mb-8 text-[15rem] animate-[swim_4s_ease-in-out_infinite]">
            🐠
          </div>

          <h1 className="text-[8rem] font-bold leading-none tracking-tighter mb-4 animate-pulse">
            HOPPSAN!
          </h1>

          <h2 className="text-3xl mb-8">
            Här var det visst tomt...
          </h2>

          <p className="text-gray-600 mb-8 text-xl">
            Sidan du letar efter har simmat iväg!
            <br />
            <span className="text-2xl mt-4 inline-block">🌊 🎣 🐋</span>
          </p>

          <div className="space-y-4">
            <p className="text-lg mb-8">
              Men oroa dig inte, du kan alltid...
            </p>

            <Link
              href="/"
              className="inline-block border-2 border-black px-8 py-3 text-lg
                         hover:bg-black hover:text-white transition-all
                         transform hover:scale-105 hover:-rotate-2"
            >
              Simma tillbaka till tryggheten →
            </Link>
          </div>

          <div className="mt-16 text-sm text-gray-500">
            <p>PS: Ibland är det bäst att bara följa strömmen! 🌊</p>
          </div>
        </div>
      </main>
    </div>
  );
}
