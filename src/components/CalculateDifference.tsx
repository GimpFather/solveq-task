import { useState, useEffect } from "react";

const CalculateDifference: React.FC<{ userTimestamp: number }> = (props) => {
	const [currentTime, setCurrentTime] = useState(
		Math.floor(+new Date() / 1000)
	);

	const [timestampDiff, setTimestampDiff] = useState(
		Math.abs(props.userTimestamp - currentTime)
	);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentTime((prevState) => prevState + 1);
			setTimestampDiff(Math.abs(props.userTimestamp - currentTime));
		}, 1000);

		return () => clearInterval(interval);
	}, [currentTime, props.userTimestamp]);

	if (Number.isNaN(props.userTimestamp) || Number.isNaN(timestampDiff)) {
		return <p>You need to give me correct date!</p>;
	} else if (props.userTimestamp === 0) {
		return <p>Type some date into input field to see difference!</p>;
	} else if (Math.round(timestampDiff) < 60) {
		return (
			<div>
				<p>Your date as unix timestamp: {props.userTimestamp}</p>
				<p>0 ... 60 seconds ago</p>
			</div>
		);
	} else {
		return (
			<div>
				<p>Your date as unix timestamp: {props.userTimestamp}</p>
				<p>{Math.round(timestampDiff / 60)} minutes ago</p>
			</div>
		);
	}
};

export default CalculateDifference;
