function checkAge() {
    let input = document.getElementById("input").value;
    let output = document.getElementById("output");
    if (isNaN(input)) {
        output.innerHTML="Your input value is not accepted."
        document.getElementById("hidden-img").style.visibility = "hidden"
        console.log("user input a non-integer input")
    }
    if (input < 0) {
        output.innerHTML="Your input value has to be greater than 0."
        document.getElementById("hidden-img").style.visibility = "hidden"
        console.log("user input a non-positive value")
    }
    if (input > 17 && input < 150) {
        output.innerHTML="Welcome!"
        document.getElementById("hidden-img").style.visibility = "visible"
        console.log("an acceptable value was input")
    }
    else {
        output.innerHTML="You cannot see this content."
        document.getElementById("hidden-img").style.visibility = "hidden"
    }
}
