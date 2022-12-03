import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { searchForWorkspaceRoot } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()],
	server:
	{
		proxy:
		{
			'/api': 'http://localhost:7071'
		},
		fs: {
			allow: [
				// search up for workspace root
				searchForWorkspaceRoot(process.cwd()),
				// your custom rules
				'../../'
			]
		}
	}
};

export default config;
