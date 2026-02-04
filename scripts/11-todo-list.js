const todoList = [];

renderToDoList(); // stays empty until the first time you click Add

function renderToDoList() {

  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;  //generating html
    todoListHTML += html;
  }
  console.log(todoListHTML);

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const textValue = inputElement.value;

  todoList.push(textValue);
  // console.log(todoList);

  inputElement.value = '';  // to empty the text box after selecting add
renderToDoList();
}


