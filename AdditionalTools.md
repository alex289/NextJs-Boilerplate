## Additional Tools

#### Prisma
```
yarn add @prisma/client

yarn add -D prisma
```

- Rename `lib/prisma.txt` to `lib/prisma.ts`
- Configure model in `prisma/schema.prisma`
- Use in api routes

#### Auth

[NextAuth docs](https://next-auth.js.org/getting-started/introduction)

```
yarn add next-auth
```

- Add SessionProvider to _app
- Create `/api/auth/[...nextauth].ts`
- Use `UseSession` in components


> If your pages keep freezing after build downgrade preact to 10.6.5 or below (Maybe remove "react/jsx-runtime.js" replacement in `next.config.js`).
