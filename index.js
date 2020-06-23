class Formatter {
    //add static methods here
    static capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    static sanitize(string) {
        return string.replace(/[^A-Za-z0-9-'\s]+/g, '');
    }

    static titleize(string) {
        let words = string.split(' ');
        let nonTitledWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
        let titleizedWords = []
        for (let i = 0; i < words.length; i++) {
            if (i === 0) {
                titleizedWords.push(this.capitalize(words[i]))
            } else {
                if (nonTitledWords.includes(words[i])) {
                    titleizedWords.push(words[i])
                } else {
                    titleizedWords.push(this.capitalize(words[i]))
                }
            }
        }
        return titleizedWords.join(' ')
    }
}