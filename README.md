# Notes
this has been updated to use nextjs

# next js
```sh
npx create-next-app@latest
npm run dev
npm run build && npx serve@latest out
```

## some notes
- The build CI step runs a build and deploys it to pages.
- The DNS resolver is linked to a Route53 resolver on AWS (there exists an A record hardlinked to GitHub pages IP's).
- The SSL certificate is provisioned by Github pages (managed through click ops) TODO: Use IaC to deploy AWS templates (private Github repo + vault setup tbd)


# for vite
- goto react-vite-storybook branch for the vite/typescript/react/storybook branch - CRA is deprecated

```sh
npm create vite@latest my-app --template react
mv my-app/* .
npm install
npm run dev
```


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

<details>
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
</details>