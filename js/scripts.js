// User Interface Logic
document.getElementById("survey").addEventListener("submit", function (event) {
  event.preventDefault();

  const answer1 = document.getElementById("answers-1").value;
  const answer2 = document.getElementById("answers-2").value;
  const answer3 = document.getElementById("answers-3").value;
  const age = parseInt(document.getElementById("age").value);
  const time = parseInt(document.getElementById("time").value);

  const suggestion = document.getElementById("suggestion");
  suggestion.textContent = generateSuggestion(answer1, answer2, answer3, age, time);
  document.getElementById("result").style.display = "block";
});

//Business Interface Logic
function generateSuggestion(answer1, answer2, answer3, age, time) {

  if (answer1 === "Olympics" && answer2 === "caesar" && answer3 === "summer" && age >= 18 && time >= 4) {
    return "You should learn Python!";
  } else if (answer1 === "marsMission" && answer2 === "earhart" && answer3 === "winter" && age >= 18 && time >= 6) {
    return "You should learn C#!";
  } else {
    return "You should learn JavaScript!";
  }
}
