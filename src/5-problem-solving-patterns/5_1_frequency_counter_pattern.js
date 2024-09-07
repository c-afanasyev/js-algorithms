function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }
    let arr1Freqs = {}
    let arr2Freqs = {}
    for (const v of arr1) {
        arr1Freqs[v ** 2] = (arr1Freqs[v] || 0) + 1
    }
    for (const v of arr2) {
        arr2Freqs[v] = (arr2Freqs[v] || 0) + 1
    }
    for (const key in arr1Freqs) {
        if( !(key in arr2Freqs) ) {
            return false
        }
        if (arr1Freqs[key] !== arr2Freqs[key]) {
            return false
        }
    }

    return true
}

console.assert(same([1,2,3], [1,4,9]))
console.assert(!same([1,2,3,5], [1,4,9]))
console.assert(!same([1,2,3,5], [1,4,9,11]))
console.assert(same([1,2,3,5], [1,4,9,25]))