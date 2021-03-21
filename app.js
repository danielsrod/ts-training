// Union Type
function combine(input1, input2) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
console.log(combine(13, 54));
console.log(combine(3, 'daniel'));
function combine3(input1, input2, finalConv) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    if (finalConv === 'as-number') {
        return +result;
    }
    else {
        return result.toString();
    }
}
var combineAges = combine3(30, 26, 'as-number'); // 56 e vai continuar como number
console.log(combineAges);
var combineStringAges = combine3('30', '26', 'as-number'); // 3026, mas vai ser transformato em um number
console.log(combineStringAges);
var combineStrings = combine3(3, 'daniek', 'as-string'); // 3daniek e continua sendo string
console.log(combineStrings);
