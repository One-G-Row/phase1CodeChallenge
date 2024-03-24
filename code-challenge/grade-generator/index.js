//link the html page to the js file to display result on html
const output = document.getElementById("output");

//create a prompt to enter student's marks
function promptMarks() {
  return parseInt(prompt("Enter your marks!"));
}
//PromptMarks();

//use an else if statement to grade the marks
function gradeGenerator(marks) {
  marks = parseInt(marks);
  if (marks > 79) {
    return "A";
  } else if (marks >= 60 && marks <= 79) {
    return "B";
  } else if (marks >= 49 && marks <= 59) {
    return "C";
  } else if (marks >= 40 && marks <= 49) {
    return "D";
  } else {
    return "E";
  }
}
//gradeGenerator(promptMarks);

//display the result on html
function displayResult(result) {
  output.textContent = "Your grade is:" + " " + result;
}
//displayResult(gradeGenerator);

const marks = promptMarks();
const grade = gradeGenerator(marks);
console.log(displayResult(grade));
