import { makeAutoObservable } from "mobx"

class ActionStore {

	lastAction = '';

	constructor(rootStore) {
        makeAutoObservable(this);
		this.rootStore = rootStore;
    }

	setLastAction(act) {
		this.lastAction = act;
	}
}

export default ActionStore;