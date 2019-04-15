const os = require('os')
const Prism = require('prismjs')
const loadLanguages = require('prismjs/components/')
const pureCode = require('./pure-code')

class Code {
  constructor(config) {
    this.lineNumbers = config.lineNumbers
  }

  code(block, lang, lineNumbers) {
    const line = block.split(os.EOL)

    if (!lang || lineNumbers === false || this.lineNumbers === false) {
      return pureCode(block)
    }

    loadLanguages([lang])

    const grammar = Prism.languages[lang]

    if (!grammar) {
      return pureCode(block)
    }

    const code = Prism.highlight(block, grammar, lang)

    return `
      <div class="highlight-${lang}">
        <table>
          <tbody>
            <tr>
              <td class="line">
                <pre>${line.map((n, i) => `<span>${i + 1}</span>\n`).join('')}</pre>
              </td>
              <td class="code">${code}</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  }
}

module.exports = Code
