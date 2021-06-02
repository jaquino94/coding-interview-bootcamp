// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//O(n) -> 
function reverse(str) {
    let headPtr = 0;
    let tailPtr = str.length - 1;
    let reversedStr = [];
    reversedStr.length = str.length;

    if (str.length === 0) {
        return str;
    }

    while (headPtr < tailPtr) {
        let tempHolder = str[tailPtr];

        reversedStr[tailPtr] = str[headPtr];
        reversedStr[headPtr] = tempHolder;

        headPtr++;
        tailPtr--;
    }

    return reversedStr.join('');
}

module.exports = reverse;
