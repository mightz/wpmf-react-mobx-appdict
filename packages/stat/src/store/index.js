import defaultStore from 'dictappAction/store';
import StatStore from '../store/stat';

export const expandStore = store => {
	store.stat = new StatStore(store);
	return store;
}

export default expandStore(defaultStore);