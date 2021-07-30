
class TodosCollection {
    constructor(url) {
    this._url = url;
    this.list = [];
    this.item = null;    
    }

    fetchTodos(){
        return fetch(this._url)
          .then((res) => res.json())
          .then((data) => this.setData(data));
    }
    
   setData(data) {
    this.list = data;
    }

    toggle(id) {
        this.item = this.list.find((item) => item.id == id);
                this.item.isDone = !this.item.isDone;             
                
        return fetch(`${this._url}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(this.item),           
            headers: {
                'Content-Type' : 'application/json',
            },
            
        }).then((res) => res.json());
    }

    deleteTodo(id) {
        this.list = this.list.filter((item) => item.id != id);
        return fetch(`${this._url}/${id}`, {
        method: 'DELETE',
        });
    // ).then((res) => res.json());
    }

    addTodo(data) {
        if(data.title == '') {
            return;
        }    
        return fetch(`${this._url}`, {
            method: 'POST',
            body: JSON.stringify(data),            
            headers: {
                'Content-type' : 'application/json'
            },
            
        })
        .then((res) => res.json())
        .then(data => this.list.unshift(data))
    }
}
