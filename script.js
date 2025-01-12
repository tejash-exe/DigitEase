let display = document.getElementById("screen");
let screen = "";
let expression = "";
let sh = false;

let buttons = document.getElementsByClassName("keys");
buttons = Array.from(buttons);
for (const key in buttons) {
    buttons[key].addEventListener("click", function (event) {
        if (buttons[key] == document.getElementById("equal")) {
            try {
                if (expression == "") {
                    display.innerText = "0";
                }
                else {
                    expression = String(eval(expression));
                    display.innerText = expression;
                    screen = expression;
                    document.getElementById("screenbox").scrollLeft = 0;
                }
                if (expression == "Infinity" || expression == "undefined" || expression == "NaN") {
                    expression = "";
                    screen = "";
                } else if (expression == document.getElementById("primary_history").innerText || expression == "") {
                } else if (expression == "0") {
                    expression = "";
                    screen = "";
                    display.innerText = "0";
                } else {
                    if (sh) {
                        document.getElementById("secondary_history").innerText = document.getElementById("primary_history").innerText;
                    }
                    document.getElementById("primary_history").innerText = expression;
                    sh = true;
                }
            } catch (error) {
                display.innerText = "Syntax Error!";
                screen = "";
                expression = "";
            }
        }
        else if (buttons[key] == document.getElementById("ac")) {
            display.innerText = "0";
            screen = "";
            expression = "";
        }
        else if (buttons[key] == document.getElementById("delete")) {
            expression = expression.slice(0, expression.length - 1);
            screen = screen.slice(0, screen.length - 1);
            document.getElementById("screenbox").scrollLeft = document.getElementById("screenbox").scrollWidth;
            // console.log(expression);
            // console.log(screen);
            if (expression.length == 0) {
                display.innerText = "0";
            }
            else {
                display.innerText = screen;
            }
        }
        else if ((buttons[key] == document.getElementById("bc")) && (screen[screen.length - 1] == "+" || screen[screen.length - 1] == "-" || screen[screen.length - 1] == "x" || screen[screen.length - 1] == "÷")) {

        }
        else if ((buttons[key] == document.getElementById("divide") || buttons[key] == document.getElementById("multiply")) && (expression == "" || screen[screen.length - 1] == "(" || ((screen[screen.length - 1] == "+" || screen[screen.length - 1] == "-") && (screen[screen.length - 2] == "(" || screen.length == 1)))) {

        }
        else if ((buttons[key] == document.getElementById("divide") || buttons[key] == document.getElementById("multiply") || buttons[key] == document.getElementById("plus") || buttons[key] == document.getElementById("minus")) && (screen[screen.length - 1] == "÷" || screen[screen.length - 1] == "x" || screen[screen.length - 1] == "+" || screen[screen.length - 1] == "-")) {
            expression = expression.slice(0, expression.length - 1);
            screen = screen.slice(0, screen.length - 1);
            expression = `${expression}${(buttons[key].innerText == "x") ? "*" : ((buttons[key].innerText == "÷") ? "/" : buttons[key].innerText)}`;
            screen = screen + buttons[key].innerText;
            display.innerText = screen;
            document.getElementById("screenbox").scrollLeft = document.getElementById("screenbox").scrollWidth;
            display.innerText = screen;
            document.getElementById("screenbox").scrollLeft = document.getElementById("screenbox").scrollWidth;
        }
        else if (buttons[key] == document.getElementById("bo") && (screen[screen.length - 1] == "0" || screen[screen.length - 1] == "1" || screen[screen.length - 1] == "2" || screen[screen.length - 1] == "3" || screen[screen.length - 1] == "4" || screen[screen.length - 1] == "5" || screen[screen.length - 1] == "6" || screen[screen.length - 1] == "7" || screen[screen.length - 1] == "8" || screen[screen.length - 1] == "9" || screen[screen.length - 1] == ")")) {
            expression = expression + "*";
            screen = screen + "x";
            expression = `${expression}${(buttons[key].innerText == "x") ? "*" : ((buttons[key].innerText == "÷") ? "/" : buttons[key].innerText)}`;
            screen = screen + buttons[key].innerText;
            display.innerText = screen;
            document.getElementById("screenbox").scrollLeft = document.getElementById("screenbox").scrollWidth;
        }
        else if ((buttons[key].innerText == "0" || buttons[key].innerText == "1" || buttons[key].innerText == "2" || buttons[key].innerText == "3" || buttons[key].innerText == "4" || buttons[key].innerText == "5" || buttons[key].innerText == "6" || buttons[key].innerText == "7" || buttons[key].innerText == "8" || buttons[key].innerText == "9") && (screen[screen.length - 1] == ")")) {
            expression = expression + "*";
            screen = screen + "x";
            expression = `${expression}${(buttons[key].innerText == "x") ? "*" : ((buttons[key].innerText == "÷") ? "/" : buttons[key].innerText)}`;
            screen = screen + buttons[key].innerText;
            display.innerText = screen;
            document.getElementById("screenbox").scrollLeft = document.getElementById("screenbox").scrollWidth;
        }
        else {
            expression = `${expression}${(buttons[key].innerText == "x") ? "*" : ((buttons[key].innerText == "÷") ? "/" : buttons[key].innerText)}`;
            screen = screen + buttons[key].innerText;
            display.innerText = screen;
            document.getElementById("screenbox").scrollLeft = document.getElementById("screenbox").scrollWidth;
        }
    })
}