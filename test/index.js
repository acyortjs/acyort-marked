const Marked = require('../')
const { body } = require('./markdown.json')

const config = { line_numbers: true }
const markeder = new Marked(config)

console.log(markeder.mark(body))
