import { useState } from "react";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<p>
				Hello World! {count}{" "}
				<button onClick={() => setCount(count + 1)}>Click Me!</button>
			</p>
		</div>
	);
}

export default App;
