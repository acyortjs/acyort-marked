const marked = require('marked')
const Parser = require('./lib')
const formater = require('./lib/format')

const { Renderer } = marked

class Marked extends Parser {
  mark(content) {
    const renderer = Object.assign(new Renderer(), this.parse())
    marked.setOptions({ renderer })
    return marked(content)
  }

  set config(values) {
    const {
      line_numbers: lineNumbers,
      simple_mode: simpleMode,
      headingIdFormater,
    } = values

    if (lineNumbers !== undefined) {
      this.lineNumbers = lineNumbers
    }
    if (simpleMode !== undefined) {
      this.simpleMode = simpleMode
    }
    if (headingIdFormater !== undefined) {
      this.headingIdFormater = headingIdFormater
    }
  }
}

module.exports = Marked
module.exports.headingIdFormater = formater
