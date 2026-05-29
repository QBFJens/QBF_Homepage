import type { Config } from 'tailwindcss'
const config: Config = { content: ['./app/**/*.{js,ts,jsx,tsx,mdx}','./components/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { ink:'#07111f', qblue:'#0b5cff', cyan:'#55d7ff' }, fontFamily: { sans:['Inter','ui-sans-serif','system-ui'] }, boxShadow:{ glow:'0 0 80px rgba(85,215,255,.18)' } } }, plugins: [] }
export default config
