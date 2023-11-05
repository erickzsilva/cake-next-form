This is a [Next.js 13](https://nextjs.org/) project.
![ci](public/img/badge.svg)

## What is inside?

This project uses lot of stuff as:

- [TypeScript](https://www.typescriptlang.org/)
- [NextJS](https://nextjs.org/)
- [Vercel](https://vercel.com/)
- [Styled Components](https://styled-components.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Storybook](https://storybook.js.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)
- [Mocki](https://mocki.io/)
- [Plop](https://plopjs.com/)

## Getting Started

First, run the development server:

- `Node 18.x`

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Commands

- `dev`: runs your application on `localhost:3000`
- `build`: creates the production build version
- `start`: starts a simple server with the build production code
- `lint`: runs the linter in all components and pages
- `test`: runs jest to test all components and pages
- `test:watch`: runs jest in watch mode
- `storybook`: runs storybook on `localhost:6006`
- `build-storybook`: create the build version of storybook
- `generate`: creates an initial structure of components.

## CI

A custom continuous integration (CI) workflow was created in this repository with [GitHub Actions](https://docs.github.com/en/actions/automating-builds-and-tests/about-continuous-integration):

- `on`: pull_request
- `runs-on`: ubuntu-latest
- `actions/checkout@v3`: Checkout Repository
- `actions/setup-node@v3`: Setup Node 18.x
- `Install dependencies`: npm install
- `Linting`: npm run lint
- `Testing`: npm run test
- `Build`: npm run build

## Deploy on Vercel

This project is hosted on [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) with the current version of main. [Click here](https://cake-next-form.vercel.app/) to view it.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Api

An API was created for this project through [Mocki](https://mocki.io/), see the [API](https://api.mocki.io/v2/a687db22/cake-response).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Docs](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/).

To learn more about Mocki:

- [Mocki Docs](https://mocki.io/docs)

To learn more about TypeScript :

- [TypeScript Docs](https://www.typescriptlang.org/docs/)

To learn more about Styled Component :

- [Styled Component Docs](https://styled-components.com/docs)

To learn more about Redux Toolkit :

- [Redux Toolkit Overview](https://redux-toolkit.js.org/tutorials/overview)

To learn more about Storybook :

- [Storybook Docs](https://storybook.js.org/tutorials/)
