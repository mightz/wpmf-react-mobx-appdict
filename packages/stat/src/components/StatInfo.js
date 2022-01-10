import React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from 'dictapp/StoreContext';

const StatInfo = observer(() => {

	const store = useStore();

	return (
		<>
			<div>
				<b>Items count: </b>
				{store.stat.itemsCount}
			</div>
			<div>
				<b>Named items count: </b>
				{store.stat.itemsNamedCount}
			</div>
			<div>
				<b>Last action: </b>
				{store.action.lastAction}
			</div>
		</>
	);
});

export default StatInfo;