const inputEl = document.querySelector('#name-input');
const textOutput = document.querySelector("#name-output");


inputEl.addEventListener('input', onInput) ;

function onInput (event) {
    if(!event.target.value){
     return textOutput.textContent = `Anonymous`
    };

  textOutput.textContent = event.target.value;
  // console.log(event);
 
}

     
