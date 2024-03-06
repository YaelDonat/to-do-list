import { ActionReducer, MetaReducer, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { TodoModel, TodoState, initialState } from "../interfaces/todo.interface";
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
    initialState,
    on(todoActions.addTodoAction, (state, newTodo) => ({
        ...state,
        todos: [...state.todos, newTodo],
        filteredTodos: [...state.todos, newTodo] // Add new todo to filteredTodos
    })),
    on(todoActions.updateTodoAction, (state, updatedTodo) => ({
        ...state,
        todos: state.todos.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo),
        filteredTodos: state.filteredTodos.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo) // Update if needed filteredTodos
    })),
    on(todoActions.deleteTodoAction, (state, todo) => ({
        ...state,
        todos: state.todos.filter(t => t.id !== todo.id),
        filteredTodos: state.filteredTodos.filter(t => t.id !== todo.id) // Delete filtered todo if the todo is delete
    })),
    on(todoActions.filterTodos, (state, { state: filterState }) => ({
        ...state,
        filteredTodos: filterState === 'All' ? state.todos : state.todos.filter(todo => todo.state === filterState)
    }))

);


export const todoSelector = createSelector(
    createFeatureSelector<TodoState>('todos'),
    (state: TodoState) => state.todos
);

export const selectTodoState = createFeatureSelector<TodoState>('todos');


export const selectTodos = createSelector(
    selectTodoState,
    (state: TodoState) => state.todos
);

export const selectFilteredTodos = createSelector(
    selectTodoState,
    (state: TodoState) => state.filteredTodos
);