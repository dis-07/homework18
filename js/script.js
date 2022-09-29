const form = document.forms.todo;

const {todoInput} = form.elements;
const button = document.querySelector('.add-btn');
const ul = document.getElementById('list');
const errorMessage = document.querySelector('.error-message');

function createTodo (){
    const li = document.createElement('li')
    li.className = 'todo-list';
    li.innerHTML = todoInput.value;
    ul.append(li);

    const DeleteButton = document.createElement('button');
    DeleteButton.innerHTML = 'Delete';
    DeleteButton.className = 'remove-btn';
    li.append(DeleteButton);

    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.setAttribute('id', 'accept');
    li.prepend(checkBox);

    // ul.onchange = (event) => {
    //     const check = event.target.checked;

    //     if(check) {
    //         li.classList.add('checkbox');
    //         checkBox.setAttribute('disabled' ,'disabled');
    //         button.setAttribute('disabled' ,'disabled');
    //     }
    // }
}

ul.addEventListener('click', (event) => {
    const isRemoveButton = event.target.className === 'remove-btn';

    if (isRemoveButton) {
        const removeButton = event.target;
        const albumsTitle = removeButton.closest('.todo-list');
        albumsTitle.remove();
    }
});

ul.onchange = (event) => {
    const check = event.target.checked;

    if(check) {
        const checked = event.target.closest('.todo-list');
        checked.classList.add('checkbox');
        
        const disabledBox = checked.querySelector('#accept');
        disabledBox.setAttribute('disabled','');

        const disabledButton = checked.querySelector('.remove-btn');
        disabledButton.setAttribute('disabled', '');
    }
}

form.onsubmit = (event) => {
    event.preventDefault();

    if (todoInput.value.trim().length === 0) {
        todoInput.classList.add('error');
        errorMessage.innerHTML = 'Please, type text';
        return;
    }

    createTodo();
    document.todo.reset();
}
    
todoInput.oninput = () => {
    const isErrorField = todoInput.classList.contains('error');
  
    if (isErrorField) {
      todoInput.classList.remove('error');
      errorMessage.innerHTML = '';
    }
};