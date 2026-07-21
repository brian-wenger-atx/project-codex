# syntax=docker/dockerfile:1

FROM node:22-bookworm-slim AS deps
WORKDIR /repo
RUN corepack enable && corepack prepare pnpm@10.12.4 --activate
COPY package.json pnpm-workspace.yaml .nvmrc ./
COPY app/package.json ./app/
COPY packages/queue-contracts/package.json ./packages/queue-contracts/
RUN pnpm install --frozen-lockfile=false

FROM deps AS build
COPY packages/queue-contracts ./packages/queue-contracts
COPY app ./app
RUN pnpm --filter @bookfellow/queue-contracts build \
 && pnpm --filter @bookfellow/web build

FROM node:22-bookworm-slim AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
RUN useradd -m -u 1001 nextjs
COPY --from=build /repo/app/public ./public
COPY --from=build --chown=nextjs:nextjs /repo/app/.next/standalone ./
COPY --from=build --chown=nextjs:nextjs /repo/app/.next/static ./app/.next/static
USER nextjs
EXPOSE 3000
CMD ["node", "app/server.js"]
