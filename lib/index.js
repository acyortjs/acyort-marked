const Code = require('./code')

class Parser extends Code {
  constructor(config = {}) {
    super(config)
    this.headingIdFormater = config.headingIdFormater || (s => s)
  }

  parser(option) {
    const {
      lineNumbers,
      headingIdFormater = this.headingIdFormater,
    } = option

    return {
      code: (block, lang) => this.parseCode(block, lang, lineNumbers),
      heading: (text, level) => {
        const regex = /[^<]*(<a href="([^"]+)">([^<]+)<\/a>)/
        const marched = text.match(regex)
        const id = headingIdFormater(text)

        if (!marched) {
          return `<h${level}>
  <a href="#${id}" id="${id}"></a>${text}
</h${level}>`
        }

        return `<h${level}>
  <a href="${marched[2]}" id="${marched[2].split('#')[1]}"></a>${marched[3]}
</h${level}>`
      },
    }
  }
}

module.exports = Parser
