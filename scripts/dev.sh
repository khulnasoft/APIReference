#!/bin/bash

pnpm concurrently \
    --prefix none \
    " \
        pnpm \
            --workspace-concurrency=100 \
            --filter @apireference-examples/web \
            --filter @apireference-examples/react \
            --filter @apireference-examples/api-client-proxy \
            --filter @apireference-examples/echo-server \
            --filter @apireference-examples/fastify-api-reference \
            --filter @apireference-examples/hono-api-reference \
            --filter @apireference-examples/express-api-reference \
            --filter @apireference-examples/nestjs-api-reference \
            --filter @apireference-examples/nextjs-api-reference \
            dev \
    " \
    " \
        pnpm \
            --workspace-concurrency=100 \
            --filter @apireference/api-reference \
            --filter @apireference/components \
            storybook --no-open \
    "
