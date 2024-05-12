interface Person {
    name: string;
    age: number;
}

const partialPerson: Partial<Person> = {
    name: "Alice"
};

interface Todo{
    title: string;
    desc: string;
    userName: string;
    completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
    title: "Clean room",
    completed: false
};


type TodoInfo = Omit<Todo, "desc">;

const todoInfo: TodoInfo = {
    title: "Pick up kids",
    userName: "Alice",
    completed: false
};