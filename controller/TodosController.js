class TodosController {
        constructor($el){        
        this.initCollection();
        this.initView($el);
    }

        initCollection(){ 
        this.todosCollection = new TodosCollection(TODOS_URL);
        this.todosCollection.fetchTodos()
        .then(() => this.renderList())};

    initView($el) {
        this.todosView = new TodosView($el, {
            onToggle: this.toggleTodo.bind(this),
            onDelete: this.deleteTodo.bind(this),
            onAdd: this.addTodo.bind(this),
        });
    }
    
    renderList(){
        this.todosView.renderList(this.todosCollection.list)
    }

    toggleTodo(id){        
        this.todosCollection.toggle(id);
        this.renderList();
    }

    deleteTodo(id) {
        this.todosCollection.deleteTodo(id);
        this.renderList();        
    }

    addTodo(data) {
        this.todosCollection.addTodo(data)
            .then(() => this.renderList());
        
    }
    
}