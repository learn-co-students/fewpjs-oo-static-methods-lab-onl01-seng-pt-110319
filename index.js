class Formatter {
  //add static methods here
  static capitalize(word) {
     return word.charAt(0).toUpperCase() + word.slice(1);
  	 }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-\s']+/g, '');
  }

  static titleize(string) {
 	let banned = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from']

  	let words = string.split(" ")
  	let result = words.map(function(word) {

  		function searchBanned(bannedWord) {
  			return bannedWord == word
  		}

      if (word === words[0]) { 
        return words[0].charAt(0).toUpperCase() + word.slice(1)
      }
  		else if (banned.find(searchBanned)) {
  			return word
  		}
  		else {
  			return word.charAt(0).toUpperCase() + word.slice(1)
  		}

  	})
  	let combinedWords = result.join(" ")
  	return combinedWords
  }

}

