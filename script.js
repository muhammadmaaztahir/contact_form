const form = document.querySelector('form');
const userName = document.getElementById('userName');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phoneNumber');
const comment = document.getElementById('comment');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    validate(userName, email, phoneNumber, comment);
});

const sendData = (userNameVal, sRate, count) => {
    if (sRate === count) {
        alert("Registration Successful");
        swal("Welcome! " + userNameVal, "Registration Successful", "success");
    }
}

const successMsg = (userNameVal) => {
    let formContainer = document.getElementsByClassName("inputFields");
    let count = formContainer.length;
    let sRate = 0

    for (let i = 0; i < formContainer.length; i++) {
        if (formContainer[i].childNodes[3].classList.contains("successBorder")){
             sRate++;
        }
    }

    if (count === sRate){
        sendData(userNameVal, sRate, count);
    }else {
        return false;   
    }
}

const isEmail = (emailVal) => {
    let atSymbol = emailVal.indexOf("@");
    if (atSymbol < 1) return false;
    let dot = emailVal.lastIndexOf(".");
    if (dot <= atSymbol + 3) return false;
    if (dot === emailVal.length - 1) return false;
    return true;
}

const validate = (userName, email, phoneNumber, comment) => {
    const userNameVal = userName.value.trim();
    const emailVal = email.value.trim();
    const phoneNumberVal = phoneNumber.value.trim();
    const commentVal = comment.value.trim();

    // validate username
    if (userNameVal === '') {
        showError(userName, '*username cannot be blank');

    } else if (userNameVal.length <= 2) {
        showError(userName, '*username cannot be less than 3 characters');
    }else {
        showSuccess(userName);
    }

    // validate email
    if (emailVal === '') {
        showError(email, '*email cannot be blank');

    } else if (!isEmail(emailVal)) {
        showError(email, '*Not a valid Email');
    } else {
        showSuccess(email);
    }

    // validate phone number
    if (phoneNumberVal === '') {
        showError(phoneNumber, '*Phone number cannot be blank');

    } else if (phoneNumberVal.length != 11) {
        showError(phoneNumber, '*Not a valid Phone Number');
    } else {
        showSuccess(phoneNumber);
    }

    // validate comment
    if (commentVal === '') {
        showError(comment, '*Comment box cannot be blank');

    } else if (commentVal.length <= 10) {
        showError(comment, 'Not less than 10 characters');
    } else {
        showSuccess(comment);
    }

    successMsg(userNameVal)
}

function showError(input, errorMsg) {
    const formControl = input.parentElement;
    inputContainer = input;
    inputContainer.classList.add('errorBorder');
    const errorContainer = formControl.querySelector('.errorMessage');
    errorContainer.classList.add('showErrorMsg');
    errorContainer.innerText = errorMsg;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    inputContainer = input;
    inputContainer.classList.add('successBorder');
    const errorContainer = formControl.querySelector('.errorMessage');
    errorContainer.classList.remove('showErrorMsg');
}