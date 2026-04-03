const body = document.querySelector('body')

const fieldSet = document.getElementById('field-set')
const itemList = document.getElementById('item-list')

body.style.background = '#FFF8E1;'
body.style.textAlign = 'center'

fieldSet.style.backgroundColor = 'green'
fieldSet.style.padding = '50px 0'

const inputField = document.getElementById('input-field')
const addBtn = document.getElementById('add-button')
const listHeader = document.getElementById('list-header')
const theList = document.getElementById('item-list')

listHeader.style.display = 'none'

addBtn.addEventListener('click', showHeader)

function showHeader () {
  if (inputField.value === '') {
    alert('Type your Item')
  } else {
    const li = document.createElement('li')
    li.style.padding = '10px';
    let div = document.createElement('div')
    div.setAttribute("id", "item-container");
    let btn2 = document.createElement('button')
    btn2.innerHTML = '<i class="bi bi-trash3-fill"></i>';
    btn2.style.cursor = 'pointer';
    div.style.display = "flex";
    div.style.justifyContent = "space-between";
    div.style.alignItems = "center";

    div.append(li)
    div.append(btn2)
   
    
    listHeader.style.display = 'block'
    li.innerHTML = inputField.value
    theList.appendChild(div)
    itemList.style.display = ''
    itemList.style.backgroundColor = 'black'
    itemList.style.color = 'gold'
    itemList.style.width = '50%'
    itemList.style.padding = '10px'
    itemList.style.margin = '5px auto'
    itemList.style.listStyle = 'none'
    itemList.style.fontSize = '15px'
    itemList.style.border = '2px solid white'
    itemList.style.borderRadius = '20px';

    btn2.addEventListener("click", function itemRemoval(e){
      target = e.target;
      target.parentElement.parentElement.remove();
  
});

  }
  inputField.value = ''

}




