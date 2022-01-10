import React, { useState } from "react";
import { useStore } from 'dictapp/StoreContext';

const ActionAdd = () => {

	const store = useStore();
	
	const [itemName, setItemName] = useState('');
	const [itemDesc, setItemDesc] = useState('');
	const addDictItem = () => {
		store.dictionary.addItem({
			id: Date.now(),
			name: itemName,
			description: itemDesc	
		});
		store.action.setLastAction('Add item');
	}
	return (
		<>
			<input type="text" value={itemName} onChange={e => setItemName(e.target.value)} style={{ width: '100%', marginBottom: '.5rem' }} placeholder="Name"/>
			<textarea value={itemDesc} onChange={e => setItemDesc(e.target.value)} style={{ width: '100%', marginBottom: '.5rem' }} placeholder="Description"/>
			<button type="button" onClick={addDictItem}>
				Add item
			</button>
		</>
	);
}

export default ActionAdd;