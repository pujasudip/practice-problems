function find_vowels(str){
    var vowelsSet = ['a', 'e', 'i', 'o', 'u'];
    var result = '';

    for(var i = 0; i < str.length; i++){
        if(vowelsSet.includes(str[i])){
            result = str[i] + result;
        }
    }
    return result;
}

console.log(find_vowels("four score and seven years ago"));