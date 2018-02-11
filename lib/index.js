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

  parse() {
    if (this.simpleMode) {
      return {
        code: block => `<pre><code>${escape(block)}</code></pre>`,
        heading: (text, level) => `<h${level}>${text}</h${level}>`,
        listitem: list,
      }
    }

    return {
      code: this.exec.bind(this),
      heading: (tx, lev) => `<h${lev} id="${this.headingIdFormater(tx)}">${tx}</h${lev}>`,
      listitem: list,
    }
  }
}

module.exports = Parser
