import { useState, useEffect } from "react";

const DifferenceComponent: React.FC<{ userTimestamp: number }> = (props) => {
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
	}, [currentTime]);

	if (props.userTimestamp === 0) {
		return <p>Type some date into input field to see difference!</p>;
	} else if (Math.round(timestampDiff) < 60) {
		return <p>0 ... 60 seconds ago</p>;
	} else {
		return <p>{Math.round(timestampDiff / 60)} minutes ago</p>;
	}
};

export default DifferenceComponent;
