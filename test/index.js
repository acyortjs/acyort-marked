const assert = require('power-assert')
const Marked = require('../')

describe('markdown', () => {
  it('power-assert', () => {
    const config = { line_numbers: true }
    const markeder = new Marked(config)
    const body = `# An h1 header`

    assert(markeder.mark(body) === '<h1 id="anh1header">An h1 header</h1>')
  })
})
