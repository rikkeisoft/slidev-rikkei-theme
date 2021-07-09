import { resolve } from 'path'
import { mergeWindicssConfig, defineConfig } from 'vite-plugin-windicss'
import BaseConfig from '@slidev/client/windi.config'

// extend the base config
export default mergeWindicssConfig(
  BaseConfig,
  defineConfig({
    extract: {
      include: [
        resolve(__dirname, '**/*.{vue,ts}'),
      ],
    },
    shortcuts: {
      // custom the default background
      'bg-main': 'bg-gradient-to-r from-white to-red-50 text-gray-900 dark:(from-dark-700 to-warm-gray-800 text-white)',
    },
    theme: {
      extend: {
        // fonts can be replaced here, remember to update the web font links in `index.html`
        fontFamily: {
          title: ['Montserrat', 'sans-serif'],
        },
      },
    },
  }),
)
