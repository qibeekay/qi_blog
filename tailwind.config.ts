import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				dark: '#0C0C0C',
				light: '#F8F7F4',
			},
		},
		fontFamily: {
			playfair: ['Playfair Display', 'serif'],
			body: ['Namdhinggo', 'serif'],
			logo: ['Madimi One', 'san-serif'],
		},
		screens: {
			xs: '350px',
			sm: '480px',
			ms: '641px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
export default config;
