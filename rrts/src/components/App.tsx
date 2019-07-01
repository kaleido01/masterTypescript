import React, { Component } from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos, deleteTodo } from "../actions";
import { StoreState } from "./../reducers/index";

interface Props {
	todos: Todo[];
	fetchTodos: Function;
	deleteTodo: typeof deleteTodo;
}

interface State {
	fetching: boolean;
}
export class _App extends Component<Props, State> {
	state = { fetching: false };

	onButtonClick = (): void => {
		this.props.fetchTodos();
	};

	onTodoClick = (id: number): void => {
		this.props.deleteTodo(id);
	};
	renderList(): JSX.Element[] {
		return this.props.todos.map((todo: Todo) => {
			return (
				<div key={todo.id} onClick={() => this.onTodoClick(todo.id)}>
					{todo.title}
				</div>
			);
		});
	}

	render() {
		return (
			<div>
				<button onClick={this.onButtonClick}>fetch</button>
				{this.state.fetching ? "Loading...." : null}
				{this.renderList()}
			</div>
		);
	}
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
	return { todos };
};

export const App = connect(
	mapStateToProps,
	{ fetchTodos, deleteTodo }
)(_App);
