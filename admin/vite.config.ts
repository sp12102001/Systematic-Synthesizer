import { contember } from '@contember/vite-plugin'
import { defineConfig } from 'vite'

export default defineConfig(({ command }) => ({
	base: command === 'build' ? './' : '/',
	plugins: [contember()],
}))
