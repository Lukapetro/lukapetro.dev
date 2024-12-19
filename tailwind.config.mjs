/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'terminal-bg': '#1a1b26',         // Darker terminal background
				'terminal-window': '#0f172a',     // Even darker for the window
				'terminal-text': '#e2e8f0',       // Light text
				'terminal-accent': '#38bdf8',     // Bright blue accent
				'terminal-dim': '#64748b',        // Dimmed text
				'terminal-border': '#2d3548',     // Visible border
			},
			fontFamily: {
				mono: ['IBM Plex Mono', 'monospace'],
			},
			boxShadow: {
				'terminal': '0 0 10px rgba(0, 0, 0, 0.5)',
			}
		},
	},
	plugins: [],
}