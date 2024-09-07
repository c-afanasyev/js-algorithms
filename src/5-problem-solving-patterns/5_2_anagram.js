function anagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    }
    let str1Freqs = {}
    for (const v of str1) {
        str1Freqs[v] = (str1Freqs[v] || 0) + 1
    }

    for (const letter of str2) {
        if(!str1Freqs[letter]) {
            return false
        } else {
            str1Freqs[letter] -= 1
        }
    }

    return true
}

console.assert(anagram('', ''))
console.assert(!anagram('aaz', 'zza'))
console.assert(anagram('anagram', 'nagaram'))
console.assert(!anagram('rat', 'car'))
console.assert(!anagram('awesome', 'awesom'))
console.assert(anagram('qwerty', 'qeywrt'))
console.assert(anagram('texttwisttime', 'timetwisttext'))
