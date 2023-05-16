const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', losFocus);


function losFocus(event) {
if (Number(inputEl.getAttribute('data-length')) === event.target.value.length)   
{
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');


} else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
}
 
};

