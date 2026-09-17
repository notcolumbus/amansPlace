import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import fs from "fs"
import tailwindcss from "@tailwindcss/vite"

function copyResumePlugin() {
  return {
    name: 'copy-resume-plugin',
    buildStart() {
      const srcPath = path.resolve(__dirname, 'src/resume.pdf');
      const destPath = path.resolve(__dirname, 'public/resume.pdf');
      if (fs.existsSync(srcPath)) {
        fs.copyFileSync(srcPath, destPath);
        console.log('Copied src/resume.pdf to public/resume.pdf');
      }
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), copyResumePlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
