/// <reference types="vitest" />
import { resolve } from 'path'
import { UserConfig, defineConfig, loadEnv } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import svgr from 'vite-plugin-svgr'
import react from '@vitejs/plugin-react'

export default ({ mode }: UserConfig) => {
    process.env = { ...process.env, ...loadEnv(mode ?? '', process.cwd()) }

    return defineConfig({
        base: process.env.VITE_BASEPATH,
        plugins: [
            react(),
            svgr(),
            VitePWA({
                manifest: {
                    theme_color: '1A1A1AFF',
                    background_color: '#000000',
                    icons: [
                        {
                            src: 'city192.png',
                            sizes: '192x192',
                            type: 'image/png',
                        },
                        {
                            src: 'city512.png',
                            sizes: '512x512',
                            type: 'image/png',
                        },
                    ],
                },
                workbox: {
                    globPatterns: ['**/*.{js,css,html,svg,webp}'],
                },
            }),
        ],
        server: {
            port: 3000,
            open: true,
        },
        test: {
            globals: true,
            environment: 'jsdom',
            setupFiles: './src/shared/lib/test-utils/setupTests.ts',
        },
        css: {
            transformer: 'postcss',
            modules: {
                generateScopedName: (classname, filename, css) => {
                    const cleanName: string = filename
                        .split('/')
                        .pop()
                        .replace(/\.module\.s?css/, '')
                    const hash: string = Buffer.from(css)
                        .toString('base64')
                        .slice(0, 3)
                    return `${cleanName}__${classname}_${hash}`
                },
            },
            preprocessorOptions: {
                scss: {
                    api: 'modern-compiler',
                    additionalData: '@use "/src/app/styles/mixins" as *;',
                },
            },
        },
        resolve: {
            alias: {
                app: resolve('src/app'),
                pages: resolve('src/pages'),
                widgets: resolve('src/widgets'),
                features: resolve('src/features'),
                entities: resolve('src/entities'),
                shared: resolve('src/shared'),
            },
        },
        build: {
            // outDir: 'dist',
            // assetsDir: 'static',
            rollupOptions: {
                output: {
                    manualChunks: {
                        // 'formik': ['formik'],
                        // 'swiper': ['swiper'],
                        // 'tippyjs': ['@tippyjs/react'],
                        // 'react-dropzone': ['react-dropzone'],
                        // 'modals': ['src/widgets/modals/index.ts']
                    },
                    chunkFileNames: 'assets/js/[name]-[hash].js',
                    entryFileNames: 'assets/js/[name]-[hash].js',
                    assetFileNames: ({ name }) => {
                        if (/\.woff2?$/.test(name ?? '')) {
                            return 'assets/fonts/[name]-[hash][extname]'
                        }

                        if (/\.(gif|jpe?g|png|svg|webp)$/.test(name ?? '')) {
                            return 'assets/img/[name]-[hash][extname]'
                        }

                        if (/\.webm$/.test(name ?? '')) {
                            return 'assets/video/[name]-[hash][extname]'
                        }

                        if (/\.css$/.test(name ?? '')) {
                            return 'assets/css/[name]-[hash][extname]'
                        }

                        // default value
                        // ref: https://rollupjs.org/guide/en/#outputassetfilenames
                        return 'assets/[name]-[hash][extname]'
                    },
                },
            },
        },
    })
}
