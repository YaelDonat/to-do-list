import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { filterTodos } from 'src/app/store/todo-actions';

@Component({
  selector: 'app-todo-filter',
  templateUrl: './todo-filter.component.html',
  styleUrls: ['./todo-filter.component.scss']
})
export class TodoFilterComponent {

  constructor(private store: Store) { }

  filterByState(state: string): void {
    this.store.dispatch(filterTodos({ state }));
  }
}
