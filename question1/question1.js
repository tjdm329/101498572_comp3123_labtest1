// COMP 3123 Lab Test 1 Question 1
// Thomas del Mundo 101498572

function lowerCaseWords(arr){

    //iterate through all values
    for (let i=0; i<arr.length; i++) {
        //if the type of index is string
        if (typeof(arr[i]) === "string"){
            //lowercase the String value
            arr[i] = arr[i].toLowerCase()
        }
    }
    //filter the array to only return string values,
    //tried splicing, but it will still return true or false everytime.
    return arr.filter((word) => typeof(word) === "string");
}

const mixedArray = [
    'PIZZA',
    10,
    true,
    25,
    false,
    'Wings'
];
console.log(lowerCaseWords(mixedArray) ); //Expected Output: [ 'pizza', 'wings']