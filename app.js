const btnUpdate = document.getElementById('btn-main');
const btnToggle = document.querySelector('.btn-toggle');
const btnRemove = document.querySelector('.btn-remove');
const liHover = document.querySelectorAll('li');

btnUpdate.addEventListener('click',() =>{


    // exercise 1
    // const headline = document.getElementById('headline');
    // const input = document.querySelector('.input-main');
    // headline.className = 'grow';
    // headline.textContent = input.value;
    // input.value = '';

    // exercise 2
    // const input = document.querySelector('.input-main');
    // const item = document.createElement('li');
    // item.textContent = input.value;
    // document.querySelector('ul').appendChild(item);

    // exercise 3
    const input = document.querySelector('.input-main');
    const list = document.querySelector('ul');

    list.insertAdjacentHTML(
      'afterbegin',
      `<li>${input.value}</li>`
    );

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

btnRemove.addEventListener('click',() => {
    const ul = document.querySelector('ul');
    ul.removeChild(ul.lastElementChild);

})



liHover.forEach(li => {
    li.addEventListener('mouseover',() => {
        li.textContent = li.textContent.toUpperCase();
    })
})

