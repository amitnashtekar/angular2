import {Item} from './item.ts';


export interface AppStore {
    items: Item[];
    selectedItem: Item;
};