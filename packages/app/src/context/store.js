import React, { createContext, useContext } from "react";

const StoreContext = createContext();

export const StoreProvider = props => {
	const { store, children } = props;
	return (
	  	<StoreContext.Provider value={store}>
			{children}
		</StoreContext.Provider>
	);
};

export const useStore = () => useContext(StoreContext);

export default StoreContext;