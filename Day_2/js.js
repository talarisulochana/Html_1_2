
hoistedFunction();
function hoistedFunction() {
    console.log("[Hoisting Demo] Function executed before declaration");
}


try {
    console.log(myTDZVar);
    let myTDZVar = 10;
} catch (error) {
    console.log("[TDZ Demo] Cannot access 'myTDZVar' before initialization");
}
 
                       //  Calculator

document.addEventListener("DOMContentLoaded", () => {

    const display = document.querySelector(".display");
    const buttons = document.querySelectorAll("input[type='button']");
    const resultBox = document.querySelector(".display");

    let shouldClear = true; 

  
    function calculate(a, b, operator) {
        switch (operator) {
            case "+": return a + b;
            case "-": return a - b;
            case "*": return a * b;
            case "/": return b !== 0 ? a / b : "Error";
            default: return "Error";
        }
    }


    const logOperation = (num1, num2, op, result) => {
        console.log(`[User Input] Number 1: ${num1}, Number 2: ${num2}`);
        console.log(`[Operation] ${num1} ${op} = ${result}`);
    };

  
    (function () {
        console.log("[IIFE] Calculator Initialized!");
    })();

 
    function greetUser(greeting) {
        return function (name) {
            return function (message) {
                return `${greeting} ${name}! ${message}`;
            };
        };
    }

    const curriedGreeting = greetUser("Hello")("John")("Welcome Back!");
    console.log(`[Currying Demo] ${curriedGreeting}`);


    buttons.forEach(button => {
        button.addEventListener("click", () => {

            let value = button.value;

            if (value === "AC") {

                if (confirm("Confirm to clear result?")) {
                    display.textContent = "0";
                    shouldClear = true;
                }

            } else if (value === "Delete") {
                display.textContent = display.textContent.slice(0, -1) || "0";

            } else if (value === "=") {
                try {
                    console.log("[JS Runtime] Starting calculation...");

                    let expression = display.textContent;
                    let result = eval(expression);

                
                    let matches = expression.match(/(\d+)([\+\-\*\/])(\d+)/);

                    if (matches) {
                        let num1 = Number(matches[1]);
                        let operator = matches[2];
                        let num2 = Number(matches[3]);
                        let res = calculate(num1, num2, operator);
                        logOperation(num1, num2, operator, res);
                    }

                    display.textContent = result;

               
                    resultBox.classList.add("result-animate");
                    console.log("[Animation Triggered] Keyframe effect");

                    setTimeout(() => {
                        resultBox.classList.remove("result-animate");
                    }, 1000);

                    shouldClear = true;

                } catch (e) {
                    display.textContent = "Error";
                }

            } else {
                if (shouldClear) {
                    display.textContent = "";
                    shouldClear = false;
                }
                display.textContent += value;
            }
        });
    });

});
