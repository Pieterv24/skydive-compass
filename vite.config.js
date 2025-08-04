import path from 'path';

import { defineConfig } from 'vite';

import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  base: '',
  plugins: [
    // viteStaticCopy({
    //   targets: [
    //     {
    //       src: path.resolve(__dirname, 'node_modules/@shoelace-style/shoelace/dist/assets'),
    //       dest: path.resolve(__dirname, 'dist/shoelace')
    //     }
    //   ]
    // })
  ],
});
