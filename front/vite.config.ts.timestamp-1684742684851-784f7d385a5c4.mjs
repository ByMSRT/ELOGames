// vite.config.ts
import { defineConfig } from "file:///usr/src/front/node_modules/vite/dist/node/index.js";
import react from "file:///usr/src/front/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true
    },
    host: true,
    // needed for the Docker Container port mapping to work
    strictPort: true,
    port: 5173
    // you can replace this port with any port
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvdXNyL3NyYy9mcm9udFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL3Vzci9zcmMvZnJvbnQvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL3Vzci9zcmMvZnJvbnQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnXHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcclxuICBzZXJ2ZXI6IHtcclxuICAgIHdhdGNoOiB7XHJcbiAgICAgIHVzZVBvbGxpbmc6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgaG9zdDogdHJ1ZSwgLy8gbmVlZGVkIGZvciB0aGUgRG9ja2VyIENvbnRhaW5lciBwb3J0IG1hcHBpbmcgdG8gd29ya1xyXG4gICAgc3RyaWN0UG9ydDogdHJ1ZSxcclxuICAgIHBvcnQ6IDUxNzMsIC8vIHlvdSBjYW4gcmVwbGFjZSB0aGlzIHBvcnQgd2l0aCBhbnkgcG9ydFxyXG4gIH1cclxufSkiXSwKICAibWFwcGluZ3MiOiAiO0FBQTROLFNBQVMsb0JBQW9CO0FBQ3pQLE9BQU8sV0FBVztBQUdsQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsUUFBUTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0wsWUFBWTtBQUFBLElBQ2Q7QUFBQSxJQUNBLE1BQU07QUFBQTtBQUFBLElBQ04sWUFBWTtBQUFBLElBQ1osTUFBTTtBQUFBO0FBQUEsRUFDUjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
