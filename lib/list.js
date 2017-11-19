function list(li) {
  const regex = /^\s*\[[x ]\]\s*/

  if (!regex.test(li)) {
    return `<li>${li}</li>`
  }

  const tasks = li
    .replace(/^\s*\[ \]\s*/, '<input type="checkbox" disabled /> ')
    .replace(/^\s*\[x\]\s*/, '<input type="checkbox" checked disabled /> ')

  return `<li style="list-style:none">${tasks}</li>`
}

module.exports = list
