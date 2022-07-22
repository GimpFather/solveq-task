import { useState, useEffect } from "react";
import DifferenceComponent from "./components/DifferenceComponent";

function App() {
	const [lastSeen, setLastSeen] = useState<number>(0);
	const [startDate, setStartDate] = useState<number>(0);

	const numberInputHandler = (event: React.FormEvent<HTMLInputElement>) => {
		setLastSeen(event.currentTarget.valueAsNumber);
	};

	const dateInputHandler = (event: React.FormEvent<HTMLInputElement>) => {
		setStartDate(Math.floor(+new Date(event.currentTarget.value) / 1000));
	};

	// const submitHandler = (event: React.FormEvent) => {
	// 	event.preventDefault();

	// 	const timestampDiff = Math.abs(lastSeen - startDate);

	// 	if (timestampDiff < 60) {
	// 		setTimestampDiff("0 ... 60 seconds ago");
	// 	} else {
	// 		setTimestampDiff(timestampDiff / 60 + "minutes ago");
	// 	}
	// };

	return (
		<div className="wrapper" style={{ textAlign: "center" }}>
			<h3>Hello! Type there some UNIX data!</h3>
			<h3>
				<a href="https://www.unixtimestamp.com/">Grab some UNIX data!</a>
			</h3>
			<div>
				<form>
					<div>
						<label htmlFor="number-timestamp">Date in UNIXTimestamp</label>
						<input
							id="number-timestamp"
							onChange={numberInputHandler}
							name="time"
							type="number"
						/>
					</div>
					<div>
						<label htmlFor="date-timestamp">Starting date</label>
						<input
							id="date-timestamp"
							onChange={dateInputHandler}
							name="date"
							type="datetime-local"
						/>
					</div>
					<div>
						<button type="submit">Calculate</button>
					</div>
				</form>
			</div>
			<div>
				<h3>Starting timestamp: {startDate}</h3>
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
