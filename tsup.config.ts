import { defineConfig } from 'tsup';
import { DEVELOPMENT_MODE } from './src/utils/constants';

export default defineConfig({
  entry: ['src/server.ts'],
  outDir: 'build',
  format: ['esm'],
  clean: true,
  sourcemap: true,
  dts: true,
  target: 'es2022',
  splitting: false,
  banner: {
    js: '#!/usr/bin/env node',
  },
  env: {
    NODE_ENV: process.env.NODE_ENV || DEVELOPMENT_MODE,
  },
  esbuildOptions(options) {
    options.alias = {
      '@': './src',
    };
  },
  watch: process.env.NODE_ENV === DEVELOPMENT_MODE,
  onSuccess: process.env.NODE_ENV === DEVELOPMENT_MODE ? 'node build/server.js' : undefined,
}); 