const assert = require('power-assert')
const Marked = require('../')
const { headingIdFormater } = require('../')

String.prototype.trim = function() {
  return this
    .replace(/\n/g, '')
    .replace(/[\t ]+\</g, '<')
    .replace(/\>[\t ]+\</g, '><')
    .replace(/\>[\t ]+$/g, '>')
}

describe('markdown', () => {
  it('heading', () => {
    let marker = new Marked()
    const heading = '# An h1 header'

    assert(marker.parse(heading) === '<h1 id="anh1header">An h1 header</h1>')

    let options = { headingIdFormater: text => 'heading' }
    assert(marker.parse(heading, options) === '<h1 id="heading">An h1 header</h1>')

    options.simple_mode = true
    assert(marker.parse(heading, options) === '<h1>An h1 header</h1>')

    marker = new Marked({ headingIdFormater: text => 'heading' })
    assert(marker.parse(heading) === '<h1 id="heading">An h1 header</h1>')
  })

  it('formater', () => {
    assert(headingIdFormater('aa bb') === 'aabb')
  })

  it('code', () => {
    let config = { line_numbers: true }
    let marker = new Marked(config)
    let code = '\`\`\`html\n<h1>h1</h1>\n\`\`\`'

    assert(marker.parse(code).trim() === '<div class="hljs html"><table><tbody><tr><td class="line"><pre><span>1</span></pre></td><td class="code"><pre><span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>h1<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span></pre></td></tr></tbody></table></div>')

    assert(marker.parse(code, { simple_mode: true }).trim() === '<pre><code>&lt;h1&gt;h1&lt;&#x2F;h1&gt;</code></pre>')

    code = '\`\`\`js\nvar a = 1;\n\`\`\`'
    assert(marker.parse(code, { line_numbers: false }).trim() === '<div class="hljs javascript"><pre><span class="hljs-attribute">var a</span> = 1;</pre></div>')

    code = '\`\`\`\n<h1>h1</h1>\n\`\`\`'
    assert(marker.parse(code, { line_numbers: false }).trim() === '<div class="hljs"><pre>&lt;h1&gt;h1&lt;&#x2F;h1&gt;</pre></div>')

    config = {
      simple_mode: false,
      line_numbers: false
    }
    code = '\`\`\`html\n<h1>h1</h1>\n\`\`\`'
    marker = new Marked(config)
    assert(marker.parse(code).trim() === '<div class="hljs html"><pre><span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>h1<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span></pre></div>')
  })
})
