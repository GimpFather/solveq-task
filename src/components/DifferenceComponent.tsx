import { useState } from "react";

const DifferenceComponent: React.FC<{ userTimestamp: number }> = (props) => {
	const [timestampDiff, setTimestampDiff] = useState(0);

	const currentTime: number = Math.floor(+new Date() / 1000);

	setTimestampDiff(Math.abs(props.userTimestamp - currentTime));

	if (timestampDiff < 60) {
		return <p>0 ... 60 seconds ago</p>;
	} else {
		return <p>{timestampDiff} / 60 + "minutes ago"</p>;
	}
};

export default DifferenceComponent;
