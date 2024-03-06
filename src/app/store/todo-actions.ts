import { createAction, props } from "@ngrx/store";
import { State, TodoModel } from "../interfaces/todo.interface";

export const addTodoAction = createAction('[TODO] ADD_TODO', props<TodoModel>());
export const updateTodoAction = createAction('[TODO] UPDATE_TODO', props<TodoModel>());
export const deleteTodoAction = createAction('[TODO] DELETE_TODO', props<TodoModel>());
// FILTER
export const filterTodos = createAction('[TODO] FILTER_TODOS', props<{ state: State | string }>());


export const todoActions = {
    addTodoAction,
    updateTodoAction,
    deleteTodoAction,
    filterTodos
}