const linkBtnDecrement = document.querySelector(' [data-action="decrement"]');
const linkBtnIncrement = document.querySelector(' [data-action="increment"]');
let counterValue = 0;
const valueEl = document.querySelector('#value');

linkBtnDecrement.addEventListener('click', (onClickDecrement) );

linkBtnIncrement.addEventListener('click', (onClickIncrement) );



function onClickDecrement () {
    counterValue -= 1;
    valueEl.textContent = counterValue;  

}

function onClickIncrement () {
    counterValue += 1;
    valueEl.textContent = counterValue;  

}

