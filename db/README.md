# db

To install dependencies:

```bash
npm i -g bun
bun install
```

To run:

```bash
docker compose up -d
bun run prisma:seed
bun run prisma:generate
bun run prisma:push

```

This project was created using `bun init` in bun v1.2.14. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
