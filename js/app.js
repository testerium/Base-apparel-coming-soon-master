const email = document.querySelector(".email");
const icon = document.querySelector(".error_icon");
const error = document.querySelector(".error_text");

let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
function check() {
    if(email.value.match(regExp)) {
        
        email.classList.remove('email-error');
        icon.style.display = "none";
        error.style.display = "none";

    } else {
        email.classList.add('email-error');
        icon.classList.remove('hide');
        icon.style.display = "inline";
        error.style.display = "block";
    }

    if(email.value == "") {
        email.classList.remove('email-error');
        icon.classList.add('hide');
        icon.style.display = "none";
        error.style.display = "none";
    }
}
