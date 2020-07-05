class Formatter {
  static capitalize(str){
    const arr = str.split("")
    let first = arr[0]
    arr.splice(0,1,first.toUpperCase())
    return arr.join("")
  }

  static sanitize(str){
    return str.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(str){
    let exempt = ["this","a","an","but","of","and","for","at","by","from","the"]
    let words = str.split(" ")
    let result = []
    for (let word of words){
      if (exempt.includes(word)){
        result.push(word)
      }
      else {
        result.push( this.capitalize(word))
      }
    }
    result.splice(0,1,this.capitalize(result[0]))
    return result.join(" ");
  }

}