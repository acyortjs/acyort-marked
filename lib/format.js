function format(heading) {
  const formation = heading
    .toLowerCase()
    .split(' ')
    .join('')
    .split(/\t/)
    .join('')
    .split(/<\/?[^>]+>/)
    .join('')
    .replace(/&[^&;]+;/g, '')
    .split(/[|$&`~=\\@+*!?({[\]})<>=.,;:'"^]/)
    .join('')
    .split(/[。？！，、；：“”【】（）〔〕［］﹃﹄“ ”‘’﹁﹂—…－～《》〈〉「」]/)
    .join('')
    .replace(/-|_/g, '')

  return formation
}

module.exports = format
