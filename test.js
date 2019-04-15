const Marked = require('./')

const marker = new Marked()
let code = '```html\n<h1>h1</h1>\n```'

code = '```js\nvar a = 1;return (<div>xxx</div>)\n```'

code = `
\`\`\`go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
\`\`\`
`

console.log(marker.parse(code))
