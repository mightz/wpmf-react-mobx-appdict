import React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from '../context/store';
import DictionaryItem from './DictionaryItem';

const Dictionary = observer(props => {
	const { dictionary } = useStore();

	if (dictionary.items.length == 0) {
		return <div>Dictionary is empty</div>;
	}
	
	return (
		<div>
			{dictionary.items.map(item => (
				<DictionaryItem
					key={item.id}
					name={item.name}
					description={item.description}
					onDelete={() => dictionary.deleteItem(item.id)}
				/>
			))}
		</div>
	);
});

export default Dictionary;