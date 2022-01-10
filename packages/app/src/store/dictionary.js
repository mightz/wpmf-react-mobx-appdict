import { makeAutoObservable } from "mobx"

class DictionaryStore {
    items = [
		{
			id: 1,
			name: 'React',
			description: 'A free and open-source front-end JavaScript library for building user interfaces based on UI components'
		},
		{
			id: 2,
			name: 'Webpack',
			description: 'An open-source JavaScript module bundler. It is made primarily for JavaScript, but it can transform front-end assets such as HTML, CSS, and images if the corresponding loaders are included.'
		}
	];

    constructor(rootStore) {
		makeAutoObservable(this);
		this.rootStore = rootStore;
    }

    addItem(item) {
		this.items.push(item);
    }

    deleteItem(id) {
        this.items = this.items.filter(item => item.id != id);
    }

	clear() {
		this.items = [];
	}
}

export default DictionaryStore;