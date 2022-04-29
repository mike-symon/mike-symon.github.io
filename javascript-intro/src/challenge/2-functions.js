// ------------ FUNCTIONS -----------

// 1. Return the string 'Hello world!' from the function named `hello`.
function hello() {
  return 'Hello world!'
}

// 2. + 3. This is a combined question: Define two functions.
// The first function should be named `sayHi` and return the string 'Hello!'.
// The second function should be named `sayBye` and return the string 'Goodbye!'.
function sayHi() {
  return 'Hello!'
}
function sayBye() {
  return 'Goodbye!'
}

// 4. Define a function named `greet` that returns the string 'Hey there!'.
// Then declare a variable named `salutation` and have it call the function named `greet`.

function greet() {
  return 'Hey there!'
}

let salutation = greet();

// 5. What value does the variable named `helloResult` have?
function hi() {
  return 'Hi!'
}

let helloResult = hi()
// Uncomment the line below and assign your answer to the variable `helloResultIs`.
const helloResultIs = 'Hi!'

// ---------- FUNCTIONS WITH PARAMETERS ---------

// 6. Write a function named `shout` that takes a parameter and returns it.
// For example: Calling shout('Echo') should return the string 'Echo', and shout('Hello') should return the string 'Hello'.


function shout(Echo) { return Echo}



// 7. Which value does the variable named `replyResult` have after the following code is executed?
function reply(phrase) {
  return phrase
}

let replyResult = reply('Good morning')
// Uncomment the line below and assign your answer to the variable named `ReplyResultIs`.
  const replyResultIs = 'Good morning'



// 8. Write a function named 'helloFriend` to greet a person by name, using a parameter.
// For example: Calling helloFriend('Emily') should return the string 'Hello Emily!'.

function helloFriend(name) {
 return 'Hello ' + name + '!'
}















// 9. Which value does the variable named `goodMorningResult` have after the following code is executed?
function goodMorning(name) {
  return 'Good morning ' + name + '!'
}

let goodMorningResult = goodMorning('Jacky')

// Uncomment and assign your answer to the variable named `goodMorningResultIs`.
 const goodMorningResultIs = 'Good morning Jacky!'


 




// 10. Which value does the variable named `hiResult` have after the following code is executed?
  function hi(name) {
    return 'Hi ' + name + '!'
  }

let hi1 = hi('Andy')
let hi2 = hi('Hamish')

let hiResult = hi1 + ' ' + hi2
// Uncomment and assign your answer to the variable named `hiResultIs`.
 const hiResultIs = 'Hi Andy Hamish'

// 11. Write a function named `warn` that takes a parameter (it will be a string) and returns the string parameter duplicated, with a space between each string.
// In addition, the value that will be returned should be logged to the console before being returned.

// ------------ CHECKS -----------
// The below lines of code lets us test it to see how you're doing,
// don't worry about this yet you'll learn it in bootcamp.

// Don't change any code below this comment!
const toExport = {
  hello,
  reply,
  goodMorning,
}
if (typeof sayHi !== 'undefined') toExport.sayHi = sayHi
if (typeof sayBye !== 'undefined') toExport.sayBye = sayBye
if (typeof greet !== 'undefined') toExport.greet = greet
if (typeof salutation !== 'undefined') toExport.salutation = salutation
if (typeof shout !== 'undefined') toExport.shout = shout
if (typeof helloFriend !== 'undefined') toExport.helloFriend = helloFriend
if (typeof helloResultIs !== 'undefined') toExport.helloResultIs = helloResultIs
if (typeof replyResultIs !== 'undefined') toExport.replyResultIs = replyResultIs
if (typeof goodMorningResultIs !== 'undefined')
  toExport.goodMorningResultIs = goodMorningResultIs
if (typeof hiResultIs !== 'undefined') toExport.hiResultIs = hiResultIs
if (typeof warn !== 'undefined') toExport.warn = warn
module.exports = toExport
