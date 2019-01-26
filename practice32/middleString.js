function find_middle_letters(str){
    var length = str.length;
    var result = '';
    var middle = parseInt(length/2);

    if(length % 2 === 0){
        result = str[middle-1] + '' + str[middle];
        return result;
    } else {
        result = str[middle];
        return result;
    }
}

var middleLetters = find_middle_letters('seven');
var middleLetters2 = find_middle_letters('dish');
console.log(middleLetters);
console.log(middleLetters2);