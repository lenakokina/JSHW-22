const DELETE_BTN_SELECTOR = '.delete-btn';
const ITEM_SELECTOR = '.task-item';
const todoTemplate = $('#newTodoTemplate').html();
const TASK_DONE_CLASS = 'done';
// const TASK_ITEM_CLASS = '.task-item';
const ADD_BTN = $('.add-btn');
const addTaskForm = $('#addTaskForm');
const taskList = $('.task-list');

class TodosView {
    constructor($el, config = {}){
        this._container = $el;
        this._$list = null;
        // this.$newTodo = null;
        this._config = config; 
        this.$taskInput = $('#newTaskInput');       
        this.initView();
    }

    initView(){
        this._$list = $(taskList);
        this._$list.on('click', ITEM_SELECTOR, this.onClickTodo.bind(this));
        this._$list.on('click', DELETE_BTN_SELECTOR, this.onListClick.bind(this));
        ADD_BTN.on('click', ADD_BTN, this.onAddBtnClick.bind(this));      
        this._container.append(this._$list);
    }

    
    onListClick(e) {
        const id = this.getElementId($(e.target));
        this._config.onDelete(id);

    }   

    onClickTodo(e){
        const id = this.getElementId($(e.target));
        this._config.onToggle(id);
        
    }

    onAddBtnClick(e){ 
        // e.preventDefault();

        const task = {
            // isDone: false,
            title: this.$taskInput.val(),
            isDone: false,
        };

        this._config.onAdd(task);
        this.resetForm();
    }

    resetForm(){
        this.$taskInput.val('');
    }


    renderList(list) {
        this._$list.html(list.map(this.getListItemHtml).join(''));
    }

    
    getListItemHtml({id, title, isDone}) {
    return todoTemplate
       .replace('{{id}}', id)
       .replace('{{doneClass}}', isDone ? TASK_DONE_CLASS : '')  
       .replace('{{title}}', title)
       
}
    
    // getListItemHtml({ id, title }) {
    //     return ` <div class="task-item {{doneClass}}" data-todo-id = "${id}">
    //              ${title}
    //             <span class="delete-btn">X</span>`
    // }

    getElementId($el) {
        return $el.closest(ITEM_SELECTOR).data('todoId');
    }
}