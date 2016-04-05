
/**
 * Created by amita on 4/4/2016.
 */
import {constObj} from '../constants/items.ts';
const {ADD_ITEMS,CREATE_ITEM,UPDATE_ITEM,DELETE_ITEM,SELECT_ITEM}=constObj;

export const items = (state: any = [], {type, payload}) => {
    let index: number;
    switch (type) {
        case ADD_ITEMS:
            return payload;
        case CREATE_ITEM:
            return [...state, payload];
        case UPDATE_ITEM:
            return state.map(item => {
                    return item.id === payload.id ? Object.assign({}, item, payload) : item;
    });
case DELETE_ITEM:
    return state.filter(item => {
            return item.id !== payload.id;
});
default:
return state;
}
}

export const selectedItem = (state: any = null, {type, payload}) => {
    switch (type) {
        case SELECT_ITEM:
            return payload;
        default:
            return state;
    }
};


