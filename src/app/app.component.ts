import { Component } from '@angular/core';
import { ITodo } from './todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todolist: ITodo[] = [];
  todo: ITodo = {
    title: '',
    id: null,
  };
  addTodo(): void {
    console.log(this.todo);
    this.todo.id = this.todolist.length + 1;
    this.todolist.push({ ...this.todo }); //spread operator
    this.todo = {
      title: '',
      id: null,
    };
  }
}
