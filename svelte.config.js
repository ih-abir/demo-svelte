import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			strict: false
		}),
		alias: {
			$lib: 'src/lib',
			$assets: 'src/assets',
			$styles: 'src/styles'
		}
	}
};

export default config;
