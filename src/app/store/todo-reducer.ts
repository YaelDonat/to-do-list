import { ActionReducer, MetaReducer, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { TodoModel, initialTodos } from "../interfaces/todo.interface";
import { todoActions } from "./todo-actions";

// console.log all actions
export const debug = (reducer: ActionReducer<any>): ActionReducer<any> => {
    return (state, action) => {
        console.log('state', state);
        console.log('action', action);

        return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<any>[] = [debug];

export const todoReducer = createReducer(
    initialTodos,
    on(todoActions.addTodoAction, (state, newToDo) => {
        return [...state, newToDo]
    }),
    
    on(todoActions.updateTodoAction, (state, updatedTodo) => {
        return state.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo);
      }),

    on(todoActions.deleteTodoAction, (state, todo) => {
        let todos = state.filter((t) => t.id != todo.id);
        return [...todos]
    })
);


export const todoSelector = createSelector(createFeatureSelector("todos"),
    (todos: TodoModel[]) => todos
)
