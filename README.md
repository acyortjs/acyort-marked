# Markdown

[![Build Status](https://travis-ci.org/acyortjs/markdown.svg?branch=master)](https://travis-ci.org/acyortjs/markdown)
[![codecov](https://codecov.io/gh/acyortjs/markdown/branch/master/graph/badge.svg)](https://codecov.io/gh/acyortjs/markdown)

Markdown parser with code highlight

## Install

```bash
$ npm i @acyort/markdown -S
```

### API

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
```
