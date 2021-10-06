console.log('CODE EVERYDAY!🦄 👩🏼‍💻 🌈');

// sandbox to do new challenges in and and use with sandbox.html
// to test in the browser console.log
// when you get it right, create a new js file and paste in there!



const stringTest = 'einstein dalmau guerra';
//output should be 10

countVowls = (letters) => {
    // convert this string to an array 
    const lettersArray = letters.split('');
    // compare letters to vowels array
    const vowelsArray = ['a', 'e', 'i', 'o', 'u'];
    // keep track of number of vowels
    let count = 0;
    // loop through the array and check if first array value has the same value as the second array
    for (let i = 0; i < lettersArray.length; i++) {
        if (vowelsArray.includes(lettersArray[i])) {
            count++;
        }
    }
    return console.log('"' + letters + '" has ' + count + ' vowels');
}

countVowls(stringTest);