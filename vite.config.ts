import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

export default defineConfig({
	base: `web-voice-sdk`,
	plugins: [solid()],
	build: {
		target: "esnext",
	},
  server: {
    host: "0.0.0.0",
    port: 443
  },
  preview: {
    host: "172.17.3.131",
    port: 443
  },
});
