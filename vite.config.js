import {resolve} from 'path';
import { defineConfig } from 'vite'; 


export default defineConfig({
    build: {
        rollupOptions : {
            input : {
                main : './index.html',
                contato : './contato.html',
                projetos : './projetos.html'
            }
        }
    },
    outDir : 'dist'
})
