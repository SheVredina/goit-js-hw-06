const formEl = document.querySelector('.login-form');


formEl.addEventListener('submit', submitForm);

function submitForm(event){
event.preventDefault(); 
const { email, password } = event.currentTarget.elements;

// const emailEl = event.currentTarget.elements.email.value;
// const passEl = event.currentTarget.elements.password.value;

if (email.value.trim() === ""|| password.value.trim() === ""){
alert("Поле не заповнене")
return;
}

console.log({email: email.value, password: password.value} );
// event.currentTarget.reset();
formEl.reset();

}