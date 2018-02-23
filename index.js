const marked = require('marked')
const Parser = require('./lib')
const formater = require('./lib/format')

const { Renderer } = marked

class Marked extends Parser {
  parse(content, option = {}) {
    const renderer = Object.assign(new Renderer(), this.parser(option))
    marked.setOptions({ renderer })
    return marked(content)
  }
}

module.exports = Marked
module.exports.headingIdFormater = formater
