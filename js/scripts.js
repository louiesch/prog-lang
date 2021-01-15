$(document).ready(function() {
  $("form#questions").submit(function(event) {
    const question1 = $("select#question1").val();
    const question2 = $("select#question2").val();
    const question3 = $("select#question3").val();
    const question4 = $("select#question4").val();
    const question5 = $("select#question5").val();
    const question6 = $("select#question6").val();

    if (question2 === "Big title triple-A video games") {
      $("#Csharp").show();
    } else if (question2 === "Interactive and engaging web pages" || question3 === "A tiny bit") {
      $("#JavaScript").show();
    } else if (question2 === "I'm not really sure yet" || question3 === "No, none") {
      $("#Python").show();
    } else if (question4 === "Dogs are boring, I like snakes") {
      $("#Python").show();
    } else if (question2 === "Challenging nitty-gritty, low-level code") {
      $("#Rust").show();
    } else {
      $("#Python").show();
    }
    event.preventDefault();
  })
})