import React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from 'dictapp/StoreContext';

const ActionClear = observer(() => {

	const store = useStore();

	if (store.dictionary.items.length == 0) {
		return null;
	}

	const clearDictionary = () => {
		store.dictionary.clear();
		store.action.setLastAction('Clear');
	}

	return (
		<>
			<hr/>
			<button type="button" onClick={clearDictionary}>
				Clear dictionary
			</button>
		</>
	);
});

export default ActionClear;