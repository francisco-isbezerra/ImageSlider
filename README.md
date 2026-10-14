# WILD / STORIES — Galeria Interativa da Vida Selvagem

> Projeto desenvolvido como atividade prática na **Aula 11** da disciplina de front-end.  
> Uma Single Page Application responsiva com React + Vite + Tailwind CSS v4 + Lucide React.

---

## 🦁 Visão Geral

**WILD / STORIES** é uma galeria interativa editorial que permite navegar por 5 espécies animais com imagens, curiosidades e indicadores de navegação. A experiência foi construída de forma progressiva, seguindo o fluxo JSX → Tailwind → Dados → Interação → Polimento.

## ✨ Funcionalidades

- 🖼️ **Carrossel com 5 slides** — Cachorros, Urso, Panda-gigante, Leão e Girafa
- 🔄 **Navegação circular** — botões Anterior / Próximo com módulo (`%`)
- ⌨️ **Teclado** — `ArrowLeft` e `ArrowRight` com `useEffect` + limpeza do listener
- 🎯 **Indicadores clicáveis** — pílulas que saltam direto para o slide
- 🔢 **Contador** — `01 / 05` sincronizado com `useState`
- ♿ **Acessibilidade** — `aria-label`, `aria-live`, `aria-current`, `aria-selected`, `focus-visible`
- 📱 **Responsivo** — layout de 1 coluna no mobile, 2 colunas no desktop
- 🎨 **Tokens de design** — `--color-ink`, `--color-mauve`, `--color-lavender` via `@theme`

## 🛠️ Stack Técnica

| Tecnologia         | Versão  | Papel                                          |
| ------------------ | ------- | ---------------------------------------------- |
| Vite               | 7.x     | Bundler e servidor de desenvolvimento          |
| React              | 19.x    | UI declarativa via JSX                         |
| Tailwind CSS       | 4.x     | Estilização utility-first com `@theme`         |
| @tailwindcss/vite  | 4.x     | Integração Tailwind + Vite sem `tailwind.config` |
| Lucide React       | latest  | Ícones `ChevronLeft` / `ChevronRight`          |
| Plus Jakarta Sans  | —       | Tipografia principal (Google Fonts)            |
| Space Grotesk      | —       | Tipografia de display / headings               |

## 📁 Estrutura de Pastas

```
image-slider/
├── public/
│   └── images/
│       ├── Cachorros.png
│       ├── Urso.png
│       ├── Panda.png
│       ├── Leao.png
│       └── Girafa.png
├── src/
│   ├── components/
│   │   ├── Background.jsx      # Gradientes ambientes + elementos decorativos
│   │   ├── ImageSlider.jsx     # Carrossel (useState + map + useEffect)
│   │   └── SliderControls.jsx  # Botões, indicadores e contador
│   ├── data/
│   │   └── slides.js           # Array de objetos com dados dos 5 animais
│   ├── App.jsx                 # Layout principal com grid responsivo
│   ├── main.jsx                # Ponto de entrada React
│   └── index.css               # @import tailwindcss + @theme tokens
├── index.html                  # SEO, Google Fonts, lang pt-BR
├── vite.config.js              # Plugin react + tailwindcss
└── package.json
```

## 🏗️ Arquitetura de Componentes

```
App
├── Background          ← gradientes e malha decorativa (fixed, aria-hidden)
├── <header>            ← WILD / STORIES + navegação
├── <main>
│   ├── <section>       ← Hero: chamada editorial, badge, h1, descrição
│   └── ImageSlider     ← gerencia state (index), navega slides
│       ├── slides.map(img)  ← imagens sobrepostas (opacity transition)
│       ├── activeSlide texto ← h2 + p sincronizados com o index
│       └── SliderControls   ← recebe props de callback
│           ├── Botão ←       (onPrevious)
│           ├── Botão →       (onNext)
│           ├── Indicadores   (onSelect)
│           └── Contador      (aria-live)
└── <footer>            ← créditos de stack
```

## 🚀 Como Rodar

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em modo desenvolvimento
npm run dev

# 3. Abrir no navegador
# http://localhost:5173
```

## 📋 Decisões de Arquitetura

- **Ângulos fixos nos cartões de fundo** — a versão original usava `Math.random()` para rotacionar os cartões decorativos, gerando re-renders com aparência instável. Substituído por ângulos literais fixos (`-rotate-3`, `rotate-2`).
- **Arrays separados eliminados** — dados consolidados em um único `slides.js` com objetos que reúnem `image`, `alt`, `animal`, `badge`, `status`, `statusColor` e `description`.
- **className em JSX** — todos os componentes usam `className` (nunca `class`), conforme exigido pelo React.
- **Limpeza do `useEffect`** — o listener de teclado retorna a função de `removeEventListener` para evitar múltiplos registros ao re-montar o componente.
- **Atualização funcional do estado** — `setIndex(current => ...)` garante leitura do valor mais recente, evitando bugs de closure.

## 📝 Histórico de Commits

| Commit | Descrição |
|--------|-----------|
| `669ab9f` | primeiro commit |
| `de01d9f` | Meu primeiro commit |
| `c519e97` | feat: create semantic jsx landing page |
| `8d716b4` | feat: create semantic jsx landing page |
| `62d44ff` | refactor: split slider into reusable components |
| _próximo_ | style: implement responsive slider with tailwind |
| _próximo_ | feat: model animal slides data |
| _próximo_ | feat: add carousel navigation with useState |
| _próximo_ | docs: complete README and screenshots |

## 🌐 Ambiente

```
Node.js : v22.11.0
npm     : 10.9.0
Vite    : 7.3.7
React   : 19.3.0
```

---

_Projeto acadêmico — Aula 11 · React + Tailwind CSS · WILD / STORIES_
