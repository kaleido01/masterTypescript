import React from "react";
import ReactDOM from "react-dom";

interface Props {
	color: string;
}

// interface State {
// 	counter: number;
// }

// const FuncApp = (props: Props): JSX.Element => {
// 	return <div>{props.color}</div>;
// };

class App extends React.Component<Props> {
	state = { counter: 0 };

	// constructor(props: Props, state: State) {
	// 	super(props);
	// 	this.state = {
	// 		counter: 0
	// 	};
	// }

	onIncrement = (): void => {
		this.setState({ counter: this.state.counter + 1 });
	};
	onDecrement = (): void => {
		this.setState({ counter: this.state.counter - 1 });
	};

	render() {
		return (
			<div>
				<button onClick={this.onIncrement}>Increment</button>
				<button>Decrement</button>
				{this.state.counter}
			</div>
		);
	}
}

ReactDOM.render(<App color="red" />, document.getElementById("root"));
