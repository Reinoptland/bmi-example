function bmiCalculator() {
  const height = parseFloat(process.argv[2]);
  const weight = parseInt(process.argv[3]);

  calculateBMI(1.6, 70); // pass arguments
  //   console.log("HEIGHT:", height, "WEIGHT", weight);
}

function calculateBMI(heightInM, weightInKg) {
  // define parameters
  console.log("HEIGHT:", heightInM, "WEIGHT:", weightInKg);
}

bmiCalculator();
