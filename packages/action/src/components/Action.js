import React, { useEffect, useState } from "react";
import { StoreProvider } from 'dictapp/StoreContext';
import defaultStore, { expandStore } from '../store';
import ActionAdd from './ActionAdd';
import ActionClear from './ActionClear';
import Stats from './Stats'

const Action = props => {
	const [ store, setStore ] = useState(null);
	useEffect(() => {
		setStore(props.store ? expandStore(props.store) : defaultStore);
	}, []);
	if (!store)
		return null;
	return (
		<StoreProvider store={store}>
			<div style={{ border: '1px solid #000', padding: '1rem' }}>
				<h3 style={{ marginTop: 0}}>Actions</h3>
				<ActionAdd />
				<ActionClear />
				<Stats />
			</div>
		</StoreProvider>
	);
}

export default Action;