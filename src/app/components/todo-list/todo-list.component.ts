import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoModel } from 'src/app/interfaces/todo.interface';
import { todoSelector } from 'src/app/store/todo-reducer';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  todos: TodoModel[] = [];

  constructor(private store : Store){}

  ngOnInit(): void {
    this.loadTodos()
  }

  loadTodos() {
    this.store.select(todoSelector).subscribe((state)=> this.todos = state)
  }

}
