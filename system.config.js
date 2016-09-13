System.config({
	baseUrl: 'src',
	map: {
		text: 'node_modules/systemjs-plugin-text/text.js'
	},
	meta: {
		'src/templates/*.html': {
			loader: 'text'
		}
	}
});
