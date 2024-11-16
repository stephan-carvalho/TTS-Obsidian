import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            Seu Nome
          </Link>
          
          <div className="space-x-6">
            <Link href="/artigos" className="hover:text-blue-600">
              Artigos
            </Link>
            <Link href="/cursos" className="hover:text-blue-600">
              Cursos
            </Link>
            <Link href="/sobre" className="hover:text-blue-600">
              Sobre
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
