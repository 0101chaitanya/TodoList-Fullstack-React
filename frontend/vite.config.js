import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
import netlify from "@netlify/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
    plugins: [tailwindcss(), react(), netlify()],

    server: {
        proxy: {
            // '/api/': {
            //     target: 'http://localhost:3000', // Replace with your
            //     // Express server URL
            //     changeOrigin: true,
            //     secure: false,
            // }
        }
    }

})
