class Formatter {
  //add static methods here
  /* 
    Write a method static titleize that takes in a string and capitalizes all words in a sentence except the, a, an, but, of, and, for, at, by, and from; and always capitalizes the first word.
*/

  static capitalize(str){
    let capitalize = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalize; // note have to remember return word 
  }
  static sanitize(str){ // ^ except for A through Z and a through z and 0 through 9 and space
  // and dash and single quote /g, replace it with '' like delete it..
    return str.replace(/[^A-Za-z0-9 '-]/g, '')
  }
  static titleize(str){
    const listOfExceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let toTransform = str.split(' '); // each word isolated in an array
    let transformed = []; // the result to return at the end
    for(let word = 0; word < str.length; word++){ // we're iterating through created array 
      
    }
  }
}