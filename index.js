function bmiCalculator() {
  const height = parseFloat(process.argv[2]);
  const weight = parseInt(process.argv[3]);

  calculateBMI(1.6, 70); // pass arguments
  //   console.log("HEIGHT:", height, "WEIGHT", weight);
}

function calculateBMI(heightInM, weightInKg) {
  console.log("HEIGHT:", heightInM, "WEIGHT:", weightInKg);
  // weight won't work, it is not in scope
  var BMI = weightInKg / (heightInM * heightInM);
  console.log(BMI);
}

bmiCalculator();
