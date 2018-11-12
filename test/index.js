/* global describe it */
/* eslint no-extend-native: 0 */

const assert = require('power-assert')
const Marked = require('../')

String.prototype.trim = function trim() {
  return this
    .replace(/\n/g, '')
    .replace(/[\t ]+</g, '<')
    .replace(/>[\t ]+</g, '><')
    .replace(/>[\t ]+$/g, '>')
}

describe('markdown', () => {
  it('heading', () => {
    let marker = new Marked()
    const h0 = '# An h1 header'
    const h1 = '# [An h1 header](#one)'

    assert(marker.parse(h0).trim() === '<h1><a href="#An h1 header" id="An h1 header" class="heading"></a>An h1 header</h1>')

    assert(marker.parse(h1).trim() === '<h1><a href="#one" id="one" class="heading"></a>An h1 header</h1>')

    const options = { headingIdFormater: () => 'heading' }
    assert(marker.parse(h0, options).trim() === '<h1><a href="#heading" id="heading" class="heading"></a>An h1 header</h1>')

    options.simpleMode = true
    assert(marker.parse(h0, options).trim() === '<h1>An h1 header</h1>')

    marker = new Marked({ headingIdFormater: () => 'heading' })
    assert(marker.parse(h0).trim() === '<h1><a href="#heading" id="heading" class="heading"></a>An h1 header</h1>')
  })

  it('code', () => {
    let config = { lineNumbers: true }
    let marker = new Marked(config)
    let code = '```html\n<h1>h1</h1>\n```'

    assert(marker.parse(code).trim() === '<div class="hljs html"><table><tbody><tr><td class="line"><pre><span>1</span></pre></td><td class="code"><pre><span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>h1<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span></pre></td></tr></tbody></table></div>')

    assert(marker.parse(code, { simpleMode: true }).trim() === '<pre><code>&lt;h1&gt;h1&lt;&#x2F;h1&gt;</code></pre>')

    code = '```js\nvar a = 1;\n```'
    assert(marker.parse(code, { lineNumbers: false }).trim() === '<div class="hljs javascript"><pre><span class="hljs-attribute">var a</span> = 1;</pre></div>')

    code = '```\n<h1>h1</h1>\n```'
    assert(marker.parse(code, { lineNumbers: false }).trim() === '<div class="hljs"><pre>&lt;h1&gt;h1&lt;&#x2F;h1&gt;</pre></div>')

    config = {
      simpleMode: false,
      lineNumbers: false,
    }
    code = '```html\n<h1>h1</h1>\n```'
    marker = new Marked(config)
    assert(marker.parse(code).trim() === '<div class="hljs html"><pre><span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>h1<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span></pre></div>')
  })
})
