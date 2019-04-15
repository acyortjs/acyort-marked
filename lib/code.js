const { EOL } = require('os')
const Prism = require('prismjs')
const loadLanguages = require('prismjs/components/')
const pureCode = require('./pure-code')

module.exports = class {
  constructor(config) {
    this.lineNumbers = config.lineNumbers
  }

  parseCode(block, lang, lineNumbers) {
    let code

    if (!lang) {
      code = pureCode(block)
    } else {
      loadLanguages([lang])
      const grammar = Prism.languages[lang]

      code = grammar
        ? `<pre class="language-${lang}">
  <code class="language-${lang}">
    ${Prism.highlight(block, grammar, lang)}
  </code>
</pre>`
        : pureCode(block)
    }

    if (lineNumbers === false || this.lineNumbers === false) {
      return code
    }

    const line = `<pre class="language-none">
  <code class="language-none">
    ${block.split(EOL).map((n, i) => `<span>${i + 1}</span>\n`).join('')}
  </code>
</pre>`

    return `<div class="code-highlight">
  <table>
    <tbody>
      <tr>
        <td class="code-highlight-line">${line}</td>
        <td class="code-highlight-code">${code}</td>
      </tr>
    </tbody>
  </table>
</div>`
  }
}
