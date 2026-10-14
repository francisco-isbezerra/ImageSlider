import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * SliderControls — Controles de navegação do carrossel.
 *
 * Props:
 *  - index      {number}   índice do slide ativo
 *  - count      {number}   total de slides
 *  - onPrevious {function} dispara o slide anterior
 *  - onNext     {function} dispara o próximo slide
 *  - onSelect   {function} salta para o índice indicado pelo indicador
 */
export default function SliderControls({ index, count, onPrevious, onNext, onSelect }) {
  const padded = (n) => String(n).padStart(2, '0');

  return (
    <div
      role="group"
      aria-label="Controles do slider"
      className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-mauve/10"
    >
      {/* Botões Anterior e Próximo */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          aria-label="Imagem anterior"
          onClick={onPrevious}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-mauve/20 bg-white/80 text-ink shadow-sm backdrop-blur-sm transition-all duration-200 hover:border-mauve hover:bg-mauve hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mauve focus-visible:ring-offset-2 active:scale-95 cursor-pointer"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>

        <button
          type="button"
          aria-label="Próxima imagem"
          onClick={onNext}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-mauve/20 bg-white/80 text-ink shadow-sm backdrop-blur-sm transition-all duration-200 hover:border-mauve hover:bg-mauve hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mauve focus-visible:ring-offset-2 active:scale-95 cursor-pointer"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      {/* Indicadores de página clicáveis */}
      <div className="flex items-center gap-2" role="tablist" aria-label="Slides disponíveis">
        {Array.from({ length: count }).map((_, dotIndex) => (
          <button
            key={dotIndex}
            type="button"
            role="tab"
            aria-selected={dotIndex === index}
            aria-current={dotIndex === index ? 'true' : undefined}
            aria-label={`Ir para o slide ${dotIndex + 1}`}
            onClick={() => onSelect(dotIndex)}
            className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mauve focus-visible:ring-offset-1 cursor-pointer ${
              dotIndex === index
                ? 'w-7 bg-mauve'
                : 'w-2 bg-mauve/25 hover:bg-mauve/50'
            }`}
          />
        ))}
      </div>

      {/* Contador numérico de página */}
      <div className="flex items-center">
        <span
          aria-live="polite"
          aria-atomic="true"
          aria-label={`Slide ${index + 1} de ${count}`}
          className="rounded-full bg-mauve/10 px-3 py-1 font-mono text-xs sm:text-sm font-bold tracking-widest text-mauve border border-mauve/20"
        >
          {padded(index + 1)} <span className="text-mauve/40 font-light">/</span> {padded(count)}
        </span>
      </div>
    </div>
  );
}