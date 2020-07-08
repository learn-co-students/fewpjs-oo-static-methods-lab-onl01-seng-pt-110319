class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase()+ string.slice(1)
  }
  static sanitize(string){ 
    return string.replace(/[^A-Za-z0-9 -']/g,'');
  }
  static titleize(string){
    let words = string.split(" ")
    let ignore = ["this","a","an","but","of","and","for","at","by","from","the"]
    let title = []
    for (let word of words){
      if (ignore.includes(word)){
        title.push(word)
      } else{
        title.push(this.capitalize(word))
      }
    }
    return title.join(" ")
  }
}