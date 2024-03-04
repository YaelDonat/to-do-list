import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, TodoModel } from 'src/app/interfaces/todo.interface';
import { todoActions } from 'src/app/store/todo-actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  
  @Input() todo?: TodoModel
  states = State;
  isShowed= false;
  todoTitle?: string;

  constructor(private store : Store){}
  ngOnInit(): void {
    this.todoTitle = this.todo?.title
  }

  togglePopover() : void {
    this.isShowed = !this.isShowed;
  }

  updateState(newState: State): void {
    const updatedTodo = {
      id: this.todo!.id,
      state: newState,
      title: this.todo!.title
    };
  
    this.store.dispatch(todoActions.updateTodoAction(updatedTodo));
  }
  

}
