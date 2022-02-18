console.log("Dragon Travels Project");

let username = document.getElementById('username');
let email = document.getElementById('email');
let phone = document.getElementById('phone');

let validUser = false;
let validEmail = false;
let vaildPhone = false;
$('#success').hide();
$('#failure').hide();

// console.log(name, email, phone);

username.addEventListener('blur', () => {
    console.log("name is blurred");
    // Validate name here
    let regex = /^[a-z]([0-9a-z]){1,14}$/;
    let str = username.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("Your name is valid");
        username.classList.remove('is-invalid');
        validUser = true;

    }
    else {
        console.log("Your name is invalid");
        username.classList.add('is-invalid');
        validUser = false;

    }
})

email.addEventListener('blur', () => {
    console.log("email is blurred");
    // Validate email here
    let regex = /^([_\-\.a-zA-Z0-9]+)@([_\-\.a-zA-Z]+)\.([a-z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("Your email is valid");
        username.classList.remove('is-invalid');
        validEmail = true;

    }
    else {
        console.log("Your email is invalid");
        username.classList.add('is-invalid');
        validEmail = false;
    
    }
})

phone.addEventListener('blur', () => {
    console.log("phone is blurred");
    // Validate phone here
    let regex  = /([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("Your phone number is valid");
        phone.classList.remove('is-invalid');
        vaildPhone = true;

    }
    else {
        console.log("Your phone number is invalid");
        phone.classList.add('is-invalid');
        vaildPhone = false;

    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();

    console.log("You clicked on submit");
    console.log(validUser, validEmail, vaildPhone);

    // Submit your form here
    if (validUser && validEmail && vaildPhone) {
        console.log('User, email and phone number are valid. Submitting the form')
        let success = document.getElementById('success');
        let failure = document.getElementById('failure');

        success.classList.add('show');
        // failure.classList.remove('show');
        // $('#failure').alert('close');
        $('#failure').hide();
        $('#success').show();


    }
    else {
        console.log('Any one of user, email or phone number are invalid. Hence not submitting the form. Please correct the errors and try again');
        let failure = document.getElementById('failure');
        let success = document.getElementById('success');

        failure.classList.add('show');
        // success.classList.remove('show');
        // $('#success').alert('close');
        $('#failure').show();
        $('#success').hide();
    }
})