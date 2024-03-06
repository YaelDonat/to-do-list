import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TodoModel } from 'src/app/interfaces/todo.interface';
import { selectFilteredTodos, selectTodos } from 'src/app/store/todo-reducer';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent {

  todos$: Observable<TodoModel[]>;
  filteredTodos$: Observable<TodoModel[]>;

  constructor(private store: Store) {
    // All todos
    this.todos$ = this.store.select(selectTodos);

    // filtered todos
    this.filteredTodos$ = this.store.select(selectFilteredTodos);
  }
}