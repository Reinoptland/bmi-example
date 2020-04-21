function bmiCalculator() {
  const height = parseFloat(process.argv[2]);
  const weight = parseInt(process.argv[3]);

  var BMI = calculateBMI(height, weight); // pass arguments
  console.log(BMI);
  //   console.log("HEIGHT:", height, "WEIGHT", weight);

  console.log(`
  ************
  HELLO THERE
  ************

  STATS
  *****
  Weight = ${weight} kg
  Height = ${height} m
  Your BMI = ${Math.round(BMI)}
  
  `);
}

function calculateBMI(heightInM, weightInKg) {
  console.log("HEIGHT:", heightInM, "WEIGHT:", weightInKg);
  // weight won't work, it is not in scope
  var BMI = weightInKg / (heightInM * heightInM);

  return BMI;
}

bmiCalculator();
