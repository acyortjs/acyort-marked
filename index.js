const marked = require('marked')
const Parser = require('./lib')

const { Renderer } = marked

class Marked extends Parser {
  constructor(config) {
    super(config)
  }

  mark(content, unParse) {
    marked.setOptions({
      renderer: Object.assign(new Renderer(), this.parse(unParse)),
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false,
    })

    return markedFn(content)
  }
}

module.exports = Marked
