<script lang="ts" setup>
import { CodeMirror } from '@apireference/use-codemirror'

import { prettyPrintJson } from '../../../../helpers'

defineProps<{
  response:
    | undefined
    | {
        examples?: Record<string, any>
        example?: any
        schema?: any
      }
}>()
</script>
<template>
  <CodeMirror
    v-if="response?.schema"
    :content="prettyPrintJson(response.schema)"
    :languages="['json']"
    readOnly />
</template>
