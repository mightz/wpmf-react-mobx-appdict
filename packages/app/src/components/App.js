import React, { useState, useEffect } from "react";
import { StoreProvider } from '../context/store';
import store from '../store';
import Dictionary from './Dictionary';
import RemoteModule from './RemoteModule';

const App = () => {

	const [actionModule, setActionModule] = useState(null);

	useEffect(() => {
		//"Fetching" dynamic module info
		setTimeout(() => {
			setActionModule({
				url: "/action/remoteEntry.js",
				scope: "dictappAction",
				module: "./Action",
			})
		}, 1500);
	}, [])

	return (
		<StoreProvider store={store}>
			<div style={{ display: 'flex' }}>
				<div style={{ flex: '0 0 auto', width: '66.666%', margin: '0 1rem 0 0'}}>
					<Dictionary />
				</div>
				<div style={{ flex: '1 0 0%'}}>
					{actionModule && <RemoteModule module={actionModule} store={store} />}
				</div>
			</div>
		</StoreProvider>
	);
}

export default App;