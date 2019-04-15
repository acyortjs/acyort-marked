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
marker.parse('# H1')

// width option
marker.parse('# H1', option)

marker.parse('# An h1 header')
// <h1>
//   <a href="#An h1 header" id="An h1 header"></a>
//   An h1 header
// </h1>

const option = { getHeadingId: () => 'heading' }
marker.parse('# An h1 header', options)
// <h1>
//   <a href="#heading" id="heading"></a>
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
```
