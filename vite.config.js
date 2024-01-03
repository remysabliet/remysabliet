import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react-swc'


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    outDir: 'build',
    resolve: {
        alias: {
            'actions': path.resolve(__dirname, './src/actions'),
            'assets': path.resolve(__dirname, './src/assets'),
            'components': path.resolve(__dirname, './src/components'),
            'containers': path.resolve(__dirname, './src/containers'),
            'helpers': path.resolve(__dirname, './src/helpers'),
            'layout': path.resolve(__dirname, './src/layout'),
            'pages': path.resolve(__dirname, './src/pages'),
            'reducers': path.resolve(__dirname, './src/reducers'),
            'routes': path.resolve(__dirname, './src/routes'),
            'store': path.resolve(__dirname, './src/store'),
            'styles': path.resolve(__dirname, './src/styles'),
            'tests': path.resolve(__dirname, './src/tests'),
        },
    },
})
