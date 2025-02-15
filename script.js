const calcForm = document.querySelector("form")
const peopleContainer = document.getElementById("people-container")
const peopleDiv = document.getElementById("people-div")
const peopleInput = document.getElementById("people")
const totalPrice = document.getElementById("total-price")
const tipRatio = document.getElementById("tip-ratio")
const resetBtn = document.getElementById("reset-btn")
const span = document.querySelector(".comment")
const customTip = document.getElementById("custom")

let data = {
    bill: 0,
    tip: 15,
    people: 0
}

calcForm.addEventListener("input", (e) => {

    // Get data 
   
    data = Object.fromEntries(new FormData(calcForm));
   
    //Validation && handling error

    
    console.log(data)
    if (parseFloat(data.people) <= 0 && (!peopleInput.classList.contains("error"))) {

            peopleInput.classList.add("error")
            span.style.color = "red"
        
            
    }
    if (parseFloat(data.people) > 0) {
        peopleInput.classList.remove("error")
        span.style.color = "white"
        console.log("Hi")
    }
    
    // CALCULATOR
    
    if (data.bill && data.people) {
        if (data.customtip) {
            console.log("Hi")
            totalPrice.innerText = calculateTotal(data.bill, data.customtip, data.people)
            tipRatio.innerText = calculateTip(data.bill, data.customtip, data.people)
            /* resetBtn.disabled = false */
        } else {
            totalPrice.innerText = calculateTotal(data.bill, data.tip, data.people)
            tipRatio.innerText = calculateTip(data.bill, data.tip, data.people)
        }
        
        resetBtn.disabled = false
    }

    
})

resetBtn.addEventListener("click", clearForm)

// Reset form

function clearForm() {
    calcForm.reset()
    totalPrice.innerText = "0.00"
    tipRatio.innerText = "0.00"
}

// Calculate Total / person
function calculateTotal(bill, tip, people) {
    return ((bill * (tip / 100 + 1)) / people).toFixed(2)
    resetBtn.disabled = true
}

// Calculate Tip Amount / person
function calculateTip(bill, tip, people) {
    return ((bill * (tip / 100)) / people).toFixed(2)
}


