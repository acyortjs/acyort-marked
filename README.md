# Markdown

[![Build Status](https://travis-ci.org/acyortjs/markdown.svg?branch=master)](https://travis-ci.org/acyortjs/markdown)
[![codecov](https://codecov.io/gh/acyortjs/markdown/branch/master/graph/badge.svg)](https://codecov.io/gh/acyortjs/markdown)

markdown parser with code highlighting and math latex support

[DEMO](https://acyortjs.github.io/markdown/)

## Install

```bash
$ npm i @acyort/markdown -S
```

## Usage

### basic

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

```html
<!-- add prism css -->
<link rel="stylesheet" href="https://cdn.staticfile.org/prism/1.16.0/themes/prism.min.css" />
```

### Marked lexer API

[lexer](https://marked.js.org/#/USING_PRO.md#lexer)

```js
const { lexer } = require('@acyort/markdown')
```

### math latex

```js
const text = '实例：$$f(x)=x$$'
marker.render(text)
/*
<p>实例：</p><div style="text-align:center"><span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mi>x</mi></mrow><annotation encoding="application/x-tex">f(x)=x</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathdefault" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathdefault">x</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span class="strut" style="height:0.43056em;vertical-align:0em;"></span><span class="mord mathdefault">x</span></span></span></span></div>
*/
```

```html
<!-- add katex css -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.10.0-rc.1/dist/katex.min.css">
```
