$(document).ready(function(){
    const user = {
        name:'',
        email:'',
        mobile:'',
        password:'',
        confirmPassword:''
    }

    const formContainer = document.querySelector(".form-container");
    const form = formContainer.querySelector("form");
    const name = form.querySelector("#name")
    const email = form.querySelector("#email")
    const mobile = form.querySelector("#mobile")
    const password = form.querySelector("#password")
    const confirmPassword = form.querySelector("#confirm-password")

    const signUpBtn = form.querySelector('#btn');

    const errorSpans = form.querySelectorAll('span');
    const nameError = form.querySelector("#name-error")
    const emailError = form.querySelector("#email-error")
    const mobileError = form.querySelector("#mobile-error")
    const passwordError = form.querySelector("#password-error")
    const confirmPasswordError = form.querySelector("#confirm-password-error")




    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        alert('hi')
    })
})