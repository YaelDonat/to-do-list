import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State, TodoModel } from 'src/app/interfaces/todo.interface';
import { todoActions } from 'src/app/store/todo-actions';
import { generateUniqueId } from 'src/app/utils/generate-id.util';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent implements OnInit {
  todoForm: FormGroup = new FormGroup({
    title: new FormControl<string>(''),
  })
  submitted: boolean = false;

  constructor(private store: Store, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.todoForm = this.formBuilder.group(
      {
        title: ['',[Validators.required]],
      }
    )
  }

  get f(): { [key: string]: AbstractControl } {
    return this.todoForm.controls;
  }


  addTask(): void {
    this.submitted = true;
    // Verify if todoForm is valid
    if (this.todoForm.invalid) {
      return;
    }

    // Generate Unique Id for the newTodos
    const newId = generateUniqueId();
    const newTodo: TodoModel = {
      id: newId,
      state: State.NOT_STARTED,
      title: this.todoForm.value['title'],
    };

    this.store.dispatch(todoActions.addTodoAction(newTodo));
    // Reset form
    this.todoForm.reset()
    this.submitted = false;
  }

}
