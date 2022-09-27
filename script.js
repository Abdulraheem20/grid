let div = document.querySelector(".num-100");
let input = document.getElementById('input');
let submitValue = document.querySelector('#divForm button');

submitValue.addEventListener('click', (e)=>{
  e.preventDefault();

  for (i = 1; i <= input.value; i++) {
    let values100 = document.createElement("h1");
    document.getElementById("divContainer").appendChild(values100);
  
    if (i % 2 == 0) {
      values100.textContent = i;
      // values100.className = 'even';
      values100.classList.add('even');
  
    } else {
      values100.textContent = i;
      values100.className = 'odd';
      // values100.style.backgroundColor = "yellow";
    }
  };
  input.value = '';
  

})

let clearDiv = document.querySelector('.clear-div');
clearDiv.addEventListener('click', (e)=>{
  div.textContent = '';
})


