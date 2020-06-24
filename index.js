class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(string) {
    let words = string.split( " " ) 
    console.log("words", words)
    let restrictions = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    let answer = []
    for (let i = 0; i < words.length; i++) {
      if ( i == 0 ) {
        answer.push(this.capitalize(words[i]))
      } else{
        if (restrictions.includes(words[i])) {
          answer.push(words[i])
        }
        else {
          answer.push(this.capitalize(words[i]))
        }
      }
    
      
    }
    return answer.join( " ")


  }
}