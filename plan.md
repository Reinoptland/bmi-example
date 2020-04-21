# Plan

## Calculate the BMI

X input: height, weight, process.argv
X store the input

X processing
X calculate the BMI using a function
X perform a calculation inside of function
X return the value from the function

X use the return value, give some output

## Validate gender

### Business logic:

- What inputs do want to handle

- 'm' & 'f'
- 'male' & 'female'
- something else

### Data / Storage / Input

X process.argv
X string

### Processing

X do this in a function

acceptable
'm' OR 'f' OR 'male' OR 'female'

not acceptable
NOT 'm' AND NOT 'f' AND NOT 'male' AND NOT 'female'

### Output

If validation pass, give some feedback

### Test the program with dynamic input

### Approach

- make plan
- check yourself before you wreck yourself
- step by step
- reading the code line by line each time (parsing)
- predicting what program will do
- splitting up the program in functions

### Condtionals

- change the flow of prohgram
- conditional statements
  - if
  - if / else
  - if / else if / else
  - switch
  - ? : (ternary operator)
- boolean expression
  - 4 > 5 -> resolves to true or false
  - age > 20 -> resolve to ..?? depends on age
  - 4 > 5 || age > 20 -> user logical operators to combine conditions

### Functions

- declare: function bla(){}
- call: bla()
- pass arguments: bla('hello')
- define parameters: function bla(greeting){}
- return value: function bla(greeting){ return greeting.toUpperCase() }
- side effect: function bla(greeting){ process.exit() }
- scopes: variables defined in a function cannot be accessed outside

### Why use functions

- Easier to read
- Reuse parts of the code
- Write function in one file, use the function in another (organization)
- Write a function, publish on the internet as a library, millions of developers can use your code!
