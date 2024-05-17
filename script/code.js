function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let bmi = weight / (height * height); 


    document.getElementById("bmi").innerHTML = "Your BMI is: " + bmi;
    if (bmi < 18.5) {
      document.getElementById("category").innerHTML = "You are underweight.";
    } else if (bmi >= 18.5 && bmi < 25) {
        document.getElementById("category").innerHTML = "You are normal weight.";
    } else if (bmi >= 25 && bmi < 30) {
      document.getElementById("category").innerHTML = "You are overweight.";
    } else {
      document.getElementById("category").innerHTML = "You are obese.";
    }
  }
