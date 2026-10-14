import Background from './components/Background.jsx';
import ImageSlider from './components/ImageSlider.jsx';

export default function App() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between selection:bg-mauve/20 selection:text-mauve overflow-hidden">
      <Background />

      {/* Cabeçalho */}
      <header className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-8 pb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative group cursor-pointer">
            {/* Anel gradiente giratório no hover */}
            <div className="absolute -inset-[3px] rounded-full bg-gradient-to-tr from-mauve via-purple-400 to-pink-400 opacity-60 blur-[2px] group-hover:opacity-100 group-hover:blur-[3px] transition-all duration-500" aria-hidden="true" />
            {/* Ponto de status pulsante */}
            <span className="absolute -top-0.5 -right-0.5 h-3.5 w-3.5 rounded-full bg-emerald-400 animate-pulse ring-2 ring-lavender z-20" aria-hidden="true" />
            <img
              src="/images/avatar.png"
              alt="Avatar do autor"
              className="relative z-10 h-14 w-14 sm:h-16 sm:w-16 rounded-full object-cover ring-2 ring-lavender shadow-lg shadow-mauve/30 transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          {/* Nome/título exibido ao lado do avatar */}
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-sm font-bold text-ink tracking-wide">Francisco</span>
            <span className="text-[11px] font-medium text-mauve tracking-widest uppercase">Wild Stories</span>
          </div>
        </div>

        <nav aria-label="Navegação principal" className="flex items-center gap-6 text-xs sm:text-sm font-semibold tracking-widest uppercase text-muted-violet">
          <span className="text-mauve border-b-2 border-mauve pb-0.5 cursor-pointer transition-colors">
            EXPLORAR
          </span>
          <span className="text-ink/30">·</span>
          <span className="hover:text-ink cursor-pointer transition-colors">
            SOBRE
          </span>
        </nav>
      </header>

      {/* Conteúdo Principal — Grid responsiva (2 colunas no desktop) */}
      <main className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8 lg:py-12 grid gap-12 lg:gap-16 lg:grid-cols-12 lg:items-center flex-1">
        <section className="lg:col-span-5 space-y-6 sm:space-y-8" aria-label="Apresentação">
          <div className="inline-flex items-center gap-2 rounded-full bg-mauve/10 px-3.5 py-1.5 text-xs font-bold tracking-widest uppercase text-mauve border border-mauve/20">
            <span>EXPLORAÇÃO</span>
            <span className="text-mauve/40">•</span>
            <span>VIDA SELVAGEM</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-ink tracking-tight leading-[1.1] font-display">
            A natureza em cada detalhe.
          </h1>

          <p className="text-base sm:text-lg leading-relaxed text-muted-violet font-normal max-w-lg">
            Descubra espécies extraordinárias em uma experiência visual interativa,
            revelando hábitos, curiosidades e a beleza única da fauna mundial.
          </p>

          <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-muted-violet/80 tracking-wider">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
            <span>5 ESPÉCIES DOCUMENTADAS</span>
            <span>•</span>
            <span>EXPERIÊNCIA IMERSIVA</span>
          </div>
        </section>

        <section className="lg:col-span-7" aria-label="Carrossel interativo">
          <ImageSlider />
        </section>
      </main>

      {/* Rodapé editorial */}
      <footer className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6 border-t border-mauve/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs tracking-widest text-muted-violet/70">
        <div>
          <span>WILD / STORIES</span> — GALERIA INTERATIVA
        </div>
        <div className="font-semibold text-mauve/80">
          REACT • TAILWIND CSS • JAVASCRIPT
        </div>
      </footer>
    </div>
  );
}