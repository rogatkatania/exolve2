import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

export default defineConfig({
	base: `web-voice-sdk`,
	plugins: [solid()],
	build: {
		target: "esnext",
	},
  server: {
  host: 'exolve1.railway.internal',
  port: 443
}
});
