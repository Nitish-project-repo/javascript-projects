const result = document.querySelector(".result");
const button = document.querySelector(".bmi-button");
const inputHeight = document.querySelector("#height");
const inputWeight = document.querySelector("#weight");

// inputHeight?.addEventListener("input",(e) => {
//     console.log(e);
//     console.log(e.target);
// });
const classification = (value) => {
    let bmiValue = Number(value);

    if(bmiValue < 16) {
        elementCreate("Severe Thinness");
    } else if(bmiValue >= 16 && bmiValue <= 17) {
        elementCreate("Moderate Thinness");
    } else if(bmiValue > 17 && bmiValue <= 18.5) {
        elementCreate("Mild Thinness");
    } else if(bmiValue > 18.5 && bmiValue <= 25) {
        elementCreate("Normal");
    } else if(bmiValue > 25 && bmiValue <= 30) {
        elementCreate("Overweight");
    } else if(bmiValue > 30 && bmiValue <=35) {
        elementCreate("Obese Class 1");
    } else if(bmiValue > 35 && bmiValue <= 40) {
        elementCreate("Obese Class 2");
    } else if(bmiValue > 40) {
        elementCreate("Obese Class 3");
    }
}

button.addEventListener("click", () => {
    // console.log(inputHeight.value);
    // console.log(inputWeight.value);
    let bmiValue = new Number();

    bmiValue = (inputWeight.value / Math.pow(inputHeight.value,2)).toFixed(2);

    // console.log(bmiValue);

    classification(bmiValue);
})

const elementCreate = (str) => {
    // console.log(result.children.length)
    if(result.children.length){
        let ele = document.getElementById("message");
        ele.textContent = str;
        
    } else {
        let element = document.createElement("div");
        element.id = "message";
        element.appendChild(document.createTextNode(str));
        result.appendChild(element);
    }
    
}
