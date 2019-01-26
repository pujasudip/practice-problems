function invert_negatives(arg){
    if(typeof arg === 'number'){
        return -arg;
    } else {
        return false;
    }
}

console.log(invert_negatives(-5));
console.log(invert_negatives(4000));
console.log(invert_negatives('puppies'));