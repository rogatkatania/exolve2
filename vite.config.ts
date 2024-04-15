import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

export default defineConfig({
	base: `web-voice-sdk`,
	plugins: [solid()],
	build: {
		target: "esnext",
	},
  server: {
    proxy: {
      '/foo': 'http://localhost:5173',
      '/': {
        target: 'https://exolve1-production-fb81.up.railway.app/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/, ''),
      },
    host: true,  
    port: 5173
  },
  preview: {
    port: 8080,
  },
});
