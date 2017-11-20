# acyort-marked

[![Build Status](https://travis-ci.org/acyortjs/acyort-marked.svg?branch=master)](https://travis-ci.org/acyortjs/acyort-marked)
[![codecov](https://codecov.io/gh/acyortjs/acyort-marked/branch/master/graph/badge.svg)](https://codecov.io/gh/acyortjs/acyort-marked)

Markdown parser for AcyOrt

## Install

```bash
$ npm i acyort-marked -S
```

## Usage

```js
const Marked = require('acyort-marked')

let config = { line_numbers: true }
let markeder = new Marked(config)

// use: markeder.mark(content, unParse)

const heading = '# An h1 header'
const tasks = '- [x] it is done\n- [ ] it is not done'
const code = '\`\`\`html\n<h1>h1</h1>\n\`\`\`'

console.log(markeder.mark(heading))
// <h1 id="anh1header">An h1 header</h1>

console.log(markeder.mark(heading, true))
// <h1>An h1 header</h1>

console.log(markeder.mark(tasks))
// <ul>
//  <li style="list-style:none">
//    <input type="checkbox" checked disabled /> it is done
//  </li>
//  <li style="list-style:none">
//    <input type="checkbox" disabled /> it is not done
//  </li>
// </ul>

console.log(markeder.mark(code))
// <div class="hljs html">
//  <table>
//    <tbody>
//      <tr>
//        <td class="line">
//          <pre><span>1</span></pre>
//        </td>
//        <td class="code">
//          <pre><span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>h1<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span></pre>
//        </td>
//      </tr>
//    </tbody>
//  </table>
// </div>

console.log(markeder.mark(code, true))
// <pre><code>&lt;h1&gt;h1&lt;&#x2F;h1&gt;</code></pre>


config = { line_numbers: false }
markeder = new Marked(config)

console.log(markeder.mark(code))
// <div class="hljs html">
//  <pre><span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>h1<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
//  </pre>
// </div>

// more: visit the test cases
```








































