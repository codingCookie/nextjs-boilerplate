# Nextjs Boilerplate with Typescript, EmotionJS, ESLint, Prettier and Jest

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
I've added some packages to make it easiert to start with a new project.

## Packages & Files added to

- [next-secure-headers](https://www.npmjs.com/package/next-secure-headers) - to add Secure Headers in an easy way
  - can be defined in next.config.js
- [next-sitemap](https://www.npmjs.com/package/next-sitemap) to create a Sitemap and a robots.txt
  - ConfigFile `next-sitemap.js` added to root folder
- .hintrc > check a11y issues with [webhint](https://webhint.io/) in [VS Code](https://webhint.io/docs/user-guide/extensions/vscode-webhint/)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## More about Next.js

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
