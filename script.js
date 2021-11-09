
    //Elements
    var numbers = document.getElementsByClassName("grid-number");
    var operators = document.getElementsByClassName("operator");
    var total = document.querySelector(".screen")
    var equal = document.getElementById("equal");
    var Input = document.getElementById("total");
    var clear = document.getElementById("clear");
    const display = document.getElementById('number-input');
    var operator = null;
   // var decimal = null;

    //Classes
    class Calculator {
        constructor() {
            this.num1 = null
            this.num2 = null
            this.total = null
            this.temp = null
            this.Input = null
            this.clear = null
           // this.decimal ="0."
        }

        // Fires when user clicks an operator
        operatorClicked(operatorEvent) {
            this.num1 = display.value;
            operator = operatorEvent;
            display.value = null;
            this.temp = 0;
        }

        //operator values 
        equal(operator) {
            if (operator === "+") {
                this.add();
            } else if (operator === "-") {
                this.subtract();
            } else if (operator === "*") {
                this.multiply();
            } else if (operator === "/") {
                this.divide();
            // }else if (decimal === "0.") {
            //     this.decimal();
            }
        }
        add(){
            display.value = parseFloat(this.num1) + parseFloat(display.value);
        }
        subtract(){
            display.value = parseFloat(this.num1) - parseFloat(display.value);
        }
        multiply(){
            display.value = parseFloat(this.num1) * parseFloat(display.value);
        }
        divide(){
            display.value = parseFloat(this.num1) / parseFloat(display.value);
        }
        // decimal(){
        //     display.value = parseFloat(this.num1 + this.decimal + this.num1)(display.value);
        // }

        // Fires when user clicks a number
        addToTemp(number) {
            this.temp = (this.temp * 10) + parseInt(number);
            // Store the operator
            display.value = this.temp;
            console.log(this.temp)
        }
    }

    var calc = new Calculator();

    //Listeners
    console.log(numbers);

    // Numbers
    for(var i = 0; i < numbers.length; i++ ){
        numbers[i].addEventListener('click', function(){
            calc.addToTemp(this.innerText);
        });
    }

// Operators
    for(var i = 0; i < operators.length; i++ ){
        operators[i].addEventListener('click', function(){
            calc.operatorClicked(this.innerText);
        });
    }

    // equals
    equal.addEventListener("click", () => {
        console.log();
        calc.equal(operator);

    //clear
    clear.addEventListener("click", ()=> {
        display.value = 0;
        operator = null;
        this.num1 = null;
    })
})
