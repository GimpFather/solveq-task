import { useState } from "react";

function App() {
	const [lastSeen, setLastSeen] = useState<number>(0);
	const [startDate, setStartDate] = useState<number>(0);
	const [timestampDiff, setTimestampDiff] = useState("");

	const numberInputHandler = (event: React.FormEvent<HTMLInputElement>) => {
		setLastSeen(event.currentTarget.valueAsNumber);
	};

	const dateInputHandler = (event: React.FormEvent<HTMLInputElement>) => {
		let inputDate: Date = new Date(event.currentTarget.value);
		setStartDate(Math.floor(+new Date(inputDate) / 1000));
	};

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();

		const timestampDiff = Math.abs(lastSeen - startDate);
		console.log(timestampDiff);

		if (timestampDiff < 60) {
			setTimestampDiff("0 ... 60 seconds ago");
		} else {
			setTimestampDiff(timestampDiff / 60 + "minutes ago");
		}
	};

	return (
		<div className="wrapper" style={{ textAlign: "center" }}>
			<h3>Hello! Type there some UNIX data!</h3>
			<h3>
				<a href="https://www.unixtimestamp.com/">Grab some UNIX data!</a>
			</h3>
			<br></br>
			<form onSubmit={submitHandler}>
				<label>Date in UNIXTimestamp</label>
				<br></br>
				<input onChange={numberInputHandler} name="time" type="number" />
				<br></br>
				<br></br>
				<label>Starting date</label>
				<br></br>
				<input onChange={dateInputHandler} name="date" type="datetime-local" />
				<button type="submit">Calculate</button>
			</form>
			<div>
				<h3>Starting timestamp: {startDate}</h3>
				<h3>Your timestamp: {lastSeen}</h3>
				<h3>{timestampDiff}</h3>
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
