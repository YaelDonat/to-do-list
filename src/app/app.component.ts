import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectTotalFinishedTodos, selectTotalInProgressTodos, selectTotalNotStartedTodos, selectTotalTodos } from './store/todo-reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  title = 'app';
  today: string = new Date().toDateString();
  // Total todo and filtered by states
  totalTodos$: Observable<number>;
  totalFinishedTodos$: Observable<number>;
  totalInProgressTodos$: Observable<number>;
  totalNotStartedTodos$: Observable<number>;

  constructor(private store: Store) {
    this.totalTodos$ = this.store.select(selectTotalTodos);
    this.totalFinishedTodos$ = this.store.select(selectTotalFinishedTodos);
    this.totalInProgressTodos$ = this.store.select(selectTotalInProgressTodos);
    this.totalNotStartedTodos$ = this.store.select(selectTotalNotStartedTodos);
  }
}
