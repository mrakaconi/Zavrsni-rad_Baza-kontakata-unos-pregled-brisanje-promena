// Progress Bar

var circle = document.querySelector('circle');
var radius = circle.r.baseVal.value;
var circumference = radius * 2 * Math.PI;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = `${circumference}`;

function setProgress(percent) {
    const offset = circumference - percent / 100 * circumference;
    circle.style.strokeDashoffset = offset;
}

const inputProgress = document.querySelector("#progressbar");
setProgress(inputProgress.value);

inputProgress.addEventListener('change', function (e) {
    if (inputProgress.value < 101 && inputProgress.value > -1) {
        setProgress(inputProgress.value);
    }
})

// kako uraditi animacije?
const s = selektor => document.getElementById(selektor)
const c = selektor => document.getElementsByClassName(selektor)

const inputName = s("id_firstname");
const inputSurname = s("id_lastname");
const inputAge = s("id_age");
const inputEmail = s("id_email")
const inputPhone = s("id_phone")
const inputCell = s("id_cell")
const inputState = s("id_state")
const inputCity = s("id_city")
const inputStreet = s("id_street")
const inputNat = s("id_nat")
const addToProgress = s("#progressbar")
const mediumText = s("medium")

var steps = c("steps");

var filled = [false, false, false, false];

function isValid(i) {
    if (!filled[i]) {
        steps[i].innerHTML = "&#10004;";
        inputProgress.value = parseInt(inputProgress.value) + 9.9;
        mediumText.innerHTML = inputProgress.value + "%";
        filled[i] = true;
        setProgress(inputProgress.value);
    }
}

function isNotValid(i) {
    if (filled[i]) {
        steps[i].innerHTML = i + 1;
        inputProgress.value = parseInt(inputProgress.value) - 9.9;
        mediumText.innerHTML = inputProgress.value + "%";
        filled[i] = false;
        setProgress(inputProgress.value);
    }
}
// Name polje
inputName.addEventListener("focusout", function () {
    if (inputName.value.length > 2) {
        isValid(0);
    } else {
        isNotValid(0);
    }
});
// Surname polje
inputSurname.addEventListener("focusout", function () {
    if (inputSurname.value.length > 2) {
        isValid(1);
    } else {
        isNotValid(1);
    }
});
// Email polje
inputEmail.addEventListener("focusout", function () {
    if (inputEmail.value.length > 2) {
        isValid(2);
    } else {
        isNotValid(2);
    }
});
// Age polje
inputEmail.addEventListener("focusout", function () {
    if (inputAge.value.length > 2) {
        isValid(2);
    } else {
        isNotValid(2);
    }
});
// Phone polje
inputEmail.addEventListener("focusout", function () {
    if (inputPhone.value.length > 2) {
        isValid(2);
    } else {
        isNotValid(2);
    }
});
// Cell polje
inputEmail.addEventListener("focusout", function () {
    if (inputCell.value.length > 2) {
        isValid(2);
    } else {
        isNotValid(2);
    }
});
// State polje
inputEmail.addEventListener("focusout", function () {
    if (inputState.value.length > 2) {
        isValid(2);
    } else {
        isNotValid(2);
    }
});
// City polje
inputEmail.addEventListener("focusout", function () {
    if (inputCity.value.length > 2) {
        isValid(2);
    } else {
        isNotValid(2);
    }
});
// Street polje
inputEmail.addEventListener("focusout", function () {
    if (inputStreet.value.length > 2) {
        isValid(2);
    } else {
        isNotValid(2);
    }
});
// Nationality polje
inputEmail.addEventListener("focusout", function () {
    if (inputNat.value.length > 2) {
        isValid(2);
    } else {
        isNotValid(2);
    }
});