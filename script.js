let div = document.querySelector('.num-100');
// let div = document.getElementById('divContainer');
div.style.backgroundColor = 'black';
// div.style.dislay = 'grid'; (I DON'T KNOW WHY THIS IS NOT WORKING, SO I HAVE TO USE CSS FOR IT.)
// div.style.justifyContent = 'spaceAround'; (I DON'T KNOW WHY THIS IS NOT WORKING, SO I HAVE TO USE CSS FOR IT.)
div.style.gap = '10px';
div.style.gridTemplateColumns = 'auto auto auto auto auto';
div.style.border = '10px solid red';
div.style.borderRadius = '30px';
div.style.paddingLeft = '50px';
div.style.paddingRight = '50px';
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
 