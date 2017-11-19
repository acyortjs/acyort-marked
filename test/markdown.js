module.exports = `
# An h1 header

- this one
- that one
- the other one

\`\`\`
# Let me re-iterate ...
for i in 1 .. 10 { do-something(i) }

aa && bb

a = "s"
b = 't'

c = a / b

s = \`yu\`
\`\`\`

\`\`\`
<h1>???</h1>
\`\`\`

\`\`\` python
import time
# Quick, count to ten!
for i in range(10):
    # (but not *too* quick)
    time.sleep(0.5)
    print i
\`\`\`

- [x] it is done
- [ ] it is not done

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
`
