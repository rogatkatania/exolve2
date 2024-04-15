import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

export default defineConfig({
	base: `web-voice-sdk`,
	plugins: [solid()],
	build: {
		target: "esnext",
	},
  server: {
    port: 8080
  }
});
