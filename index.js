class Formatter {
static capitalize(string) {
  return (string.charAt(0).toUpperCase() + string.slice(1));
}

static sanitize(string){
  return string.replace( /[^A-Za-z0-9 '-]/g, '' )
}

static titleize(string){
  let ignore = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
  let splitArray = string.split(" ")
  let capitalArray = splitArray.map(word => {
    if(!ignore.includes(word)){
      return this.capitalize(word)
    }
    else {return word}
  })
  capitalArray[0] = this.capitalize(capitalArray[0])
  return capitalArray.join(" ")
}
}

