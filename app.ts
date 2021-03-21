// Union Type
function combine(input1: number | string, input2: number | string) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

console.log(combine(13, 54));

console.log(combine(3, 'daniel'));

// Literal Type + Alias
type number_text = 'as-number' | 'as-string';
type Combinable = number | string;

function combine3(
    input1: Combinable, 
    input2: Combinable, 
    finalConv: number_text,
    ) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }

    if(finalConv === 'as-number') {
        return +result;
    } else {
        return result.toString();
    }
}

const combineAges = combine3(30, 26, 'as-number'); // 56 e vai continuar como number
console.log(combineAges);

const combineStringAges = combine3('30', '26', 'as-number'); // 3026, mas vai ser transformato em um number
console.log(combineStringAges);

const combineStrings = combine3(3, 'daniek', 'as-string'); // 3daniek e continua sendo string
console.log(combineStrings);





