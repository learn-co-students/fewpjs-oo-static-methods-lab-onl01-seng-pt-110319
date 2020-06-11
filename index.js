class Formatter {
  static capitalize(string) {
    return string.toLowerCase().charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(string) {
    let wordsToNotTitleize = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let stringWithFirstLetterCapitalized = Formatter.capitalize(string);
    let splitString = stringWithFirstLetterCapitalized.split(" ");
    let firstWord = [];
    firstWord.push(splitString.shift());
    splitString.forEach(e => {
      if(wordsToNotTitleize.includes(e)) {
        firstWord.push(e);
      } else {
        firstWord.push(Formatter.capitalize(e));
      }
    })
    return firstWord.join(" ");
  }
}