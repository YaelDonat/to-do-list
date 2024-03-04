export interface TodoModel {
    id: number,
    title: string,
    state: State
}

export enum State {
    NOT_STARTED = "Not started",
    IN_PROGRESS = " In  progress",
    FINISHED = "Finished"
}

export let initialTodos: TodoModel[] = [{
    id: 0,
    title: "Default task",
    state: State.NOT_STARTED
}]