const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	
	theme: {
		
		extend: {
			typography: {
				DEFAULT: {
					css: {
						maxWidth: null,
					},
				},
			},
			fontSize:{
				title: '2.5rem;',
			},
			fontFamily: {
				starJedi: ["Star Jedi"]
			},
			colors:{
				'transparent':{
					100:'rgba(106, 106, 106, 0.16)',
					200:'rgba(106, 106, 106, 0.08)',
					300:'rgba(106, 106, 106, 0.24)',
					400:'rgba(106, 106, 106, 0.32)'
				}
			},
		}
	},

	plugins: [
		require('@tailwindcss/typography'),
	]
};

module.exports = config;
