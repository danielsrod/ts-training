function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    // if (typeof n1 !== 'number || typeof n2 !== 'number ){
    //  throw new Error('invalid data')
    // }
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    } else {
        return result;
    }
}

let number1: number;
number1 = 5;
// number1 = '5' will result an error - number1 needs to be a number
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'result: ';

add(number1, number2, printResult, resultPhrase);
