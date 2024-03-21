import { l } from 'vite/dist/node/types.d-jgA8ss1A'

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				primary: ["Poppins", "sans-serif"],
			},
			spacing: {
				'primary-l': "2rem",
				primary: "1rem",
				secondary: ".5rem",
			},
		},
	},
	plugins: [],
};
