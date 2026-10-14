import { useState, useEffect } from 'react';
import { slides } from '../data/slides.js';
import SliderControls from './SliderControls.jsx';

/**
 * Cores de badge de status — lista fixa por cor semântica.
 * Evitamos classes condicionais em string template para que o Tailwind
 * possa fazer tree-shaking correto (classes completas como strings literais).
 */
const STATUS_STYLES = {
  emerald: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  amber:   'bg-amber-50  text-amber-700  border-amber-200',
  blue:    'bg-blue-50   text-blue-700   border-blue-200',
};

const STATUS_DOT = {
  emerald: 'bg-emerald-500',
  amber:   'bg-amber-500',
  blue:    'bg-blue-500',
};

/**
 * ImageSlider — Galeria interativa com navegação circular, transição de
 * opacidade, suporte a teclado e indicadores de posição.
 *
 * Fases C + D + E do plano de aula.
 */
export default function ImageSlider() {
  // -----------------------------------------------------------------
  // Fase D — Estado e navegação circular
  // -----------------------------------------------------------------
  const [index, setIndex] = useState(2); // Inicia no Panda (índice 2)

  const next     = () => setIndex((current) => (current + 1) % slides.length);
  const previous = () => setIndex((current) => (current - 1 + slides.length) % slides.length);

  const activeSlide = slides[index];

  // -----------------------------------------------------------------
  // Fase E — Teclado (useEffect + limpeza do listener)
  // -----------------------------------------------------------------
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'ArrowLeft')  previous();
      if (event.key === 'ArrowRight') next();
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // -----------------------------------------------------------------
  // Renderização
  // -----------------------------------------------------------------
  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
      {/* Cartão de fundo inclinado 1 — ângulo fixo, sem Math.random() */}
      <div
        className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-purple-200/60 to-purple-100/40 border border-mauve/20 shadow-lg -rotate-3 scale-[0.98] translate-y-2 pointer-events-none transition-transform duration-500"
        aria-hidden="true"
      />

      {/* Cartão de fundo inclinado 2 — ângulo fixo */}
      <div
        className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-mauve/15 to-purple-300/20 border border-mauve/25 shadow-md rotate-2 scale-[0.99] -translate-y-1 pointer-events-none transition-transform duration-500"
        aria-hidden="true"
      />

      {/* Cartão principal */}
      <section
        aria-label="Galeria da vida selvagem"
        aria-roledescription="carrossel"
        className="relative z-10 rounded-[2rem] bg-white/90 p-5 sm:p-7 shadow-2xl shadow-purple-950/10 border border-white/80 backdrop-blur-md"
      >
        {/* Cabeçalho do card: badge de espécie + badge de status */}
        <div className="flex items-center justify-between pb-4">
          <span className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-mauve transition-all duration-300">
            {activeSlide.badge}
          </span>
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-bold border transition-all duration-300 ${STATUS_STYLES[activeSlide.statusColor]}`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${STATUS_DOT[activeSlide.statusColor]}`} />
            {activeSlide.status.toUpperCase()}
          </span>
        </div>

        {/* ---------------------------------------------------------
            Fase C + D — map() das imagens sobrepostas com transição
        --------------------------------------------------------- */}
        <div
          className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden rounded-2xl bg-purple-50 shadow-inner"
          role="group"
          aria-label={`Imagem de ${activeSlide.animal}`}
        >
          {slides.map((slide, i) => (
            <img
              key={slide.id}
              src={slide.image}
              alt={slide.alt}
              aria-hidden={i !== index}
              className={`absolute inset-0 h-full w-full object-cover transition-all duration-500 ease-out ${
                i === index
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-105 pointer-events-none'
              }`}
            />
          ))}
        </div>

        {/* ---------------------------------------------------------
            Conteúdo dinâmico do slide ativo
        --------------------------------------------------------- */}
        <div className="mt-5 space-y-2 min-h-[6rem]">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-ink font-display tracking-tight transition-all duration-300">
            {activeSlide.animal}
          </h2>
          <p className="text-sm sm:text-base text-muted-violet leading-relaxed transition-all duration-300">
            {activeSlide.description}
          </p>
        </div>

        {/* ---------------------------------------------------------
            Fase D + E — SliderControls recebe props de callback
        --------------------------------------------------------- */}
        <SliderControls
          index={index}
          count={slides.length}
          onPrevious={previous}
          onNext={next}
          onSelect={setIndex}
        />
      </section>
    </div>
  );
}