import { mdsvex } from "mdsvex";

export default {
	...boring_config_stuff,
	plugins: [
		svelte({
			// tell svelte to handle mdsvex files
			extensions: [".svelte", ".svx"],
			preprocess: mdsvex()
		})
	]
};