import { crx } from '@crxjs/vite-plugin';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill';
import react from '@vitejs/plugin-react';
import { nodeModulesPolyfillPlugin } from 'esbuild-plugins-node-modules-polyfill';
import { join } from 'path';
import path from 'path';
import fs from 'fs';
// import builtins from 'rollup-plugin-node-builtins';
import rollupNodePolyFill from 'rollup-plugin-node-polyfills';
import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import inject from '@rollup/plugin-inject';
import * as buffer from 'buffer/index';

import manifest from './src/manifest';
import removeSrcFromHtmlPaths from './utils/plugins/removeSrcFromHtmlPaths';

export default defineConfig({
  build: {
    target: 'es2020',
    rollupOptions: {
      input: {
        welcome: join(__dirname, 'src/welcome/welcome.html'),
      },
      output: {
        chunkFileNames: 'assets/chunk-[hash].js',
      },
      plugins: [rollupNodePolyFill()],
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020',
      supported: { bigint: true },
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true,
        }),
        NodeModulesPolyfillPlugin(),
      ],
    },
  },
  define: {
    global: 'globalThis',
  },
  plugins: [react(), crx({ manifest }), removeSrcFromHtmlPaths()],
});
