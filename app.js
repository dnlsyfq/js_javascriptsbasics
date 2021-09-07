const btnUpdate = document.getElementById('btn-main');
const btnToggle = document.querySelector('.btn-toggle');

btnUpdate.addEventListener('click',() =>{


    // exercise 1
    // const headline = document.getElementById('headline');
    // const input = document.querySelector('.input-main');
    // headline.className = 'grow';
    // headline.textContent = input.value;
    // input.value = '';

    // exercise 2
    const input = document.querySelector('.input-main');
    const item = document.createElement('li');
    item.textContent = input.value;
    document.querySelector('ul').appendChild(item);



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



