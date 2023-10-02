const todoList = [{
  name:'watch youtube',
  dueDate: '2023-12-22'
 },{
  name:'make dinner',
  dueDate: '2023-12-22'
  }];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";
  
  todoList.forEach(function(todoObject,index)  {

    const{name,dueDate} = todoObject;
    const html = `
   <div>${name}</div>
   <div>${dueDate}</div>
   <button onclick="
     todoList.splice(${index},1);
     renderTodoList();
   " class="delete-add">delete</button>
   `;
    todoListHTML += html;    
   });
  

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");

  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    //name: name,
    //duedate: dueDate
    name,
    dueDate
  });
  
  inputElement.value = "";
  renderTodoList();
}
