console.log('CODE EVERYDAY!🦄 👩🏼‍💻 🌈');

// sandbox to do new challenges in and and use with sandbox.html
// to test in the browser console.log
// when you get it right, create a new js file and paste in there!

// Write code to return the string "odd" if `num` is an odd number
// and return the string "even" if `num` is an even number

let testNumber = 27
checkOddOrEven = (num) => {
    for (let i = 0; i < num; i++) {
        if (i % 2 === 0) {
            console.log(i + ' even');
        } else {
            console.log(i + ' odd');
        }
    }
}

checkOddOrEven(testNumber)