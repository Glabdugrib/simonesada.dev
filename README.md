# simonesada.dev

[//]: # '// x-release-please-start-version'

![Latest Release](https://img.shields.io/badge/latest_release-amber?style=plastic&label=1.5.2)

[//]: # '// x-release-please-end'

![Release Workflow](https://github.com/Glabdugrib/simonesada.dev/actions/workflows/release-please.yml/badge.svg?branch=main)
![Deploy Workflow](https://github.com/Glabdugrib/simonesada.dev/actions/workflows/deploy.yml/badge.svg?branch=main)
![Node Version](https://img.shields.io/badge/node-24.14.1-blue?style=plastic)
![PNPM Version](https://img.shields.io/badge/pnpm-10.33.0-blue?style=plastic)

Personal portfolio site, live at [simonesada.dev](https://simonesada.dev).

## Stack

- **Framework** — [Nuxt](https://nuxt.com)
- **Language** — TypeScript
- **Styling** — Tailwind CSS
- **Hosting** — AWS Amplify

## Setup

Install dependencies:

```bash
pnpm install
```

## Development

Start the development server on `http://localhost:3000`:

```bash
pnpm dev
```

## Production

Build for production:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```

## Deployment

Deployments to AWS Amplify are triggered manually via the **deploy** GitHub Actions workflow. Authentication uses OIDC and no long-lived AWS credentials are stored.
