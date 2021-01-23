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

//Oblicznie bmi
function calculatebmi() {
    var wzrost = document.forms["Bmi_calculator"].elements["wzrost1"].value;
    var waga = document.forms["Bmi_calculator"].elements["waga1"].value;
    var result = waga / ((wzrost * wzrost) / 10000);
    var tekst1 = "Twoje BMI jest powyżej normy";
    var tekst2 = "Twoje BMI jest w normie";
    if (result > 25) {
        document.getElementById("message").innerHTML = tekst1;
        document.getElementById("message").style.color = 'red';
    }
    else if (result < 25) {
        document.getElementById("message").innerHTML = tekst2;
        document.getElementById("message").style.color = "green";
    }
}