import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  experimental: {
    fonts: [
      {
        provider: "local",
        name: "InterLocal",
        cssVariable: "--font-inter",
        variants: [
          { weight: 400, style: "normal", src: ["./src/assets/fonts/Inter-Regular.woff2"] },
          { weight: 600, style: "normal", src: ["./src/assets/fonts/Inter-SemiBold.woff2"] },
          { weight: 700, style: "normal", src: ["./src/assets/fonts/Inter-Bold.woff2"] }
        ]
      },
      {
        provider: "local",
        name: "InterLocalDisplay",
        cssVariable: "--font-inter-display",
        variants: [
          { weight: 400, style: "normal", src: ["./src/assets/fonts/InterDisplay-Regular.woff2"] },
          { weight: 500, style: "normal", src: ["./src/assets/fonts/InterDisplay-Medium.woff2"] },
          { weight: 600, style: "normal", src: ["./src/assets/fonts/InterDisplay-SemiBold.woff2"] }
        ]
      },
      {
        provider: "local",
        name: "GaretBook",
        cssVariable: "--font-garet-book",
        variants: [
          { weight: 400, style: "normal", src: ["./src/assets/fonts/Garet-Book.woff2"] }
        ]
      },
      {
        provider: "local",
        name: "GaretHeavy",
        cssVariable: "--font-garet-heavy",
        variants: [
          { weight: 700, style: "normal", src: ["./src/assets/fonts/Garet-Heavy.woff2"] }
        ]
      }
    ]
  }
})
