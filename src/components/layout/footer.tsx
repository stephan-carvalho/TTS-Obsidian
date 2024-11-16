import Link from 'next/link';

export default function Footer() {
    return (
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-4">Sobre</h3>
              <p className="text-gray-600">
                Espaço dedicado ao compartilhamento de conhecimento e aprendizado contínuo.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li><Link href="/artigos">Artigos</Link></li>
                <li><Link href="/cursos">Cursos</Link></li>
                <li><Link href="/sobre">Sobre</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Contato</h3>
              <ul className="space-y-2">
                <li>Email: seu@email.com</li>
                <li>GitHub: @seuusername</li>
                <li>LinkedIn: /in/seuusername</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }