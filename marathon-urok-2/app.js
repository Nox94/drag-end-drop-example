const item = document.querySelector(".item");
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener("dragstart", dragstart);
item.addEventListener("dragend", dragend);

placeholders.forEach((placeholder) => {
  placeholder.addEventListener('dragover', dragover) // над
  placeholder.addEventListener('dragenter', draenter) // на территории
  placeholder.addEventListener('dragleave', dragleave) // покидаем территорию
  placeholder.addEventListener('drop', dragDrop) // отпустили
})

function dragstart(event) {
  event.target.classList.add('hold');
  setTimeout(() => event.target.classList.add('hide'), 0);
  
}

function dragend(event) {
  event.target.classList.remove('hold', 'hide');
}

function dragover(event) {
  event.preventDefault();
};

function draenter(event) {
  event.target.classList.add('hovered');
};

function dragleave(event) {
  event.target.classList.remove('hovered');
};

function dragDrop(event) {
  event.target.classList.remove('hovered');
  event.target.append(item);
};