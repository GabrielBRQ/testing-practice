function capitalize(str) {
    if(typeof str !== 'string'){
        return 'Please give a word';
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export {
    capitalize,
}