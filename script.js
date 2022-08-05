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
    return Math.floor(num/365);
}
convertDaysToAge(3650); // returns 10
convertDaysToAge(6570); // returns 18