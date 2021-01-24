function validateEmail(inputText) {
    var mail = document.forms["newsletter"].elements["email"].value;
    var mailregex = /^[a-zA-Z0-9.!#$%&�*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (mail.match(mailregex)) {
        alert("Zostałeś pomyślnie zapisany do naszego newslettera!");
        document.newsletter.email.focus();
        return true;
    }
    else {
        alert("Ups! Wyglada na to, ze Twój adres e-mail nie jest poprawny. Spróbuj jeszcze raz.");
        document.newsletter.email.focus();
        return false;
    }
}

function generateExerciseSet() {
    var number = document.forms["exercise_generator"].elements["number"].value;
    var exercises = ["Przysiady x 10", "Burpees x 10", "Wznosy tułowia leżąc na macie x 10", "Rowerk górski x 10", "Zakroki x 20 na każdą stronę", "Sprint przez 60 sekund", "Pompki x 10", "Jump Squat x 15", "Deska przez 45 sekund", "Boksowanie przez 45 sekund"];
    var text = "Możesz wygenerować tylko 10 ćwiczeń jednocześnie.";
    if (number > 10) {
        document.write(text + "<br>");
        } else {
              for (i=0; i<number; i++ ) {
              document.write(exercises[i] + "<br>");
          }
      }


}

//Oblicznie bmi
function calculatebmi() {
    var wzrost = document.forms["Bmi_calculator"].elements["wzrost1"].value;
    var waga = document.forms["Bmi_calculator"].elements["waga1"].value;
    var result = waga / ((wzrost * wzrost) / 10000);
    var tekst1 = "Twoje BMI jest powyżej normy";
    var tekst2 = "Twoje BMI jest w normie";
    var tekst3 = "Coś poszło nie tak!<br> Upewnij się że wprowadziłeś poprawne dane.";
    if (result > 25) {
        document.getElementById("message").innerHTML = tekst1;
        document.getElementById("message").style.color = 'red';
    }
    else if (result < 25) {
        document.getElementById("message").innerHTML = tekst2;
        document.getElementById("message").style.color = "green";
    }
    else {
        document.getElementById("message").innerHTML = tekst3;
        document.getElementById("message").style.color = 'orange';
    }
}