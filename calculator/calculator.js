const calculator = {
    plus : function (a, b) {
        return(a +b);
    },
    minus : function (a, b) {
        return(a - b);
    },
    div : function (a, b) {
        return(a / b);
    },
    multi : function (a, b) {
        return(a * b);
    },
    power : function (a, b) {
        return(a ** b);
    }
};

const plusResult = calculator.plus(8, 4);
const minusResult = calculator.minus(9, 2);
const divResult = calculator.div(6, 3);
const multiResult = calculator.multi(2, 6);
const powerResult = calculator.power(3, 5);

const age = 96;
function calculatorKrAge(ageOfForeigner) {
    return ageOfForeigner + 2;
}

const krAge = calculatorKrAge(age);


console.log(krAge);

const ageK = parseInt(prompt("How old are you?"));

console.log(typeof ageK);

const ageL = parseInt(prompt("How old are you?"));

if (isNaN(ageL)) {
    console.log("Please write a number");
} else {
    console.log("Thank you for writing your age");
}
