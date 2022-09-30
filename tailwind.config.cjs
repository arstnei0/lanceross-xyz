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
				'dark': { 'raw': '(prefers-color-scheme: dark)' },
			},
			keyframes: {
				"move-bg": {
					to: {
						backgroundPosition: "400% 0",
					},
				},
			},
			animation: {
				"move-bg": "move-bg 8s infinite linear",
			},
			typography: {
				DEFAULT: {
					css: {
						'code::before': {
							content: '""'
						},
						'code::after': {
							content: '""'
						},
						p: {
							code: {
								backgroundColor: '#282A36',
								padding: '0.250rem 0.4rem',
								borderRadius: '0.250rem',
								fontWeight: '400',
							}
						},
						li: {
							code: {
								backgroundColor: '#282A36',
								padding: '0.250rem 0.4rem',
								borderRadius: '0.250rem',
								fontWeight: '400',
							},
						},
					},
				},
			},
		},
		plugins: [
			require('tailwind-scrollbar'),
			require("@tailwindcss/typography")
		],
	}
}
