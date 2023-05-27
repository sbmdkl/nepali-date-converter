import { resolve } from 'path';
import { defineConfig } from 'vite';

import pkg from './package.json';

export default defineConfig({
	build: {
		outDir: resolve(__dirname, './dist'),
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			name: pkg.name,
			formats: ['es', 'umd'],
			fileName: (format) => `${pkg.name}.${format}.js`,
		},
	},
});
