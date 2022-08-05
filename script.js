//Write a function that takes a number and returns true if it is 
//a positive number and false if it is a negative number.

isNumberPositive = (num) =>{
    if(num >= 0){
        return console.log("True");
    }else if(num <0){
        return console.log("False");
    } 
}
isNumberPositive(-1); // returns false
isNumberPositive(10); // returns true

//Write a function that takes a number of days 
//and converts it into an age.

convertDaysToAge = (num) =>{
    return console.log(Math.floor(num/365));
}
convertDaysToAge(3650); // returns 10
convertDaysToAge(6570); // returns 18

//Write a function that takes three numbers and returns the largest of the three numbers.

getLargestNumber = (num0 ,num1, num2) =>{
    numArray = [num0,num1,num2];
    for(let i = 0; i < numArray.length -1; i++){
        if(numArray[i+1]>= numArray[0]){
            numArray[0] = numArray[i+1];
        }
    }
    return console.log(numArray[0]);
}
getLargestNumber(2 ,1, 4); // returns 4
getLargestNumber(6,2,3); // returns 6

//Write a function that takes an array of names 
//and returns the last name from the array of names.

getLastName = (array) =>{return console.log(array[array.length -1])}

getLastName(["Charlie", "Rob", "Andy"]); // returns “Andy”
getLastName(["Ash","Stu"]); // returns "Stu"

//Write a function that takes an array of numbers and returns true if all of the numbers are positive. 
//It should return false if there are one or more negative numbers in the array

allNumbersPositive = (numArray) =>{
    let arrayPositive = true;
    for(let i = 0; i < numArray.length; i++){
        if(numArray[i] < 0){
            arrayPositive = false;
        }
    }
    return console.log(arrayPositive);
}

allNumbersPositive([2,4,5]); // returns true
allNumbersPositive([-5,4,6]); // returns false
