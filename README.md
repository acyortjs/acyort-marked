# Markdown

[![Build Status](https://travis-ci.org/acyortjs/markdown.svg?branch=master)](https://travis-ci.org/acyortjs/markdown)
[![codecov](https://codecov.io/gh/acyortjs/markdown/branch/master/graph/badge.svg)](https://codecov.io/gh/acyortjs/markdown)

Markdown parser with code highlight

## Install

```bash
$ npm i @acyort/markdown -S
```

### Usage

basic

```js
const Marked = require('@acyort/markdown')

const config = {
  lineNumbers: true,      // if show code line numbers
  getHeadingId: fn        // for set heading id
}

const marker = new Marked(config)

// parse option, this will override initial option
const option = {
  lineNumbers: true,
  getHeadingId: fn
}

// parse markdown string
marker.render('# H1')

// width option
marker.render('# H1', option)

marker.render('# An h1 header')
// <h1>
//   <a href="#An h1 header" id="An h1 header"></a>
//   An h1 header
// </h1>

const option = { getHeadingId: () => 'heading' }
marker.render('# An h1 header', options)
// <h1>
//   <a href="#heading" id="heading"></a>
//   An h1 header
// </h1>

const code = '\`\`\`html\n<h1>h1</h1>\n\`\`\`'
marker.render(code)
// <div class="code-highlight">
//   <table>
//     <tbody>
//       <tr>
//         <td class="code-highlight-line"><pre class="language-none">
//   <code class="language-none"><span>1</span>
// </code>
// </pre></td>
//         <td class="code-highlight-code"><pre class="language-html">
//   <code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>h1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span></code>
// </pre></td>
//       </tr>
//     </tbody>
//   </table>
// </div>
```

Marked [lexer](https://marked.js.org/#/USING_PRO.md#lexer) API

```js
const { lexer } = require('@acyort/markdown')
```
