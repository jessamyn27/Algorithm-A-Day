console.log('CODE EVERYDAY!🦄 👩🏼‍💻 🌈');

//  valid subsequence challenge from algoexpert.com























// ---------------------- WARNING ANSWER DOWN BELOW --------------------------------  









// function isValidSubsequence(array, sequence) {
//     // Write your code here.
//     let j = 0;

//     for (let i = 0; i < array.length; i++) {

//         // you would wait for array[i] = sequence[j] and then move to next value		

//         if (array[i] === sequence[j]) {
//             j++;
//         }
//     }
//     if (j === sequence.length) {
//         return true;
//     } else {
//         return false;
//     }
// }





// let stringTest = '()()(())'; 
// //returns true
// let stringTest = '()()(()))'; 
// //returns false

// matchingPair = (string) => {
//     const open = '(';
//     const stringArray = string.split('');
//     console.log(stringArray);
//     let count = 0;

//     for (let i = 0; i < stringArray.length; i++) {
//         if (stringArray[i] === open) {
//             count++;
//             console.log('it\'s an open parenthasis --> ' + stringArray[i] + ' <-- so count is plus one ' + count)
//         } else {
//             count--;
//             console.log('it\'s a closed parenthasis --> ' + stringArray[i] + ' <-- so count is minus one ' + count)
//         }
//         if (count < 0) {
//             return false;
//         }
//     }
//     if (count == 0) {
//         console.log('it\'s a match!')
//         return true;
//     } else {
//         console.log('sorry no match for you...')
//         return false;
//     }
// }
// console.log('is it a matching pair? ' + matchingPair(stringTest));