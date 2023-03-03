import posthtml from '@vituum/vite-plugin-posthtml'
import {resolve} from 'path'

export default {
    root: 'src',
    build: {
        outDir: '../dist',
        rollupOptions: {
            input: {
                index: resolve('src/index.html'),
                catalog: resolve('src/catalog.html'),
                contacts: resolve('src/contacts.html'),
            },
        },
    },
    plugins: [
        posthtml({
            plugins: {
                "posthtml-include": {
                    "root": "./src"
                }
            },
            options: {}
        }),
    ]
}
