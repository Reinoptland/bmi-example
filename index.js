function validateGender(userInputForGender) {
  console.log("Input", userInputForGender);
}

function bmiCalculator() {
  const height = parseFloat(process.argv[2]);
  const weight = parseInt(process.argv[3]);
  const age = parseInt(process.argv[4]);
  const gender = process.argv[5];

  //   console.log("GENDER:", gender);
  validateGender("m");
  // predictions
  // - undefined
  // - error, undefined function (or something)

  var BMI = calculateBMI(height, weight); // pass arguments
  //   console.log(BMI);
  //   console.log("HEIGHT:", height, "WEIGHT", weight);

  //   console.log(`
  //   ************
  //   HELLO THERE
  //   ************

  //   STATS
  //   *****
  //   Weight = ${weight} kg
  //   Height = ${height} m
  //   Your BMI = ${Math.round(BMI)}

  //   `);
}

function calculateBMI(heightInM, weightInKg) {
  //   console.log("HEIGHT:", heightInM, "WEIGHT:", weightInKg);
  // weight won't work, it is not in scope
  var BMI = weightInKg / (heightInM * heightInM);

  return BMI;
}

bmiCalculator();
