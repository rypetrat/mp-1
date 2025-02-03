// Make sure that if a number is negative it still always turns red and upon becoming positive again returns to black
function calcAdd() {
    let input1 = document.getElementById("num1-input").value
    let input2 = document.getElementById("num2-input").value
    let output = document.getElementById("retVal")

    let result = Number(input1) + Number(input2)
    if(result < 0) {
        document.getElementById("retVal").style.color="red"
        output.innerHTML = result
    }
    else {
        document.getElementById("retVal").style.color="black"
        output.innerHTML = result
    }
}

function calcSub() {
    let input1 = document.getElementById("num1-input").value
    let input2 = document.getElementById("num2-input").value
    let output = document.getElementById("retVal")
    
    let result = Number(input1) - Number(input2)
    if(result < 0) {
        document.getElementById("retVal").style.color="red"
        output.innerHTML = result
    }
    else {
        document.getElementById("retVal").style.color="black"
        output.innerHTML = result
    }
}

function calcMult() {
    let input1 = document.getElementById("num1-input").value
    let input2 = document.getElementById("num2-input").value
    let output = document.getElementById("retVal")

    let result = Number(input1) * Number(input2)
    if(result < 0) {
        document.getElementById("retVal").style.color="red"
        output.innerHTML = result
    }
    else {
        document.getElementById("retVal").style.color="black"
        output.innerHTML = result
    }
}

function calcDiv() {
    let input1 = document.getElementById("num1-input").value
    let input2 = document.getElementById("num2-input").value
    let output = document.getElementById("retVal")

    let result = Number(input1) / Number(input2)
    if(result < 0) {
        document.getElementById("retVal").style.color="red"
        output.innerHTML = result
    }
    else {
        document.getElementById("retVal").style.color="black"
        output.innerHTML = result
    }
}

function calcPow() {
    let input1 = document.getElementById("num1-input").value
    let input2 = document.getElementById("num2-input").value
    let output = document.getElementById("retVal")

    let result = Number(input1)
    for(let i = 1; i < input2; i++) {
        result = result * input1
    }

    if(result < 0) {
        document.getElementById("retVal").style.color="red"
        output.innerHTML = result
    }
    else {
        document.getElementById("retVal").style.color="black"
        output.innerHTML = result
    }
}

function calcClear() {
    let input1 = document.getElementById("num1-input").value = ""
    let input2 = document.getElementById("num2-input").value = ""
    let output = document.getElementById("retVal").innerHTML = ""
}