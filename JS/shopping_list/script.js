// 9. Deploy To Netlify

const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const filter = document.getElementById('filter');
const formBtn = itemForm.querySelector('button');
let isEditMode = false;

// Cache the DOM elements
const buttonClasses = 'remove-item btn-link text-red';
const iconClasses = 'fa-solid fa-xmark';

// 1. Add items to the list via the form
function onAddItemSubmit(e) {
  e.preventDefault();
  const newItem = itemInput.value;

  // Simple Validation
  if (!newItem) {
    alert('Please Add an Item');
    return;
  }

  // Check for edit mode
  if (isEditMode) {
    const itemToEdit = itemList.querySelector('.edit-mode');
    removeItemFromStorage(itemToEdit.textContent);
    itemToEdit.classList.remove('edit-mode');
    itemToEdit.remove();
    isEditMode = false;
  } else {
    if (checkIfItemExists(newItem)) {
      alert('That item already exist!');
      return;
    }
  }

  // Create List Item
  addItemToDOM(newItem);
  addItemToStorage(newItem);
  checkUI();

  itemInput.value = '';
}

function createButton(classes) {
  const button = document.createElement('BUTTON');
  button.className = classes;
  return button;
}

function createIcon(classes) {
  const i = document.createElement('I');
  i.className = classes;
  return i;
}

function addItemToDOM(item) {
  const li = document.createElement('LI');
  li.textContent = item;

  const button = createButton(buttonClasses);
  const icon = createIcon(iconClasses);

  button.appendChild(icon);
  li.appendChild(button);

  itemList.appendChild(li);
}

// 2. Remove item from list by clicking the 'X' button
function removeItem(item) {
  if (confirm('Are you sure?')) {
    // Remove item from DOM
    item.remove();

    // Remove item from storage
    removeItemFromStorage(item.textContent);
  }
  checkUI();
}

function onClickItem(e) {
  if (e.target.parentElement.classList.contains('remove-item')) {
    removeItem(e.target.parentElement.parentElement);
  } else {
    setItemToEdit(e.target);
  }
}

function checkIfItemExists(item) {
  const itemFromStorage = getItemFromStorage();
  return itemFromStorage.includes(item);
}

// 3. Clear all the item with clear button
function clearItems() {
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }

  // Clear form local storage
  localStorage.removeItem('items');

  checkUI();
}

// 4. Remove filter item and clear btn dynamically form UI
function checkUI() {
  const items = itemList.querySelectorAll('LI');
  let displayStyle = items.length === 0 ? 'none' : 'block';

  clearBtn.style.display = displayStyle;
  filter.style.display = displayStyle;

  formBtn.innerHTML = `<i class="fa-solid fa-plus"></i> Add Item`;
  formBtn.style.backgroundColor = '#333';

  isEditMode = false;
}

// 5. Filter the item by typing in the filter field
function filterItems(e) {
  const text = e.target.value.toLowerCase();
  const items = itemList.querySelectorAll('LI');

  items.forEach((item) => {
    const itemName = item.firstChild.textContent.toLowerCase();
    let displayStyle = itemName.indexOf(text) != -1 ? 'flex' : 'none';
    item.style.display = displayStyle;
  });
}

// 6. Adding localStorage to persist data
function getItemFromStorage() {
  let itemFromStorage;

  if (localStorage.getItem('items') === null) {
    itemFromStorage = [];
  } else {
    itemFromStorage = JSON.parse(localStorage.getItem('items'));
  }

  return itemFromStorage;
}

function addItemToStorage(item) {
  let itemFromStorage = getItemFromStorage();
  itemFromStorage.push(item);

  // convert to JSON string and set to local storage
  localStorage.setItem('items', JSON.stringify(itemFromStorage));
}

function displayItems() {
  const itemFromStorage = getItemFromStorage();
  itemFromStorage.forEach((item) => {
    addItemToDOM(item);
    checkUI();
  });
}

function removeItemFromStorage(item) {
  let itemFromStorage = getItemFromStorage();

  // Filter out item to be removed
  itemFromStorage = itemFromStorage.filter((i) => i !== item);

  // Reset to localStorage
  localStorage.setItem('items', JSON.stringify(itemFromStorage));
}

// 7. Click on an item to put it on 'edit' mode and add to form
function setItemToEdit(item) {
  isEditMode = true;

  itemList.querySelectorAll('LI').forEach((item) => {
    item.classList.remove('edit-mode');
  });

  item.classList.add('edit-mode');
  itemInput.value = item.textContent;

  formBtn.innerHTML = `<i class="fa-solid fa-pen"></i> Update Item`;
  formBtn.style.backgroundColor = '#228b22';
}

// 8. Update Item

// Initialize app
function init() {
  itemForm.addEventListener('submit', onAddItemSubmit);
  itemList.addEventListener('click', onClickItem);
  clearBtn.addEventListener('click', clearItems);
  filter.addEventListener('input', filterItems);
  document.addEventListener('DOMContentLoaded', displayItems);

  checkUI();
}

init();
