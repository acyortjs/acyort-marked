const Code = require('./code')
const list = require('./list')
const escape = require('./escape')
const format = require('./format')

class Parser extends Code {
  constructor(config) {
    super(config)
  }

  parse(unParse) {
    if (unParse) {
      return {
        code(block) {
          return `<pre><code>${escape(block)}</code></pre>`
        },
        heading(text, level) {
          return `<h${level}>${text}</h${level}>`
        },
        listitem: list,
      }
    }

    return {
      code: this.exec.bind(this),
      heading(text, level) {
        return `<h${level} id="${format(text)}">${text}</h${level}>`
      },
      listitem: list
    }
  }
}

module.exports = Parser
