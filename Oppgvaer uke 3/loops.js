let names = ["Tom", "Erik", "Hans", "Anna", "Carl"]

console.log(names.length);

let greeter = (name) => 'Hello ${name}, have a good day!';

for (let i =0; i < names.length; i++) {
    console.log(greeter(names[i]));
}



 names = ["Tom", "Eric", "Jessica", "Scott", "Anna", "Carl", "Elisabeth", "Benny", "Oliver", "Andy", "Jenny", "Ashley", "Erin", "Patrick"];

console.log(names.length);

 greeter = (name) => `Hello ${name}, have a good day!`;

for (let i = 0; i < names.length; i++) {
    console.log(greeter(names[i]));
}


anatherArray = [ "Sara","June","Ida"]

console.log(anatherArray);

function wordCleaner(arr) {
    let cleanedArr=[]
    for (word  of arr) {
        console.log(word);
        cleanedArr.push(word.toUpperCase());
    }
    return cleanedArr;
}
console.log(wordCleaner(anatherArray));


