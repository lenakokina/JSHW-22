$(() => {
new TodosController($('.container'));                                                                                                                    
});



































// const TODOS_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/todos/';
// const TASK_ITEM_CLASS = 'todo-item';
// const DELETE_BTN_CLASS = 'delete-btn';
// const TASK_DONE_CLASS = 'done';

// const todoTemplate = document.getElementById('newTodoTemplate').innerHTML;// скрипт
// const listTodoEl = document.getElementById('listTodo');// див, куда прилетает из инпута
// const newTaskInputEl = document.getElementById('newTaskInput');// кнопка
// const addTaskForm = document.getElementById('addTaskForm');

// listTodoEl.addEventListener('click', onListClick);
// addTaskForm.addEventListener('submit', onAddTaskFormSubmit)

// let todos = [];

// init();

// function init(){
//     fetchTodos();
// }

// function onAddTaskFormSubmit(event) {
//     event.preventDefault();

//     submitForm();
// }


// function onListClick(event) {
//     const todoId = getElementId(event.target);
//     switch(true) {
//     case event.target.classList.contains(TASK_ITEM_CLASS) :
//         toggleListElement(todoId);
//         break;
    
//    case event.target.classList.contains(DELETE_BTN_CLASS) :
//         deleteTask(todoId);
//         break;

//  }
// }


// function getElementId(el) {
//  return el.closest('.' + TASK_ITEM_CLASS).dataset.todoId;
// }

// function submitForm() {
//     const newTodo = { title: newTaskInputEl.value };
//     if(!newTodo.title) {
//         return;
//     }
//     createTodo(newTodo);
//     resetForm();
// }

// function getFormData() {
//     return  {title: newTaskInputEl.value, isDone: false}
// }

// function resetForm() {
//     addTaskForm.reset();
// }

// function createTodo(newTodo){    
//     fetch(TODOS_URL, {
//         method:'POST',
//         body: JSON.stringify(newTodo),
//         headers: {
//          'Content-Type' : 'application/json'
//         }
//     }).then((resp) => resp.json())
//       .then(addTodo)
// }


// function addTodo(todo) {
// todos.push(todo);
// renderList(todos);
// }

// function toggleListElement(id){
//      const todo = todos.find((item) => item.id === id);

//      todo.isDone = !todo.isDone;
//      fetch(TODOS_URL + id, {
//         method:'PUT',
//         body: JSON.stringify(todo),
//         headers: {
//          'Content-Type' : 'application/json'
//         },        
//      }).then(() => renderList(todos));
// }



// function deleteTask(id) {
//     fetch(TODOS_URL + id, {
//         method:'DELETE',        
//      }).then(() =>{
//         todos = todos.filter((item) => item.id !== id);

//       renderList(todos)});
// }

// function fetchTodos(){
//     fetch(TODOS_URL)
//         .then((resp) =>  resp.json())
//         .then(setTodos)
//         .then(renderList)
// }

// function setTodos(data) {
//     return todos = data;
// }

// function renderList(list) {
//     listTodoEl.innerHTML = list.map(getItemHtml).join('')
// }

// function getItemHtml({id, title, isDone}) {
//     return todoTemplate
//        .replace('{{id}}', id)
//        .replace('{{doneClass}}', isDone ? TASK_DONE_CLASS : '')
//        .replace('{{title}}', title)
// }


