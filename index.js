function bmiCalculator() {
  const height = parseFloat(process.argv[2]);
  const weight = parseInt(process.argv[3]);

  console.log("HEIGHT:", height, "WEIGHT", weight);
}

bmiCalculator();
