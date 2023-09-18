// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// a) Create a test with expect statements for each of the variables provided.

describe ("fibArray", () => { // a test to check the function below
  it("returns an array containing the Fibonacci sequence", () => {

    const fibonacciLength1 = 6
    // Expected output: [1, 1, 2, 3, 5, 8]
    expect(fibArray(fibonacciLength1)).toEqual([1, 1, 2, 3, 5, 8])
    
    const fibonacciLength2 = 10
    // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    expect(fibArray(fibonacciLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})

// b) Create the function that makes the test pass.

// Pseudo code:
// name : fibArray
// input : number
// output : array
// process : create an array that holds [1, 1]. create a for loop that will iterate for the length of the number that its passed, then make an array that will hold the new calculated array, the pushing it back into the starting array

const fibArray = (number) => { // this function takes a number as a parameter
  let startArray = [1,1] // this will make an array with the starting numbers being both 1
  for (let i = 2; i < number; i++) { // this will start an iteration on the array depending on the number that is passed as a parameter
    const mathArray = startArray[i-1] + startArray[i-2] // this will handle the math using the iterated number, startArray, (i)-1 added to startArray (i)-2 
    startArray.push(mathArray) // this will push the added array to the started array
  }
  return startArray
}


// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

describe ("sortArray",   () => { // a test to check the function below
  it("returns an array of the values sorted from least to greatest", () => {

    const studyMinutesWeek1 = {
      sunday: 90,
      monday: 30,
      tuesday: 20,
      wednesday: 15,
      thursday: 30,
      friday: 15,
      saturday: 60
    }
    // Expected output: [15, 15, 20, 30, 30, 60, 90]
    expect(sortArray(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])

    const studyMinutesWeek2 = {
      sunday: 100,
      monday: 10,
      tuesday: 45,
      wednesday: 60,
      thursday: 20,
      friday: 15,
      saturday: 65
    }
    // Expected output: [10, 15, 20, 45, 60, 65, 100]
    expect(sortArray(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
})

// b) Create the function that makes the test pass.

// Pseudo code
// name : sort array
// input : object
// output : array
// process : create a function that takes an object as a parameter, create a variable to store the objects values using the "object.values" method, then use .sort in order to create an array that displays the objects values in numarical order

const sortArray = (object) => { // this function takes an object as a parameter
  let studyMin = Object.values(object) // this stores the objects values in a new variable
  studyMin.sort((a, b) => a - b) // this creates a new array with the objects values in numerical order
  return studyMin
}

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe("userAccount", () => { // a test to check the funtion below
  it("returns an array of the accumilating sum", () => {

    const accountTransactions1 = [100, -17, -23, -9]
    // Expected output: [100, 83, 60, 51]
    expect(userAccount(accountTransactions1)).toEqual([100, 83, 60, 51])

    const accountTransactions2 = [250, -89, 100, -96]
    // Expected output: [250, 161, 261, 165]
    expect(userAccount(accountTransactions2)).toEqual([250, 161, 261, 165])

    const accountTransactions3 = []
    // Expected output: []
    expect(userAccount(accountTransactions3)).toEqual([])
  })
})

// b) Create the function that makes the test pass.

// Pseudo code
// name : userAccount
// input : 1 array
// output : 1 array
// process : create a function that takes an array as a parameter, create a conditional that checks if the array is empty, use .map and and have it add each of the subsequenting numbers of the array together.

const userAccount = (array) => { // this function will take an array as a parameter
  
  let nextNum = 0 // this variable will be used in the map method and will represent the subsequenting number

  if( array.length === 0) { // this will check if the array is emtpy 
    return []
  }
  return array.map((value) => (nextNum += value)) // this will use .map to iterate through the array and add the subsequenting number by the last subsequenting number
}