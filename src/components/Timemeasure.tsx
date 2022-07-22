import { useState } from "react";

const Timemeasure: React.FC<{
	currentTimestamp: number;
	userTimestamp: number;
}> = (props) => {
	// const [timestampDiff, setTimestampDiff] = useState<number>(0);
	// setTimestampDiff((props.currentTimestamp - props.userTimestamp) / 60 / 1000);
	const timestampDiff =
		(props.currentTimestamp - props.userTimestamp) / 60 / 1000;

	return (
		<div>
			<p>The diff: {timestampDiff}</p>
		</div>
	);
};

export default Timemeasure;
