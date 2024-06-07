# Front Challenge - Pokémons

Challenge project developed in just 3 days for the selection process for [Coodesh](https://coodesh.com/). Reading the requirements and evaluation criteria I came to the final result, which is this repository.

**Live Version**: [https://kotas-front-challenge.vercel.app/](https://kotas-front-challenge.vercel.app/)

**Figma Design File**: the construction of the project followed the /design/figma.fig design file given by Coodesh.

**Tech Stack**: [Nuxt 3](https://nuxt.com/), [Tailwind CSS](https://tailwindcss.com/), [Typescript](https://www.typescriptlang.org/), [Tanstack Query](https://tanstack.com/query/latest).

## Pre-installation

You must already have [Node.js](https://nodejs.org) v18.0.0 or higher installed.

## Installation

1. Clone the repository

```bash
git clone git@github.com:antoniozanotti/kotas-front-challenge.git
```

2. Go into the project folder

```bash
cd kotas-front-challenge
```

3. Install dependencies

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

4. You already have everything ready to start the server locally `http://localhost:3000`

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

or if you want to run in a production environment

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

or if you want to run the build locally

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

## Suggestions for improvements to the provided design file

- Creation of variables for colors, font styles, dropshadown and border radius.
- Creation of a page with guidelines.
- Standardize margins, paddings, line heights and border-radius.
- Use the Tailwind CSS standard sizes and colors.
- Creation of skeletons.
- Creation of state with no results found.
- Better specification of the scroll or fixed bar visual element at the top, the expected behavior was not clear and that's why I didn't do it.

## Folder and file structure
- assets: for images and styles that will not available in the public folder.
  - css/main.css: style file that will be included in every application.
- components: stores the visual components.
  - common: components present on more than one page.
  - pages: specific components of each page.
  - ui: interface components that could be removed from this project to create a library of reusable components across projects. The styles of these components are only of their scope and not the project.
- composables: for api calls with tanstack.
- design: design files received.
- layouts: Nuxt's default folder that allows multiple layouts for application, but only one was used.
- pages: Nuxt route structure and component calls for each page.
- plugins: Nuxt default folder.
  - vue-query.ts: plugin for @tanstack/vue-query.
- public: contains assets that will be available via the route /.
- nuxt.config.ts: Nuxt configuration for libraries: @nuxtjs/google-fonts, @nuxt/image, tailwindcss. I also styled the background color of body here.
- tailwind.config.js: Tailwind CSS configuration file. Configured default fonts, boxShadow, and example of how color customization could be used.

## Git Branches
- main: for development environment
- production: For a production environment, when a push is made to production, a new deploy is automatically triggered.