const { declareOpaqueType } = require("jscodeshift");

let order = 1;
let adding = false;

const error = document.querySelector('.error');
const message = 'Please add a description.';

const add_btn = document.querySelector('.add');
add_btn.addEventListener('click', () => {
  const target = document.querySelector('#requested');
  if (adding == false) {
    adding = true;
    target.appendChild(create_item());
  } else {
    error.innerHTML = message;
  }
});

const create_item = () => {
  let item = document.createElement('div');
  item.classList.add('item');

  item.setAttribute("id", "item-");
  
  item.setAttribute("draggable", "");

  item.addEventListener('dragstart', (event)=>{
    event.dataTransfer.setData('text/plain', event.target.id)
  });
  item.addEventListener('dragend', (event)=>{
    event.dataTransfer.clearData();
  });

  let input = document.createElement('input');

  item.appendChild(input);

  let save_btn = document.createElement('button');

  document.querySelector('button').innerHTML = 'Save';

  save_btn.addEventListener(onclick, ()=>{
    error.innerHTML = "";
      if (input !== ""){
        order = order +=1;
        item.innerHTML = input.value;
        adding = false;
      } else {
        error.innerHTML = message;
      }
    });
    
    item.append(save_btn);
};


document.querySelectorAll('.drop').forEach(element => {
    element.addEventListener('drop', (event)=>{
      event.preventDefault();
      const id = event.dataTransfer.getData('text');
      event.target.appendChild(document.getElementById('id'));
    });
    element.addEventListener('dragover', (event)=>{
      event.preventDefault();
    });
});