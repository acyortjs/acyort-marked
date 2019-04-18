const { writeFileSync, readFileSync } = require('fs')
const { join } = require('path')
const Mark = require('../')

const marker = new Mark()
const html = `<!doctype html>
<html>
<head>
<meta charset="UTF-8" />
<title> markdown </title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/prismjs@1.16.0/themes/prism.min.css">
</head>
<body>
$content
</body>
</html>`

const md = readFileSync(join(__dirname, 'demo.md'), 'utf8')
const content = marker.render(md, { lineNumbers: false })
const index = html.replace('$content', content)

writeFileSync(join(__dirname, 'index.html'), index)
