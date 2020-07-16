class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '');
  }

  static titleize(sentence) {
      let not = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
      sentence = sentence.split(" ")
      let newSentence = []
      for(let i = 0; i< sentence.length; i++) {


        if(i === 0) {
          newSentence.push(sentence[i][0].toUpperCase() + sentence[i].slice(1))
        } else if(not.includes(sentence[i])) {
          newSentence.push(sentence[i])
        } else {
          newSentence.push(sentence[i][0].toUpperCase() + sentence[i].slice(1))

        }
      }
      return newSentence.join(" ")
    }
  }
