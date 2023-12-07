function reverseString(str) {
    if(typeof str !== 'string'){
        return 'Please give a word';
    }
    return str.split('').reverse().join('');
}

export {
    reverseString,
}