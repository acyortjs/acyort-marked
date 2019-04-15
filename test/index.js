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

    assert(marker.parse(h0).trim() === '<h1><a href="#An h1 header" id="An h1 header"></a>An h1 header</h1>')
    assert(marker.parse(h1).trim() === '<h1><a href="#one" id="one"></a>An h1 header</h1>')

    const option = { getHeadingId: () => 'heading' }
    assert(marker.parse(h0, option).trim() === '<h1><a href="#heading" id="heading"></a>An h1 header</h1>')

    marker = new Marked({ getHeadingId: () => 'heading' })
    assert(marker.parse(h0).trim() === '<h1><a href="#heading" id="heading"></a>An h1 header</h1>')
  })

  it('code', () => {
    let marker = new Marked()
    let code = '```html\n<h1>h1</h1>\n```'

    assert(marker.parse(code).trim() === '<pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>h1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span></code></pre>')

    assert(marker.parse(code, { lineNumbers: true }).trim() === '<div class="code-highlight"><table><tbody><tr><td class="code-highlight-line"><pre class="language-none"><code class="language-none"><span>1</span></code></pre></td><td class="code-highlight-code"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>h1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span></code></pre></td></tr></tbody></table></div>')

    code = '```javascript\nvar a = 1;\n```'

    assert(marker.parse(code).trim() === '<pre class="language-javascript"><code class="language-javascript"><span class="token keyword">var</span> a<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span></code></pre>')

    code = '```\n<h1>h1</h1>\n```'

    assert(marker.parse(code).trim() === '<pre class="language-none"><code class="language-none">&lt;h1&gt;h1&lt;&#x2F;h1&gt;</code></pre>')
    assert(marker.parse(code, { lineNumbers: true }).trim() === '<div class="code-highlight"><table><tbody><tr><td class="code-highlight-line"><pre class="language-none"><code class="language-none"><span>1</span></code></pre></td><td class="code-highlight-code"><pre class="language-none"><code class="language-none">&lt;h1&gt;h1&lt;&#x2F;h1&gt;</code></pre></td></tr></tbody></table></div>')

    code = '```sss\n<h1>h1</h1>\n```'
    assert(marker.parse(code).trim() === '<pre class="language-none"><code class="language-none">&lt;h1&gt;h1&lt;&#x2F;h1&gt;</code></pre>')

    code = '```html\n<h1>h1</h1>\n```'
    marker = new Marked({ lineNumbers: true })

    assert(marker.parse(code).trim() === '<div class="code-highlight"><table><tbody><tr><td class="code-highlight-line"><pre class="language-none"><code class="language-none"><span>1</span></code></pre></td><td class="code-highlight-code"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>h1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span></code></pre></td></tr></tbody></table></div>')
  })
})
