/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
let score = 0;

// 2. Store the rank of a player -- Decided award rank by evaluating 

let rank;


// 3. Select the <main> HTML element
    // Forgot this step -- used a different method for writing to the main element. This works better.
const main = document.querySelector('main');
/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers

    True or false:
    ( 4 > 3 || 1 > 3 )
    True

    True or false:
    ( 6 >= 6 && 6 <= 7 )
    True
    
    True or false:
    ( 6 >= 10 && 6 <= 10 )
    False

    True or false:
    ( 3 > 4 || 1 > 3 )
    False 
    
    True or false:
    Javascript is a server side language
    False

*/
let questionOne = prompt(`True or false:
( 4 > 3 || 1 > 3 )`);

let questionTwo = prompt(`True or false:
( 6 >= 6 && 6 <= 7 )`);

let questionThree = prompt(`True or false:
( 6 >= 10 && 6 <= 10 )`);

let questionFour = prompt(`True or false:
( 3 > 4 || 1 > 3 )`);

let questionFive = prompt(`True or false:
Javascript is a server side language`);

if (questionOne.toLowerCase() === 'true' || questionOne.toLowerCase() === 't') {
    // Increment score by one
    score += 1;
}
if (questionTwo.toLowerCase() === 'true' || questionTwo.toLowerCase() === 't') {
    // Increment score by one
    score += 1;
}
if (questionThree.toLowerCase() === 'false' || questionThree.toLowerCase() === 'f') {
    // Increment score by one
    score += 1;
}
if (questionFour.toLowerCase() === 'false' || questionFour.toLowerCase() === 'f') {
    // Increment score by one
    score += 1;
}
if (questionFive.toLowerCase() === 'false' || questionFive.toLowerCase() === 'f') {
    // Increment score by one
    score += 1;
}
/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/

// These conditions don't need the && -- I forgot that the JS engine exits the IF/ELSE block after evalauting the first true condition. 
    // If = 5
if ( score === 5) {
    rank = "a gold crown";
    // If between 3-4
}else if (score > 2 && score < 5) {
    rank = "a silver crown";
    // If between 1-2
}else if (score > 0 && score < 3) {
    rank = "a bronze crown";
    // If score equal to none of the foregoing conditions assume 0
}else {
    rank = "no crowns";
}

// 6. Output results to the <main> element

    // FIRST ATTEMPT
    // innerHTML is the cleaner option
    // Went wrong as I forgot to store <main> as a variable in step 3.
    // ---------------------------------
    // const heading = "Score Board:";
    // const paragraphOne = `You correctly answer ${score} out of 5 questions`;
    // document.querySelector(main).textContent = `
    // <h1>${heading}</h1>
    // <p>${paragraphOne}</p>
    // <p>You have scored: ${rank}</p>
    // `;

    // Working code
    main.innerHTML = `
    <h1>Score Board</h1>
    <p>You correctly answered <strong>${score}</strong> out of <strong>5</strong> questions.</p>
    <p>You have scored: ${rank}</p>
    `;