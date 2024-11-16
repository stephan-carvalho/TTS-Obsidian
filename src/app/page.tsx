export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center py-20 bg-gradient-to-r from-blue-500 to-blue-700">
        <h1 className="text-4xl font-bold text-white mb-4">
          Bem-vindo ao meu espaço de conhecimento
        </h1>
        <p className="text-xl text-white">
          Artigos, cursos e conteúdo educacional para seu desenvolvimento
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Cards de artigos recentes virão aqui */}
      </section>
    </div>
  );
}
