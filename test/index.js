const assert = require('power-assert')
const Marked = require('../')

String.prototype.trim = function() {
  return this
    .replace(/\n/g, '')
    .replace(/[\t ]+\</g, '<')
    .replace(/\>[\t ]+\</g, '><')
    .replace(/\>[\t ]+$/g, '>')
}

describe('markdown', () => {
  it('heading', () => {
    const config = { headingIdFormater: text => 'heading' }
    let markeder = new Marked()
    const heading = '# An h1 header'

    assert(markeder.mark(heading) === '<h1 id="anh1header">An h1 header</h1>')

    markeder.config = { headingIdFormater: text => 'heading' }
    assert(markeder.mark(heading) === '<h1 id="heading">An h1 header</h1>')

    markeder.config = { simple_mode: true }
    assert(markeder.mark(heading) === '<h1>An h1 header</h1>')

    markeder = new Marked(config)
    assert(markeder.mark(heading) === '<h1 id="heading">An h1 header</h1>')
  })

  it('formater', () => {
    const { headingIdFormater } = new Marked()
    assert(headingIdFormater('aa bb') === 'aabb')
  })

  it('list', () => {
    const markeder = new Marked()
    const list = '- this one\n- that one'
    const tasks = '- [x] it is done\n- [ ] it is not done'

    assert(markeder.mark(list).trim() === '<ul><li>this one</li><li>that one</li></ul>')
    assert(markeder.mark(tasks).trim() === '<ul><li style="list-style:none"><input type="checkbox" checked disabled /> it is done</li><li style="list-style:none"><input type="checkbox" disabled /> it is not done</li></ul>')
  })

  it('code', () => {
    const config = { line_numbers: true }
    const markeder = new Marked(config)
    let code = '\`\`\`html\n<h1>h1</h1>\n\`\`\`'

    assert(markeder.mark(code).trim() === '<div class="hljs html"><table><tbody><tr><td class="line"><pre><span>1</span></pre></td><td class="code"><pre><span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>h1<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span></pre></td></tr></tbody></table></div>')

    markeder.config = { simple_mode: true }
    assert(markeder.mark(code).trim() === '<pre><code>&lt;h1&gt;h1&lt;&#x2F;h1&gt;</code></pre>')

    markeder.config = {
      simple_mode: false,
      line_numbers: false
    }
    assert(markeder.mark(code).trim() === '<div class="hljs html"><pre><span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>h1<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span></pre></div>')

    code = '\`\`\`js\nvar a = 1;\n\`\`\`'
    assert(markeder.mark(code).trim() === '<div class="hljs javascript"><pre><span class="hljs-attribute">var a</span> = 1;</pre></div>')

    code = '\`\`\`\n<h1>h1</h1>\n\`\`\`'
    assert(markeder.mark(code).trim() === '<div class="hljs"><pre>&lt;h1&gt;h1&lt;&#x2F;h1&gt;</pre></div>')
  })
})
