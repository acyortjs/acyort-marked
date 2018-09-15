# Markdown

[![Build Status](https://travis-ci.org/acyortjs/markdown.svg?branch=master)](https://travis-ci.org/acyortjs/markdown)
[![codecov](https://codecov.io/gh/acyortjs/markdown/branch/master/graph/badge.svg)](https://codecov.io/gh/acyortjs/markdown)

Markdown parser with code highlight

## Install

```bash
$ npm i @acyort/markdown -S
```

### Usage

```js
const Marked = require('@acyort/markdown')

const config = {
  lineNumbers: true,      // show code line numbers
  simpleMode: false,      // simple markdown parser, not highlights code, not heading id
  headingIdFormater: fn   // heading id format function
}

const marker = new Marked(config)

// parse option, this override initialization optons
const option = {
  lineNumbers: true,
  simpleMode: false,
  headingIdFormater: fn
}

// parse markdown string
marker.parse('# H1')

// width option
marker.parse('# H1', option)

marker.parse('# An h1 header')
// <h1>
//   <a href="#An h1 header" id="An h1 header" class="heading"></a>
//   An h1 header
// </h1>

const option = { headingIdFormater: () => 'heading' }
marker.parse('# An h1 header', options)
// <h1>
//   <a href="#heading" id="heading" class="heading"></a>
//   An h1 header
// </h1>

const code = '\`\`\`html\n<h1>h1</h1>\n\`\`\`'
marker.parse(code)
// <div class="hljs html">
//   <table>
//     <tbody>
//       <tr>
//         <td class="line">
//           <pre>
//             <span>1</span>
//           </pre>
//         </td>
//         <td class="code">
//           <pre>
//             <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>h1<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
//           </pre>
//         </td>
//       </tr>
//     </tbody>
//   </table>
// </div>

marker.parse(code, { simpleMode: true })
// <pre>
//   <code>&lt;h1&gt;h1&lt;&#x2F;h1&gt;</code>
// </pre>

// more examples in test folder
```
