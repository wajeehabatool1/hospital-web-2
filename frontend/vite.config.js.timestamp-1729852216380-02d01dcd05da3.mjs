// vite.config.js
import { defineConfig } from "file:///app/node_modules/vite/dist/node/index.js";
import react from "@vitejs/plugin-react";
var vite_config_default = defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || "/",
  // Fallback to '/' if env var isn't set
  server: {
    watch: {
      usePolling: true
      // Ensures files are updated correctly inside Docker containers
    },
    host: "0.0.0.0",
    // Ensure the server listens on all network interfaces
    strictPort: true,
    // Prevents Vite from switching to a different port if 5173 is in use
    port: 5173,
    // You can change this port if needed
    open: false
    // Optional: Prevents browser auto-opening inside Docker
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvYXBwXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvYXBwL3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9hcHAvdml0ZS5jb25maWcuanNcIjsvLyB2aXRlLmNvbmZpZy5qc1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCldLFxuICBiYXNlOiBwcm9jZXNzLmVudi5WSVRFX0JBU0VfUEFUSCB8fCAnLycsIC8vIEZhbGxiYWNrIHRvICcvJyBpZiBlbnYgdmFyIGlzbid0IHNldFxuICBzZXJ2ZXI6IHtcbiAgICB3YXRjaDoge1xuICAgICAgdXNlUG9sbGluZzogdHJ1ZSwgLy8gRW5zdXJlcyBmaWxlcyBhcmUgdXBkYXRlZCBjb3JyZWN0bHkgaW5zaWRlIERvY2tlciBjb250YWluZXJzXG4gICAgfSxcbiAgICBob3N0OiAnMC4wLjAuMCcsIC8vIEVuc3VyZSB0aGUgc2VydmVyIGxpc3RlbnMgb24gYWxsIG5ldHdvcmsgaW50ZXJmYWNlc1xuICAgIHN0cmljdFBvcnQ6IHRydWUsIC8vIFByZXZlbnRzIFZpdGUgZnJvbSBzd2l0Y2hpbmcgdG8gYSBkaWZmZXJlbnQgcG9ydCBpZiA1MTczIGlzIGluIHVzZVxuICAgIHBvcnQ6IDUxNzMsIC8vIFlvdSBjYW4gY2hhbmdlIHRoaXMgcG9ydCBpZiBuZWVkZWRcbiAgICBvcGVuOiBmYWxzZSwgLy8gT3B0aW9uYWw6IFByZXZlbnRzIGJyb3dzZXIgYXV0by1vcGVuaW5nIGluc2lkZSBEb2NrZXJcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sV0FBVztBQUdsQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsTUFBTSxRQUFRLElBQUksa0JBQWtCO0FBQUE7QUFBQSxFQUNwQyxRQUFRO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCxZQUFZO0FBQUE7QUFBQSxJQUNkO0FBQUEsSUFDQSxNQUFNO0FBQUE7QUFBQSxJQUNOLFlBQVk7QUFBQTtBQUFBLElBQ1osTUFBTTtBQUFBO0FBQUEsSUFDTixNQUFNO0FBQUE7QUFBQSxFQUNSO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
