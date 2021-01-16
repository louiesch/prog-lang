$(document).ready(function() {
  $("form#questions").submit(function(event) {
    const question2 = $("select#question2").val();
    const question4 = $("select#question4").val();
    const nameInput = $("input#name").val();

// the following variables have still been declared, even though their value is never read
    const question1 = $("select#question1").val();
    const question3 = $("select#question3").val();
    const question5 = $("select#question5").val();
    const question6 = $("select#question6").val();

    $(".name").text(nameInput);

    if (question2 === "Big triple-A title video games") {
      $("#Csharp").show();
    } else if (question2 === "Interactive and engaging web pages") {
      $("#JavaScript").show();
    } else if (question2 === "I'm not really sure yet") {
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