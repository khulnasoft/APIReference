# Scalar API Client

[![Version](https://img.shields.io/npm/v/%40scalar/api-client)](https://www.npmjs.com/package/@apireference/api-client)
[![Downloads](https://img.shields.io/npm/dm/%40scalar/api-client)](https://www.npmjs.com/package/@apireference/api-client)
[![License](https://img.shields.io/npm/l/%40scalar%2Fapi-client)](https://www.npmjs.com/package/@apireference/api-client)
[![Discord](https://img.shields.io/discord/1135330207960678410?style=flat&color=5865F2)](https://discord.gg/8HeZcRGPFS)

## Installation

```bash
npm install @apireference/api-client
```

## Usage

```vue
<script setup>
import { ApiClient } from '@apireference/api-client'
</script>

<template>
  <ApiClient />
</template>
```

## Props

### proxyUrl?: string

Pass an URL of [a request proxy](https://github.com/khulnasoft/apireference/tree/main/packages/api-client-proxy) to avoid CORS issues.

## Composable

You can use `useRequestStore()` to interact with the API client.

### readOnly

```js
const { readOnly } = useRequestStore()

readOnly.value = false
```

### activeRequest

```js
const { activeRequest } = useRequestStore()

console.log(activeRequest)
```

### setActiveRequest

```js
const { setActiveRequest } = useRequestStore()

setActiveRequest({
  url: 'https://echo.scalar.com'
  type: 'GET,
  path: '/foobar'
})
```
