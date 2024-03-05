export interface TodoModel {
    id: string,
    title: string,
    state: State
}

export enum State {
    NOT_STARTED = "Not started",
    IN_PROGRESS = "In progress",
    FINISHED = "Finished"
}

export let initialTodos: TodoModel[] = [
    {
        id: '0',
        title: "Default task",
        state: State.NOT_STARTED
    },
    {
        id: '1',
        title: "Default task",
        state: State.NOT_STARTED
    },
    {
        id: '2',
        title: "Default task",
        state: State.NOT_STARTED
    },
    {
        id: '3',
        title: "Default task",
        state: State.NOT_STARTED
    },
    {
        id: '4',
        title: "Default task",
        state: State.NOT_STARTED
    },
    {
        id: '4',
        title: "Default task",
        state: State.NOT_STARTED
    },
    {
        id: '5',
        title: "Default task",
        state: State.NOT_STARTED
    },
    {
        id: '6',
        title: "Default task",
        state: State.NOT_STARTED
    },
    {
        id: '7',
        title: "Default task",
        state: State.NOT_STARTED
    },
    {
        id: '8',
        title: "Default task",
        state: State.NOT_STARTED
    },
    {
        id: '9',
        title: "Default task",
        state: State.NOT_STARTED
    },
    {
        id: '10',
        title: "Default task",
        state: State.NOT_STARTED
    },


]