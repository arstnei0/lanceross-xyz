/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'lexend-deca': "'Lexend Deca', san-serif",
			},
			zIndex: {
				'10': '1',
			},
			gridTemplateColumns: {
				'1': 'repeat(auto-fit, minmax(24ch, 1fr));'
			},
			screens: {
				'dark': {'raw': '(prefers-color-scheme: dark)'},
			},
		},
	},
	plugins: [
		require('tailwind-scrollbar'),
	],
}
