function caesarCipher(str, shift) {
    if (shift < 0) {
      shift = (shift % 26) + 26;
    }
  
    let result = '';
  
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
  
      if (char.match(/[a-zA-Z]/)) {
        let charCode = str.charCodeAt(i);
  
        let isUpperCase = char === char.toUpperCase();
  
        // Aplica o deslocamento ao código ASCII
        charCode = ((charCode - (isUpperCase ? 65 : 97) + shift) % 26) + (isUpperCase ? 65 : 97);

        result += String.fromCharCode(charCode);
      } else {
        result += char;
      }
    }
  
    return result;
}
  
export {
    caesarCipher,
}