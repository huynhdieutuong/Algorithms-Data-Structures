/**
 * What is an algorithm?
 * A process or set of steps to accomplish a certain task.
 */

/**
 * You are interviewed, there is a problem for you to solve.
 * Steps to resolve problem:
 * Step 1: Understand the problem
 * Step 2: Concrete examples
 * Step 3: Break it down
 * Step 4: Solve or simplify
 * Step 5: Look back and refactor
 */

/**
 * Step 1: Understand the problem - How?
 * 1. Ask interviewer: Can I restate the problem in my own words? (to make sure I understand the problem)
 * 2. What are the inputs that go into the problem?
 * 3. What are the outputs that should come from the solution to the problem?
 * 4. Can the outputs be determined from the inputs?
 * 5. How should I label the important pieces of data that are a part of the problem?
 */

/**
 * Step 2: Explore concrete examples
 * 1. Start with simple examples (you understand the problem, input, output, now give 2 examples with easiest cases)
 * 2. Progress to more complex examples (with edge cases)
 * 3. Explore examples with empty inputs
 * 4. Explore examples with invalid inputs
 *
 * => Write a function which takes in a string and returns counts of each character in the string
 * 1. Start with simple examples
 * charCount("aaaa"); // {a: 4}
 * charCount("hello"); // {h: 1, e: 1, l: 2, o: 1}
 * 2. Progress to more complex examples
 * "my phone number is 434432143" -> Do we want to count for spaces? Count number?
 * "Hello hi" -> Uppercase and lowercase are the same or not?
 */

/**
 * Step 3: Break it down
 * Only count number and letter, not count space and special chars
 * Uppercase and lowercase are the same, return lowercase
 *
 * Before write code, need write the idea first. Because when interview, if out of time, the interviewer can get the idea
 * function charCount(str) {
 *  // make object to return at end
 *  // loop over string, for each character
 *      // if the char is a number/letter AND is a key in object, add one to count
 *      // if the char is a number/letter AND not in object, add it to object and set value to 1
 *      // if the char is something else (space, period, etc.) don't do anything
 *  // return object at end
 * }
 */

/**
 * Step 4: Solve or simplify
 */
// function charCount(str: string) {
//   str = str.replace(/\W/g, '').toLowerCase()

//   const result: { [index: string]: any } = {}

//   for (let i = 0; i < str.length; i++) {
//     const char = str[i]

//     if (result[char]) {
//       result[char]++
//     } else {
//       result[char] = 1
//     }
//   }

//   return result
// }

/**
 * Step 5: Look back and refactor
 */
function charCount(str: string) {
  const result: { [index: string]: any } = {}

  for (let char of str) {
    char = char.toLowerCase()
    if (/[a-z0-9]/.test(char)) {
      result[char] = ++result[char] || 1
    }
  }

  return result
}

console.log(charCount('Hello hi@! gdfg$%24313123'))
