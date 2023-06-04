// User Interface Logic
document.getElementById("survey").addEventListener("submit" , function(event) {
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

