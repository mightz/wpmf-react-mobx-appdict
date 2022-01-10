import { configure as mobxConfigure } from 'mobx';
mobxConfigure({
    useProxies: "ifavailable"
});

import DictionaryStore from './dictionary'

class RootStore {

    constructor() {
        this.dictionary = new DictionaryStore(this)
    }

}

export default new RootStore();