const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    // write your solution here
    let tens = expr.length / 10
    let resultString = '';
    let currentValue = '';
    let symbols = {
        "10":".",
        "11":"-",
        "00":""
    }
    let arr = [];
    for (let i = 0; i < tens; i++) {
        currentValue = expr.substr(i*10,10)
        if (currentValue==="**********") resultString+=" "
        else {
            currentValue = currentValue.split(/(.{2})/).filter(O=>O).map(el=>symbols[el]).join('')
            resultString+=MORSE_TABLE[currentValue]
        }
    }
    return resultString
}

module.exports = {
    decode
}