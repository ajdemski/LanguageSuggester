//User Interface Logic

function hideResults() {
  document.getElementById("python").setAttribute("class", "hidden");
  document.getElementById("c#").setAttribute("class", "hidden");
  document.getElementById("javascript").setAttribute("class", "hidden");
}

//Business Interface Logic

window.onload = function () {
  hideResults();

  document.querySelector("form").onsubmit = function (event) {
    event.preventDefault();
    hideResults();
    const answer1 = document.getElementById("answers-1").value;
    const answer2 = document.getElementById("answers-2").value;
    const answer3 = document.getElementById("answers-3").value;
    let suggestion = "";

    if (answer1 === "Olympics" || answer2 === "" || answer3 = "offGrid") {
      suggestion = ""
    }



  }
}