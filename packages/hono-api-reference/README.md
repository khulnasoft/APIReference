# Scalar Hono API Reference Plugin

[![Version](https://img.shields.io/npm/v/%40scalar/hono-api-reference)](https://www.npmjs.com/package/@apireference/hono-api-reference)
[![Downloads](https://img.shields.io/npm/dm/%40scalar/hono-api-reference)](https://www.npmjs.com/package/@apireference/hono-api-reference)
[![License](https://img.shields.io/npm/l/%40scalar%2Fhono-api-reference)](https://www.npmjs.com/package/@apireference/hono-api-reference)
[![Discord](https://img.shields.io/discord/1135330207960678410?style=flat&color=5865F2)](https://discord.gg/8HeZcRGPFS)

This middleware provides an easy way to render a beautiful API reference based on an OpenAPI/Swagger file with Hono.

![hono-js](https://github.com/khulnasoft/apireference/assets/6176314/6f5a2102-e377-4d4e-9cfb-a512f5e0a9ba)

## Installation

```bash
npm install @apireference/hono-api-reference
```

## Usage

Set up [Zod OpenAPI Hono](https://github.com/honojs/middleware/tree/main/packages/zod-openapi) and pass the configured URL to the `apiReference` middleware:

```ts
import { apiReference } from '@apireference/hono-api-reference'

app.get(
  '/reference',
  apiReference({
    spec: {
      url: '/swagger.json',
    },
  }),
)
```

The Hono middleware takes our universal configuration object, [read more about configuration](https://github.com/khulnasoft/apireference/tree/main/packages/api-reference#props) in the core package README.

### Themes

The middleware comes with a custom theme for Hono. You can use one of [the other predefined themes](https://github.com/khulnasoft/apireference/blob/main/packages/themes/src/index.ts#L15) (`alternate`, `default`, `moon`, `purple`, `solarized`) or overwrite it with `none`. All themes come with a light and dark color scheme.

```ts
import { apiReference } from '@apireference/hono-api-reference'

app.get(
  '/reference',
  apiReference({
    theme: 'purple',
    spec: {
      url: '/swagger.json',
    },
  }),
)
```

### Custom page title

There’s one additional option to set the page title:

```ts
import { apiReference } from '@apireference/hono-api-reference'

app.get(
  '/reference',
  apiReference({
    pageTitle: 'Hono API Reference',
    spec: {
      url: '/swagger.json',
    },
  }),
)
```
