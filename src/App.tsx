import { useState, useEffect } from "react";
import Timemeasure from "./components/Timemeasure";

function App() {
	const [lastSeen, setLastSeen] = useState<number>(0);
	const [presentTimestamp, setPresentTimestamp] = useState<number>(
		Math.floor(+new Date() / 1000)
	);
	const [timestampDiff, setTimestampDiff] = useState("");

	const inputHandler = (event: React.FormEvent<HTMLInputElement>) => {
		let inputValue: number = event.currentTarget.valueAsNumber;
		setLastSeen(inputValue);
	};

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();
		console.log(lastSeen);
		console.log(presentTimestamp);

		const timestampDiff = Math.abs(lastSeen - presentTimestamp);
		console.log(timestampDiff);

		if (timestampDiff < 60) {
			console.log("0 ... 60 seconds ago");
		} else {
			setTimestampDiff(timestampDiff / 60 + "minutes ago");
		}
	};

	useEffect(() => {
		setInterval(() => {
			setPresentTimestamp(Math.floor(+new Date() / 1000));
		}, 1000);
	}, []);

	return (
		<div className="wrapper">
			<h3>Hello! Type there some UNIX data!</h3>
			<br></br>
			<form onSubmit={submitHandler}>
				<label>Date in unixtimestamp</label>
				<br></br>
				<input onChange={inputHandler} name="time" type="number" />
				<button type="submit">Calculate</button>
			</form>
			<div>
				<h3>Present timestamp: {presentTimestamp}</h3>
				<h3>Your timestamp: {lastSeen}</h3>
				<h3>{timestampDiff}</h3>
			</div>
		</div>
	);
}

export default App;
