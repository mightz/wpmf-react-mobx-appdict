import defaultStore from 'dictapp/store';
import ActionStore from '../store/action';

export const expandStore = store => {
	store.action = new ActionStore(store);
	return store;
}

export default expandStore(defaultStore);