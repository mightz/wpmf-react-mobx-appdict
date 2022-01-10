import React, { useEffect, useState } from "react";
import RemoteModule from 'dictapp/components/RemoteModule';
import { useStore } from 'dictapp/StoreContext';

const Stats = props => {

	const store = useStore();
	const [statModule, setStatModule] = useState(null);

	useEffect(() => {
		//"Fetching" dynamic module info
		setTimeout(() => {
			setStatModule({
				url: "/stat/remoteEntry.js",
				scope: "dictappStat",
				module: "./Stat",
			})
		}, 500);
	}, [])

	if (!statModule)
		return null;

	return (
		<RemoteModule module={statModule} store={store} />
	);
}

export default Stats;