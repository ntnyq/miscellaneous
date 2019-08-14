import Hljs from 'highlight.js/lib/highlight'

import css from 'highlight.js/lib/languages/css'
import json from 'highlight.js/lib/languages/json'
import bash from 'highlight.js/lib/languages/bash'
import less from 'highlight.js/lib/languages/less'
import scss from 'highlight.js/lib/languages/scss'
import shell from 'highlight.js/lib/languages/shell'
import stylus from 'highlight.js/lib/languages/stylus'
import javascript from 'highlight.js/lib/languages/javascript'
import typescript from 'highlight.js/lib/languages/typescript'

Hljs.registerLanguage('css', css)
Hljs.registerLanguage('json', json)
Hljs.registerLanguage('bash', bash)
Hljs.registerLanguage('less', less)
Hljs.registerLanguage('scss', scss)
Hljs.registerLanguage('shell', shell)
Hljs.registerLanguage('stylus', stylus)
Hljs.registerLanguage('javascript', javascript)
Hljs.registerLanguage('typescript', typescript)

export default Hljs
