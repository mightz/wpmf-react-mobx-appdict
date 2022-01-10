import React from "react";

const DictionaryItem = props => {
	const { name, description, onDelete } = props;
	return (
		<article style={{ padding: '1rem', border: '1px solid #333', marginBottom: '.5rem' }}>
			<div style={{display: 'flex', justifyContent: 'space-between' }}>
				<h3 style={{ marginTop: 0 }}>{name}</h3>
				<div>
					<button type="button" title="Delete" onClick={onDelete}>x</button>
				</div>
			</div>
			<div>{description}</div>
		</article>
	);
}

export default DictionaryItem;