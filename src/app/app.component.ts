import { Component } from '@angular/core';
import { ITodo } from './todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  get initTodo(): ITodo {
    return {
      title: '',
      id: null,
    };
  }

  todolist: ITodo[] = [];
  todo: ITodo = this.initTodo;

  addTodo(): void {
    console.log(this.todo);
    if (this.todo.id) {
      // update logic
      this.todolist = this.todolist.map((o) => {
        if (o.id == this.todo.id) {
          o.title = this.todo.title;
        }
        return o;
      });
    } else {
      // create logic
      this.todo.id = Date.now();
      this.todolist.push({ ...this.todo }); //spread operator
    }
    this.todo = this.initTodo
  }
  edit(todo: ITodo): void {
    this.todo = { ...todo };
  }
  deleteTodo(id: number): void {
    this.todolist = this.todolist.filter((o) => o.id != id);
  }
}
