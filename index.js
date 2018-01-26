const marked = require('marked')
const Parser = require('./lib')

class Marked extends Parser {
  mark(content, unParse) {
    const { Renderer } = marked
    const renderer = Object.assign(new Renderer(), this.parse(unParse))

    marked.setOptions({ renderer })
    return marked(content)
  }

  set lineNumbers(show) {
    this.ln = show
  }
}

module.exports = Marked
