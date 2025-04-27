// Change text content dynamically
const changeTextBtn = document.getElementById('changeTextBtn');
const description = document.getElementById('description');

changeTextBtn.addEventListener('click', () => {
    description.textContent = "You clicked the button and changed the text!";
});

// Modify CSS styles via JavaScript
const changeStyleBtn = document.getElementById('changeStyleBtn');
const mainTitle = document.getElementById('main-title');

changeStyleBtn.addEventListener('click', () => {
    mainTitle.style.color = 'crimson';
    mainTitle.style.fontSize = '3rem';
});

// Add a new list item
const addElementBtn = document.getElementById('addElementBtn');
const itemList = document.getElementById('itemList');

addElementBtn.addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.textContent = `Item ${itemList.children.length + 1}`;
    itemList.appendChild(newItem);
});

// Remove the last list item
const removeElementBtn = document.getElementById('removeElementBtn');

removeElementBtn.addEventListener('click', () => {
    if (itemList.lastElementChild) {
        itemList.removeChild(itemList.lastElementChild);
    }
});
