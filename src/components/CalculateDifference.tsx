import { useState, useEffect } from "react";

interface ICalculateDifference {
	userTimestamp: number;
}

const CalculateDifference = ({ userTimestamp }: ICalculateDifference) => {
	const [currentTime, setCurrentTime] = useState(
		Math.floor(+new Date() / 1000)
	);

	const [timestampDiff, setTimestampDiff] = useState(
		Math.abs(userTimestamp - currentTime)
	);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentTime((prevState) => prevState + 1);
		}, 1000);

		setTimestampDiff(Math.abs(userTimestamp - currentTime));

		return () => clearInterval(interval);
	}, [currentTime, userTimestamp]);

	const handleResult = () => {
		if (Number.isNaN(userTimestamp) || Number.isNaN(timestampDiff)) {
			return (
				<div className="difference-site__answear--wrong-date">
					<p>You need to give me correct date!</p>
				</div>
			);
		} else if (userTimestamp === 0) {
			return (
				<div className="difference-site__answear--starting">
					<p>Type some date into input field to see difference!</p>
				</div>
			);
		} else if (Math.round(timestampDiff) < 60) {
			return (
				<div className="difference-site__answear">
					<p>Your date as unix timestamp: {userTimestamp}</p>
					<p>0 ... 60 seconds ago</p>
				</div>
			);
		} else {
			return (
				<div className="difference-site__answear">
					<p>Your date as unix timestamp: {userTimestamp}</p>
					<p>{Math.round(timestampDiff / 60)} minutes ago</p>
				</div>
			);
		}
	};

	return handleResult();
};

export default CalculateDifference;
