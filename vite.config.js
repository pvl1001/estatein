var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';
import svgr from 'vite-plugin-svgr';
// https://vitejs.dev/config/
export default (function (_a) {
    var mode = _a.mode;
    process.env = __assign(__assign({}, process.env), loadEnv(mode !== null && mode !== void 0 ? mode : '', process.cwd()));
    return defineConfig({
        base: process.env.VITE_BASEPATH,
        plugins: [
            react(),
            svgr(),
        ],
        server: {
            port: 3000,
            open: true,
        },
        css: {
            modules: {
                generateScopedName: "[name]__[local]_[hash:base64:3]",
            },
            preprocessorOptions: {
                scss: {
                    api: 'modern-compiler', // or "modern"
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
            }
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
                    assetFileNames: function (_a) {
                        var name = _a.name;
                        if (/\.woff2?$/.test(name !== null && name !== void 0 ? name : '')) {
                            return 'assets/fonts/[name]-[hash][extname]';
                        }
                        if (/\.(gif|jpe?g|png|svg|webp)$/.test(name !== null && name !== void 0 ? name : '')) {
                            return 'assets/img/[name]-[hash][extname]';
                        }
                        if (/\.webm$/.test(name !== null && name !== void 0 ? name : '')) {
                            return 'assets/video/[name]-[hash][extname]';
                        }
                        if (/\.css$/.test(name !== null && name !== void 0 ? name : '')) {
                            return 'assets/css/[name]-[hash][extname]';
                        }
                        // default value
                        // ref: https://rollupjs.org/guide/en/#outputassetfilenames
                        return 'assets/[name]-[hash][extname]';
                    },
                }
            }
        }
    });
});
