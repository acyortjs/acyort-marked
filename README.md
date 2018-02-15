# acyort-marked

[![Build Status](https://travis-ci.org/acyortjs/acyort-marked.svg?branch=master)](https://travis-ci.org/acyortjs/acyort-marked)
[![codecov](https://codecov.io/gh/acyortjs/acyort-marked/branch/master/graph/badge.svg)](https://codecov.io/gh/acyortjs/acyort-marked)

Markdown parser for [AcyOrt](https://github.com/acyortjs/acyort)

## Install

```bash
$ npm i acyort-marked -S
```

### API

```js
const Marked = require('acyort-marked')

const config = {
  line_numbers: true,   // show code line numbers
  simple_mode: false,   // simple markdown parser, not highlights code, not heading id
  headingIdFormater: fn   // heading id format function
}

const markeder = new Marked(config)
const { headingIdFormater } = Marked

// default heading formater
headingIdFormater('Some text')

// reset config
markeder.config = {
  line_numbers: true,
  simple_mode: false,
  headingIdFormater: fn
}

// parse markdown string
markeder.mark('# H1')
```

## Usage

```js
const Marked = require('acyort-marked')
const { headingIdFormater } = require('acyort-marked')

console.log(headingIdFormater('aa bb'))
// aabb

let config = { line_numbers: true }
let markeder = new Marked(config)

const heading = '# An h1 header'
const tasks = '- [x] it is done\n- [ ] it is not done'
const code = '\`\`\`html\n<h1>h1</h1>\n\`\`\`'

console.log(markeder.mark(heading))
// <h1 id="anh1header">An h1 header</h1>

markeder.config = { simple_mode: true }

console.log(markeder.mark(heading))
// <h1>An h1 header</h1>

markeder.config = { headingIdFormater: text => 'heading' }

console.log(markeder.mark(heading))
// <h1 id="heading">An h1 header</h1>

console.log(markeder.mark(tasks))
// <ul>
//  <li style="list-style:none">
//    <input type="checkbox" checked disabled /> it is done
//  </li>
//  <li style="list-style:none">
//    <input type="checkbox" disabled /> it is not done
//  </li>
// </ul>

markeder.config = { simple_mode: false }

console.log(markeder.mark(code))
// <div class="hljs html">
//  <table>
//    <tbody>
//      <tr>
//        <td class="line">
//          <pre><span>1</span></pre>
//        </td>
//        <td class="code">
//          <pre>
//            <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>h1<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
//          </pre>
//        </td>
//      </tr>
//    </tbody>
//  </table>
// </div>

markeder.config = { simple_mode: true }

console.log(markeder.mark(code))
// <pre><code>&lt;h1&gt;h1&lt;&#x2F;h1&gt;</code></pre>


markeder.config = { line_numbers: false, simple_mode: false }

console.log(markeder.mark(code))
// <div class="hljs html">
//  <pre>
//    <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>h1<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
//  </pre>
// </div>

```
