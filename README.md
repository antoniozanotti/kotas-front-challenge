# Front Challenge - Pokémons

Esse é um projeto de desafio para [Coodesh](https://coodesh.com/). Lendo os requisitos e critérios de avaliação cheguei ao resultado final que é este repositório.

**Disponível em**: [https://kotas-front-challenge.vercel.app/](https://kotas-front-challenge.vercel.app/)

**Figma Design File**: a construção do projeto seguiu o arquivo de design /design/figma.fig concedido pela Coodesh.

**Tech Stack**: [Nuxt 3](https://nuxt.com/), [Tailwind CSS](https://tailwindcss.com/), [Typescript](https://www.typescriptlang.org/), [Tanstack Query](https://tanstack.com/query/latest).

## Pré-instalação

Você já deve ter [Node.js](https://nodejs.org) v18.0.0 ou superior instalado.

## Instalação

1. Clone o repositório

```bash
git clone git@github.com:antoniozanotti/kotas-front-challenge.git
```

2. Entre na pasta do projeto

```bash
cd kotas-front-challenge
```

3. Instale as dependências

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

4. Você já tem tudo pronto para iniciar o servidor localmente `http://localhost:3000`

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

ou se quiser rodar em ambiente de produção

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

ou se quiser rodar o build localmente

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

## Sugestões de melhorias para o arquivo de design fornecido

- Criação de variáveis para cores, estilos de fonte, dropshadown e border radius.
- Criação de página com guidelines.
- Padronizar margens, paddings, line heights e border-radius.
- Utilizar o padrão de tamanhos e cores do Tailwind CSS.
- Criação de skeletons.
- Criação de estado sem resultados encontrados.
- Melhor especificação do elemento visual de scroll ou de barra fixa do topo, não ficou claro o comportamento esperado e por isso não o fiz.

## Estrutura de pastas e arquivos
- assets: para imagens e estilos que não ficaram disponíveis na pasta public.
  - css/main.css: arquivo de estilo que será incluído em toda aplicação.
- components: armazena os componentes visuais.
  - common: componentes presentes em mais de uma página.
  - pages: componentes específicos de cada página.
  - ui: componentes de interface que poderiam ser removidos deste projeto para criar uma biblioteca de componentes reutilizáveis entre projetos. Os estilos destes componentes são apenas do escopo deles e não do projeto.
- composables: para as chamadas de api com o tanstack.
- design: arquivos recebidos do design.
- layouts: pasta padrão do Nuxt que permite múltiplos layouts para aplicação, mas foi utilizado apenas um.
- pages: estrutura de rotas do Nuxt e chamada dos componentes para cada página.
- plugins: pasta padrão do Nuxt.
  - vue-query.ts: plugin do @tanstack/vue-query
- public: contém assets que ficarão disponíveis pela rota /
- nuxt.config.ts: configuração do Nuxt para as bibliotecas: @nuxtjs/google-fonts, @nuxt/image, tailwindcss. Também estilizei a cor de fundo do body por aqui.
- tailwind.config.js: arquivo de configuração do Tailwind CSS. Configurado padrão de fontes, boxShadow, e exemplo de como poderia ser utilizado customização de cores.

## Git Branches
- main: para ambiente de desenvolvimento
- production: para ambiente de produção, quando feito um push para production é disparado novo deploy automaticamente.