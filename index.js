const marked = require('marked')
const Parser = require('./lib')

const { Renderer } = marked

module.exports = class extends Parser {
  parse(content, option = {}) {
    const renderer = Object.assign(new Renderer(), this.parser(option))
    marked.setOptions({ renderer })
    return marked(content)
  }
}
