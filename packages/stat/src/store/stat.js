import { makeAutoObservable } from "mobx";

class StatStore {

	constructor(rootStore) {
        makeAutoObservable(this);
        this.rootStore = rootStore;
    }

    get itemsCount() {
        return this.rootStore.dictionary.items.length;
    }

    get itemsNamedCount() {
        return this.rootStore.dictionary.items.filter(v => !!v.name).length;
    }
}

export default StatStore;