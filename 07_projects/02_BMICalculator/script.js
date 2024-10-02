const result = document.querySelector(".result");
const button = document.querySelector(".bmi-button");

// console.log(inputHeight.value, inputWeight.value);

button.addEventListener("click", () => {
  const inputHeight = Number(document.querySelector("#height").value);
  const inputWeight = Number(document.querySelector("#weight").value);

//   console.log(inputHeight);
//   console.log(inputWeight);

  if (inputHeight <= 0 || isNaN(inputHeight)) {
    result.textContent = `Please enter valid height(in meter)`;
  } else if (inputWeight <= 0 || isNaN(inputWeight)) {
    result.textContent = `Please enter valid weight(in kg) `;
  } else {
    result.textContent = "";

    let bmiValue = new Number();

    bmiValue = (inputWeight / Math.pow(inputHeight, 2)).toFixed(2);

    // console.log(bmiValue);

    classification(bmiValue);
  }
  //   console.log(inputHeight.value , inputWeight.value );
});

const classification = (value) => {
  let bmiValue = Number(value);

  if (bmiValue < 16) {
    elementCreate("Severe Thinness");
  } else if (bmiValue >= 16 && bmiValue <= 17) {
    elementCreate("Moderate Thinness");
  } else if (bmiValue > 17 && bmiValue <= 18.5) {
    elementCreate("Mild Thinness");
  } else if (bmiValue > 18.5 && bmiValue <= 25) {
    elementCreate("Normal");
  } else if (bmiValue > 25 && bmiValue <= 30) {
    elementCreate("Overweight");
  } else if (bmiValue > 30 && bmiValue <= 35) {
    elementCreate("Obese Class 1");
  } else if (bmiValue > 35 && bmiValue <= 40) {
    elementCreate("Obese Class 2");
  } else if (bmiValue > 40) {
    elementCreate("Obese Class 3");
  }
};

const elementCreate = (str) => {
  // console.log(result.children.length)
  
  if (result.children.length) {
    let ele = document.getElementById("message");
    ele.textContent = str;
  } else {
    let element = document.createElement("div");
    element.id = "message";
    element.appendChild(document.createTextNode(str));
    result.appendChild(element);
  }
};
