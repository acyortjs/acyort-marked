const Code = require('./code')
const escape = require('./escape')
const formater = require('./formater')

class Parser extends Code {
  constructor(config = {}) {
    super(config)
    this.simpleMode = config.simpleMode
    this.headingIdFormater = config.headingIdFormater || formater
  }

  parser(option) {
    const {
      simpleMode,
      lineNumbers,
      headingIdFormater = this.headingIdFormater,
    } = option

    if (this.simpleMode || simpleMode) {
      return {
        code: block => `<pre><code>${escape(block)}</code></pre>`,
        heading: (text, level) => `<h${level}>${text}</h${level}>`,
      }
    }

    return {
      code: (block, lang) => this.code(block, lang, lineNumbers),
      heading: (text, level) => {
        const regex = /[^<]*(<a href="([^"]+)">([^<]+)<\/a>)/
        const marched = text.match(regex)
        const id = headingIdFormater(text)

        if (!marched) {
          return `
            <h${level}>
              <a href="#${id}" id="${id}" class="heading"></a>${text}
            </h${level}>
          `
        }

        return `
          <h${level}>
            <a href="${marched[2]}" id="${marched[2].split('#')[1]}" class="heading"></a>${marched[3]}
          </h${level}>
        `
      },
    }
  }
}

module.exports = Parser
