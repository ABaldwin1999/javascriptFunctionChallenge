//Write a function that takes a number and returns true if it is 
//a positive number and false if it is a negative number.

isNumberPositive = (num) =>{
    if(num >= 0){
        return console.log("True")
    }else if(num <0){
        return console.log("False")
    } 
}

isNumberPositive(-1); // returns false
isNumberPositive(10); // returns true