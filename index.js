class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '' );
  }
  static titleize(string) {
    let answer = []
    let badWords = ["the", 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let sentence = string.split(' ');
    sentence.map(x => {
    if (badWords.includes(x)){
    answer.push(x)
    } else {    
    answer.push(this.capitalize(x))
    }    
  })
    return this.capitalize((answer.join(" ")))
  }
}