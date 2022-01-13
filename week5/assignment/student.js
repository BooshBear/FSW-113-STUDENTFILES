// Create a class called Student whose constructor maintains all four data inputs from the HTML page.
// The class should also contain the following methods:
// - a method that adds up all the student's scores
// - a method that adds up all the possible scores
// - a method that calculates the student's letter grade (divide the student's score by the possible scores and use the resulting decimal to determine grade)

class Student {
    constructor (...inpts) {
        this.studName = inpts[0].value,
        this.class = inpts[1].value,
        this.studScores = inpts[2].value,
        this.posScores = inpts[3].value
    }

    sScores() {
        let strArr = this.studScores.split(",");
        let sum = strArr.reduce(function(total, num){
            return parseFloat(total) + parseFloat(num);
        });

        return sum;
    }

    pScores() {
        let strArr = this.posScores.split(",");
        let sum = strArr.reduce(function(total, num){
            return parseFloat(total) + parseFloat(num);
        });

        return sum;
    }

    cGrade() {
        return (this.sScores() / this.pScores());
    }
}