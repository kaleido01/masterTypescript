import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

axios
	.get(url)
	.then(response => {
		const todo = response.data as Todo;

		const { title, id, completed } = todo;

		logTodo(id, title, completed);
	})
	.catch(err => {});

const logTodo = (id: number, title: string, completed: boolean) => {
	console.log(title, id, completed);
};
