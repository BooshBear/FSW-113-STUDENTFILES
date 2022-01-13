// Declare any necessary variables.
var certName = document.getElementById("certStudentName");
var certClass = document.getElementById("certClassName");
var certGrade = document.getElementById("certGrade");
// Add am evemt listener that responds to the click of the "print" button by calling a function to instantiate
//  a new student object, and another function to print the certificate.
document.querySelector("#print").addEventListener (
    "click", function () {
        var inpts = document.querySelectorAll("input");
        var std = new Student(...inpts);
        
        certName.innerHTML = std.studName;
        certClass.innerHTML = std.class;
        certGrade.innerHTML = std.cGrade();
    }
)

// Add an event listener that responds to the click of the reset button by resetting all the values
// both in the form and in the certificate.
document.getElementById("reset").addEventListener("click", function() {
    
})

// Create a function that instantiates a new student object with the input from the HTML form.
function inst() {
    
}

// Create a function that fills in the student's name, class name, and calculated grade on the certificate .
function filler() {
    
}

// Create a function that converts the contents of a comma-separated text string to a numeric array.
// You can use this function when instantiating the arrays in the student object.
function numArr(str) {
    let strArr = str.split(",");
    let sum = strArr.reduce(function(total, num){
        return parseFloat(total) + parseFloat(num);
    });

    return sum
}