class Formatter {
  static capitalize(cap) {
    return cap.charAt(0).toUpperCase() + cap.slice(1);
  }
  
  static sanitize(str) {
    return str.replace( /[^A-Za-z0-9 '-]/g, '');
  }
  
  static titleize(str) {
    let exceptWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let capitalizeString = str.charAt(0).toUpperCase() + str.slice(1);
    let parseString = capitalizeString.split(" ");
    return parseString.map(str => {
      if (exceptWords.includes(str)) { 
        return str;
      } else {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }
        
    }).join(" ");
  }
  
}