const marked = require('marked')
const Parser = require('./lib')

class Marked extends Parser {
  constructor(config) {
    super(config)
  }

  mark(content, unParse) {
    const { Renderer } = marked

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

    return marked(content)
  }
}

module.exports = Marked
