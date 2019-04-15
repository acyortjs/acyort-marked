const map = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;',
  '`': '&#x60;',
  '=': '&#x3D;',
}

module.exports = block => `<pre class="language-none">
  <code class="language-none">
    ${block.replace(/[&<>"'`=/]/g, a => map[a])}
  </code>
</pre>`
