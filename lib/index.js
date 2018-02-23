const Code = require('./code')
const list = require('./list')
const escape = require('./escape')
const formater = require('./format')

class Parser extends Code {
  constructor(config = {}) {
    super(config)
    this.simpleMode = config.simple_mode
    this.headingIdFormater = config.headingIdFormater || formater
  }

  parser(option) {
    const {
      simple_mode: simpleMode,
      line_numbers: lineNumbers,
    } = option

    if (this.simpleMode || simpleMode) {
      return {
        code: block => `<pre><code>${escape(block)}</code></pre>`,
        listitem: list,
      }
    }

    const headingIdFormater = option.headingIdFormater || this.headingIdFormater

    return {
      code: (block, lang) => this.coder(block, lang, lineNumbers),
      heading: (text, level) => `<h${level} id="${headingIdFormater(text)}">${text}</h${level}>`,
      listitem: list,
    }
  }
}

module.exports = Parser
