import React, { useState, useEffect } from "react";
import { StoreProvider } from 'dictapp/StoreContext';
import defaultStore, { expandStore } from '../store';
import StatInfo from './StatInfo';

const Stat = props => {
	const [ store, setStore ] = useState(null);
	useEffect(() => {
		setStore(props.store ? expandStore(props.store) : defaultStore);
	}, []);
	if (!store)
		return null;
	return (
		<StoreProvider store={store}>
			<div style={{ padding: '1rem', background: '#eee', marginTop: '.5rem' }}>
				<StatInfo />
			</div>
		</StoreProvider>
	);
}

export default Stat;