const escapes = require('./escape')

module.exports = block => `<pre><code>${escapes(block)}</code></pre>`
