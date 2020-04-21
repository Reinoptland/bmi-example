function validateGender(userInputForGender) {
  console.log("Input", userInputForGender);
  //   if (
  //     userInputForGender === "m" ||
  //     userInputForGender === "female" ||
  //     userInputForGender === "f"
  //   ) {
  //     console.log("valid", userInputForGender);
  //   } else {
  //     console.log("Not valid", userInputForGender);
  //     process.exit();
  //   }
  var VALID_INPUTS = ["m", "f", "male", "female"];

  if (VALID_INPUTS.includes(userInputForGender)) {
  } else {
    console.log(
      "current option is not supported yet sorry: ",
      userInputForGender
    );
    process.exit();
  }
}

function bmiCalculator() {
  const height = parseFloat(process.argv[2]);
  const weight = parseInt(process.argv[3]);
  const age = parseInt(process.argv[4]);
  const gender = process.argv[5];

  //   console.log("GENDER:", gender);
  validateGender(gender);
  // predictions
  // - undefined
  // - error, undefined function (or something)

  var BMI = calculateBMI(height, weight); // pass arguments
  //   console.log(BMI);
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
  //   console.log("HEIGHT:", heightInM, "WEIGHT:", weightInKg);
  // weight won't work, it is not in scope
  var BMI = weightInKg / (heightInM * heightInM);

  return BMI;
}

bmiCalculator();
