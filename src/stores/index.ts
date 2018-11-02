import homeStore, { HomeStore } from './HomeStore';

export class Stores {
    public homeStore: HomeStore;
    constructor(){
        this.homeStore = homeStore;
    }
}

const stores = {
    homeStore
}

export default stores

export {
    homeStore
}