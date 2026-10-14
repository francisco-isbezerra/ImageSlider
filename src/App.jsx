import Background from './components/Background.jsx';
import ImageSlider from './components/ImageSlider.jsx';

export default function App() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between selection:bg-mauve/20 selection:text-mauve overflow-hidden">
      <Background />

      {/* Cabeçalho */}
      <header className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-8 pb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="h-3 w-3 rounded-full bg-mauve animate-pulse" aria-hidden="true" />
          <strong className="text-xl sm:text-2xl font-black tracking-[0.2em] text-ink font-display">
            WILD <span className="text-mauve font-light">/</span> STORIES
          </strong>
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