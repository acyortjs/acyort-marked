const os = require('os')
const hl = require('highlight.js')
const escape = require('./escape')

class Code {
  constructor(config = {}) {
    this.lineNumbers = config.line_numbers
  }

  exec(block, lang) {
    const valid = lang && hl.getLanguage(lang)
    const language = lang === 'js' ? 'javascript' : lang
    const className = valid ? ` ${language}` : ''
    const code = valid ? hl.highlightAuto(block).value : escape(block)
    const line = block.split(os.EOL)

    if (!this.lineNumbers) {
      return `
        <div class="hljs${className}">
          <pre>${code}</pre>
        </div>
      `
    }

    return `
      <div class="hljs${className}">
        <table>
          <tbody>
            <tr>
              <td class="line">
                <pre>${line.map((n, i) => `<span>${i + 1}</span>\n`).join('')}</pre>
              </td>
              <td class="code"><pre>${code}</pre></td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  }
}

module.exports = Code
