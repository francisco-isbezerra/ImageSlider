export default function Background() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      {/* Gradientes ambientes suaves em tons lilás/violeta */}
      <div className="absolute -top-40 -right-32 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-mauve/15 via-purple-300/20 to-transparent blur-3xl" />
      <div className="absolute top-1/3 -left-48 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-purple-200/25 via-mauve/10 to-transparent blur-3xl" />
      <div className="absolute -bottom-48 right-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-t from-mauve/10 via-pink-200/15 to-transparent blur-3xl" />

      {/* Elementos decorativos editoriais com ângulos fixos (sem Math.random()) */}
      <div className="absolute top-24 right-[12%] h-48 w-48 rounded-3xl border border-mauve/10 bg-white/30 backdrop-blur-sm -rotate-6 hidden lg:block" />
      <div className="absolute bottom-28 left-[8%] h-36 w-36 rounded-2xl border border-mauve/10 bg-white/20 backdrop-blur-sm rotate-12 hidden lg:block" />

      {/* Malha sutil de fundo */}
      <div className="absolute inset-0 bg-[radial-gradient(#6039ad_0.75px,transparent_0.75px)] [background-size:32px_32px] opacity-[0.035]" />
    </div>
  );
}