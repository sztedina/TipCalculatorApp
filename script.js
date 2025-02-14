const calcForm = document.querySelector("form")
/* const billInput = document.getElementById("price") */
/* const billLabel = document.getElementById("bill-label") */
/* const numberInputDiv = document.getElementById("price-div") */
/* const tipInput = document.querySelector("input[type='radio']:checked") */
const peopleContainer = document.getElementById("people-container")
const peopleDiv = document.getElementById("people-div")
const peopleInput = document.getElementById("people")
const totalPrice = document.getElementById("total-price")
const tipRatio = document.getElementById("tip-ratio")
const resetBtn = document.getElementById("reset-btn")

let data = {
    bill: 0,
    tip: 15,
    people: 0
}

calcForm.addEventListener("input", (e) => {

    // Get data 
   
    data = Object.fromEntries(new FormData(calcForm));
    console.log(data)
    //Validation && handling error
    
    if (parseFloat(data.people) <= 0 ) {

        if (!peopleInput.classList.contains("error")) {
            peopleInput.classList.add("error")
            
        } 
            
    }  else {
        peopleInput.classList.remove("error")
  
    }
    
    // CALCULATOR
    
    if (data.bill && data.people) {
        totalPrice.innerText = calculateTotal(data.bill, data.tip, data.people)
        tipRatio.innerText = calculateTip(data.bill, data.tip, data.people)
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


