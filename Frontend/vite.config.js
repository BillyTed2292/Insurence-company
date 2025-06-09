const react = require("@vitejs/plugin-react");
const {defineConfig} = require("vite");
const {nodePolyfills} = require("vite-plugin-node-polyfills");
const log = require("js-log-print");

module.exports = {
  plugins: [react(), nodePolyfills(), log()],
  define: {
    "process.env": {},
  },
}
