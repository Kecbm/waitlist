# Waitlist

## Backlog

- Estilização
    - Letras, botões, detalhes (negrito, *), espaçamentos e hovers
        - Home
        - /jobs
        - /jobs/[slug]
        - Privacy police
        - Not found
    - Icones dos inputs
- Descrição de todas as vagas
- Deploy
- Backend
- Demo com os jogos já desenvolvidos (salvar as coisas em localhost porque é demo não precisa de db nesse caso)
- Toogle light/dark mode
- Botão que leva a aplicação para o usuário jogar jogos no modo demo
- Refatoração do projeto para padrões de qualidade


## Finalizar

- Estudar como o projeto funciona em Qwik para poder apresentar, montar apresentação e por fim fazer a demo direto na url de deploy


## Melhorias

- O que não tem na waitlist original
    - Redes sociais da empresa no Footer (LinkedIn: https://www.linkedin.com/company/highstackcasino/)
    - Campo email não padronizado entre home e página de detalhe de uma posição
    - Confirmação visual de cadastro de email
    - Tela com texto de politica de privacidade
    - Tela de not found


## Desafios

- Gradiente
- Buscar fontes gratuitas parecidas com as pagas da waitlist original
- Botão open positions



# Qwik City App ⚡️

- [Qwik Docs](https://qwik.dev/)
- [Discord](https://qwik.dev/chat)
- [Qwik GitHub](https://github.com/QwikDev/qwik)
- [@QwikDev](https://twitter.com/QwikDev)
- [Vite](https://vitejs.dev/)

---

## Project Structure

This project is using Qwik with [QwikCity](https://qwik.dev/qwikcity/overview/). QwikCity is just an extra set of tools on top of Qwik to make it easier to build a full site, including directory-based routing, layouts, and more.

Inside your project, you'll see the following directory structure:

```
├── public/
│   └── ...
└── src/
    ├── components/
    │   └── ...
    └── routes/
        └── ...
```

- `src/routes`: Provides the directory-based routing, which can include a hierarchy of `layout.tsx` layout files, and an `index.tsx` file as the page. Additionally, `index.ts` files are endpoints. Please see the [routing docs](https://qwik.dev/qwikcity/routing/overview/) for more info.

- `src/components`: Recommended directory for components.

- `public`: Any static assets, like images, can be placed in the public directory. Please see the [Vite public directory](https://vitejs.dev/guide/assets.html#the-public-directory) for more info.

## Add Integrations and deployment

Use the `npm run qwik add` command to add additional integrations. Some examples of integrations includes: Cloudflare, Netlify or Express Server, and the [Static Site Generator (SSG)](https://qwik.dev/qwikcity/guides/static-site-generation/).

```shell
npm run qwik add # or `yarn qwik add`
```

## Development

Development mode uses [Vite's development server](https://vitejs.dev/). The `dev` command will server-side render (SSR) the output during development.

```shell
npm start # or `yarn start`
```

> Note: during dev mode, Vite may request a significant number of `.js` files. This does not represent a Qwik production build.

## Preview

The preview command will create a production build of the client modules, a production build of `src/entry.preview.tsx`, and run a local server. The preview server is only for convenience to preview a production build locally and should not be used as a production server.

```shell
npm run preview # or `yarn preview`
```

## Production

The production build will generate client and server modules by running both client and server build commands. The build command will use Typescript to run a type check on the source code.

```shell
npm run build # or `yarn build`
```
