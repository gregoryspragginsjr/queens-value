import ViteYaml from '@modyfi/vite-plugin-yaml';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    optimizeDeps: {
      exclude: [
        'date-fns'
      ]
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/styles.scss" as *;'
        }
      }
    },
    plugins: [
      ViteYaml()
    ],
  },
})
