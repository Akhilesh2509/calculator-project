const answer = document.getElementById("answer");

const list = answer.innerText;
const answerlist = list.split("");
// console.log(answerlist)
let lastnum = answerlist[answerlist.length - 1];

const operators = ["+", "-", "*", "/"];

function update(value) {
    lastnum = value
}

function one() {
    if (answer.innerText == "Modern Calculator") {
        answer.innerText = ("1");
        update("1");
    }
    else {
        answer.innerText = answer.innerText + "1";
        update("1");
    }
}

function two() {
    if (answer.innerText == "Modern Calculator") {
        answer.innerText = ("2");
        update("2");
    }
    else {
        answer.innerText = answer.innerText + "2";
        update("2");
    }
}

function three() {
    if (answer.innerText == "Modern Calculator") {
        answer.innerText = ("3");
        update("3");
    }
    else {
        answer.innerText = answer.innerText + "3";
        update("3");
    }
}

function four() {
    if (answer.innerText == "Modern Calculator") {
        answer.innerText = ("4");
        update("4");
    }
    else {
        answer.innerText = answer.innerText + "4";
        update("4");
    }
}

function five() {
    if (answer.innerText == "Modern Calculator") {
        answer.innerText = ("5");
        update("5");
    }
    else {
        answer.innerText = answer.innerText + "5";
        update("5");
    }
}

function six() {
    if (answer.innerText == "Modern Calculator") {
        answer.innerText = ("6");
        update("6");
    }
    else {
        answer.innerText = answer.innerText + "6";
        update("6");
    }
}

function seven() {
    if (answer.innerText == "Modern Calculator") {
        answer.innerText = ("7");
        update("7");
    }
    else {
        answer.innerText = answer.innerText + "7";
        update("7");
    }
}

function eight() {
    if (answer.innerText == "Modern Calculator") {
        answer.innerText = ("8");
        update("8");
    }
    else {
        answer.innerText = answer.innerText + "8";
        update("8");
    }
}

function nine() {
    if (answer.innerText == "Modern Calculator") {
        answer.innerText = ("9");
        update("9");
    }
    else {
        answer.innerText = answer.innerText + "9";
        update("9");
    }
}

function zero() {
    if (answer.innerText == "Modern Calculator") {
        answer.innerText = ("0");
        update("0");
    }
    else {
        answer.innerText = answer.innerText + "0";
        update("0");
    }
}

function addition() {
    if (operators.includes(lastnum)) {
    } else if (lastnum == ".") {
    } else if (answer.innerText == "Modern Calculator") {
        answer.innerHTML = ("+");
        update("+");
    } else {
        answer.innerText = answer.innerText + "+";
        update("+");
    }
}

function subtraction() {
    if (operators.includes(lastnum)) {
    } else if (lastnum == ".") {
    } else if (answer.innerText == "Modern Calculator") {
        answer.innerHTML = ("-");
        update("-");
    } else {
        answer.innerText = answer.innerText + "-";
        update("-");
    }
}

function multiply() {
    if (operators.includes(lastnum)) {
    } else if (lastnum == ".") {
    } else if (answer.innerText == "Modern Calculator") {
        answer.innerHTML = ("0*");
        update("-");
    } else {
        answer.innerText = answer.innerText + "*";
        update("-");
    }
}

function divide() {
    if (operators.includes(lastnum)) {
    } else if (lastnum == ".") {
    } else if (answer.innerText == "Modern Calculator") {
        answer.innerHTML = ("0/");
        update("/");
    } else {
        answer.innerText = answer.innerText + "/";
        update("/");
    }
}

function clearall() {
    if (answer.innerText != "Modern Calculator") {
        answer.innerText = ("Modern Calculator");
        update("r");
    }
    else { }
}

function equalto() {
    if (answer.innerText != "Modern Calculator") {
        const equaltoanswer = eval(answer.innerText);

        roundoff = equaltoanswer.toFixed(2)
        if (roundoff == "0.00") {
            roundoff = ("0")
            answer.innerText = roundoff;
            update(roundoff);
        } else {
            const lastans = equaltoanswer.toString().split("");
            let lastnumans = lastans[lastans.length - 1];
            update(lastnumans);

            answer.innerText = roundoff;
        }
    }
    else { }
}

function del() {
    if (answer.innerText == "Modern Calculator") {
    } else if (answer.innerText == lastnum) {
        answer.innerText = ("Modern Calculator");
    }
    else {
        let updatedanswer = answer.innerText;
        delans = updatedanswer.slice(0, -1);
        answer.innerText = delans;

        let lastdel = delans[delans.length - 1];
        update(lastdel);
    }

}

function dot() {
    const newoperatorslist = /[+\-*/]/;

    newlist = answer.innerText;
    const newanswerlist = newlist.split(newoperatorslist);
    const newlastnum = newanswerlist[newanswerlist.length - 1] || "";

    if (answer.innerText == "Modern Calculator") {
        answer.innerText = ("0.");
        update(".");
    } else if (operators.includes(lastnum)) {
    } else if (newlastnum.includes(".")) {
    } else if (lastnum == ".") {
        update(".");
    } else {
        answer.innerText = (answer.innerText + ".");
        update(".");
    }
}