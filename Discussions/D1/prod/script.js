function checkAge() {
    let input = document.getElementById("age-input").value
    let output = document.getElementById("error-message")

    if (isNaN(input)) {
        output.innerHTML = "Your input is not accepted."
        document.getElementById("main-content").style.visibility = "hidden"
        document.getElementById("error-content").style.visibility = "visible"
        console.log("user input a non-integer input")
    }
    if (output < 0) {
        output.innerHTML = "Your input is not accepted."
        document.getElementById("main-content").style.visibility = "hidden"
        document.getElementById("error-content").style.visibility = "visible"
        console.log("user input a negative input")
    }  
    if (input > 17 && input < 120) {
        output.innerHTML = "Welcome!"
        document.getElementById("main-content").style.visibility = "visible"
        document.getElementById("error-content").style.visibility = "hidden"
        console.log("an acceptable value was input")
    }
    else {
        output.innerHTML = "You cannot see this content."
        document.getElementById("main-content").style.visibility = "hidden"
        document.getElementById("error-content").style.visibility = "visible"
    }
}