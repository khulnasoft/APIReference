# Scalar useToasts()

[![Version](https://img.shields.io/npm/v/%40scalar/use-toasts)](https://www.npmjs.com/package/@apireference/use-toasts)
[![Downloads](https://img.shields.io/npm/dm/%40scalar/use-toasts)](https://www.npmjs.com/package/@apireference/use-toasts)
[![License](https://img.shields.io/npm/l/%40scalar%2Fuse-toasts)](https://www.npmjs.com/package/@apireference/use-toasts)
[![Discord](https://img.shields.io/discord/1135330207960678410?style=flat&color=5865F2)](https://discord.gg/8HeZcRGPFS)

## Installation

```bash
npm install @apireference/use-toasts
```

## Usage

```vue
// App.vue
<script setup>
import { FlowToastContainer } from '@apireference/use-toasts'
</script>

<template>
  <FlowToastContainer />
</template>
```

```vue
// ChildComponent.vue
<script setup>
import { useToasts } from '@apireference/use-toasts'

addToast({ title: 'Hello :-)' }, { timeout: 2000 })
</script>
```
