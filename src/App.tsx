import { useState } from "react";
import Difference from "./components/Difference";
import "./App.css";

function App() {
	const [lastSeen, setLastSeen] = useState<number>(0);

	const numberInputHandler = (event: React.FormEvent<HTMLInputElement>) => {
		setLastSeen(Math.floor(+new Date(event.currentTarget.value) / 1000));
	};

	return (
		<div className="difference-site">
			<div className="difference-site__header">
				<p className="difference-site__header-desc">
					Calculate difference between two dates in:
				</p>
				<p className="difference-site__header-title">UNIXTIMESTAMP</p>
			</div>
			<div className="difference-site__hero">
				<form className="difference-site__form">
					<div className="difference-site__form-group">
						<label
							className="difference-site__form-label"
							htmlFor="date-timestamp"
						>
							Pick your date
						</label>
						<input
							className="difference-site__form-input"
							id="date-timestamp"
							onChange={numberInputHandler}
							name="date"
							type="datetime-local"
						/>
					</div>
				</form>
			</div>
			<div className="difference-site__answear">
				<p className="difference-site__answear-text">
					Your date as unix timestamp: {lastSeen}
				</p>
				<Difference userTimestamp={lastSeen}></Difference>
			</div>
			<div className="difference-site__footer">
				<p className="difference-site__footer-text">
					<a href="https://github.com/GimpFather">by: Filip Gałczyk</a>
				</p>
			</div>
		</div>
	);
}

export default App;
