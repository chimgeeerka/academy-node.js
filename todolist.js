class TodoList {
  constructor() {
    this.tasks = []; 
  }


  addTask(task) {
    this.tasks.push(task);
  }

  
  removeTask(task) {
    this.tasks = this.tasks.filter(t => t !== task);
  }

  
  showTasks() {
    return this.tasks;
  }
}


const todo = new TodoList();
todo.addTask("Learn Node.JS");
todo.addTask("Do homework");
todo.removeTask("Do homework");
console.log(todo.showTasks()); 