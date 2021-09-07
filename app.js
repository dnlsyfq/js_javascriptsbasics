const btnUpdate = document.getElementById('btn-main');
const btnToggle = document.querySelector('.btn-toggle');

btnUpdate.addEventListener('click',() =>{
//    headline.style.border = 'solid 2px red';
//    headline.style.fontSize = '60px';
    const headline = document.getElementById('headline');
    const input = document.querySelector('.input-main');
//    console.log(input.value);
    headline.className = 'grow';
    headline.textContent = input.value;
    input.value = '';
});

btnToggle.addEventListener('click',() => {
    const listContainer = document.querySelector('.list-container');

    if(listContainer.style.display === "none"){
        listContainer.style.display = '';
        btnToggle.textContent = 'Hide List';
    } else {
        listContainer.style.display = 'none';
        btnToggle.textContent = 'Show List';
    }

});


