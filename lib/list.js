module.exports = (text, task) => {
  if (task) {
    return `<li class="task-list-item">${text}</li>\n`
  }
  return `<li>${text}</li>\n`
}
