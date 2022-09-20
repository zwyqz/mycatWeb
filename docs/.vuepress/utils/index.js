const rControl = /[\u0000-\u001f]/g
const rSpecial = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’–—<>,.?/]+/g
const rCombining = /[\u0300-\u036F]/g
const rMethodParams = /\((.*?)\)/gm

const slugify = str => {
  return str.normalize('NFKD')
  .replace(rMethodParams, '')
  // Remove accents
  .replace(rCombining, '')
  // Remove control characters
  .replace(rControl, '')
  // Replace special characters
  .replace(rSpecial, '-')
  // Remove continuous separators
  .replace(/\-{2,}/g, '-')
  // Remove prefixing and trailing separators
  .replace(/^\-+|\-+$/g, '')
  // ensure it doesn't start with a number (#121)
  .replace(/^(\d)/, '_$1')
  // lowercase
  .toLowerCase()
}


module.exports = {
  slugify
}