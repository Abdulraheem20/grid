for(i = 1; i <= 100; i++){
    let values100 = document.createElement('h1');
    values100.style.textAlign = 'center';
    values100.style.width = '100px';
    values100.style.height = '100px';
    values100.style.paddingTop = '50px';
    values100.style.fontSize = '50px'
    values100.style.border = '10px solid white'
    // values100.style.display = 'inline';
    // values100.style.justifyContent = 'spaceBetween'
  
    document.getElementById('divContainer').appendChild(values100);
    if(i % 2 == 0){
    values100.textContent = i;
    values100.style.backgroundColor = 'green';
   } else{
    values100.textContent = i;
    values100.style.backgroundColor = 'yellow';
  };
  };
  /*<div class="num-100" id="divContainer">
       
    </div>*/