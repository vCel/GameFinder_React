import { FetchCounter } from "./hooks";

const Counter = () => {
	const counter = FetchCounter();

	return (
		<div className="counter">
			<p>Page Visits: {counter}</p>
		</div>
	);
};

export default Counter;
