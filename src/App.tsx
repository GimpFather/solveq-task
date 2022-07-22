import { useState, useEffect } from "react";
import DifferenceComponent from "./components/DifferenceComponent";

function App() {
	const [lastSeen, setLastSeen] = useState<number>(0);

	const numberInputHandler = (event: React.FormEvent<HTMLInputElement>) => {
		setLastSeen(Math.floor(+new Date(event.currentTarget.value) / 1000));
	};

	return (
		<div className="wrapper" style={{ textAlign: "center" }}>
			<h3>Hello! Type there some UNIX data!</h3>
			<h3>
				<a href="https://www.unixtimestamp.com/">Grab some UNIX data!</a>
			</h3>
			<div>
				<form>
					<div>
						<label htmlFor="date-timestamp">Date in UNIXTimestamp</label>
						<input
							id="date-timestamp"
							onChange={numberInputHandler}
							name="date"
							type="datetime-local"
						/>
					</div>
				</form>
			</div>
			<div>
				<h3>Your timestamp: {lastSeen}</h3>
				<DifferenceComponent userTimestamp={lastSeen}></DifferenceComponent>
			</div>
			<div>
				<p>
					<a href="https://github.com/GimpFather">by: Filip Gałczyk</a>
				</p>
			</div>
		</div>
	);
}

export default App;
