// TODO interface
export interface TodoInterface {
    id: string;
    name: string;
    isComplete: boolean;
}

// TODO form interface
export interface TodoFormInterface {
    todos: TodoInterface[];
    handleTodoCreate: (todo: TodoInterface) => void; // Return type is void
}

// TODO list interface
export interface TodoListInterface {
    handleUpdateTodo: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
    handleRemoveTodo: (id: string) => void;
    handleCompleteTodo: (id: string) => void;
    todos: TodoInterface[];
}

// TODO item interface
export interface TodoItemInterface {
    handleUpdateTodo: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
    handleRemoveTodo: (id: string) => void;
    handleCompleteTodo: (id: string) => void;
    todo: TodoInterface;
}