class Formatter {
  static capitalize(string) {
    return string.toLowerCase().charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }
  static titleize(string) {
    let words = string.split(' ')
    let exceptionWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let titleizedWords = []
    for (let i = 0; i < words.length; i++) {
        if (i === 0) {
            titleizedWords.push(this.capitalize(words[i]))
        } else {
            if (exceptionWords.includes(words[i])) {
                titleizedWords.push(words[i])
            } else {
                titleizedWords.push(this.capitalize(words[i]))
            }
        }
    }
    return titleizedWords.join(' ')
}
}