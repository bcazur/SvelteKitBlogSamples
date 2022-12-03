import azure from 'svelte-adapter-azure-swa';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: azure({
			customStaticWebAppConfig: {
				routes: [
					{
						route: '/api/testapi',
						methods:  [
							"POST",
							"GET"
						],
						allowedRoles: ['anonymous']
					}
				],
				mimeTypes: {
					'.json': 'text/json'
				}
			}
		})
		 
	}
};

export default config;
