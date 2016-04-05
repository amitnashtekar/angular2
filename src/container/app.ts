import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from 'angular2/core';
import {ItemsService} from '../items';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {ItemList,ItemDetail} from '../component'
import {AppStore,Item} from '../interface'

//-------------------------------------------------------------------
// MAIN COMPONENT
//-------------------------------------------------------------------
@Component({
    selector: 'my-app',
    providers: [],
    template: `
  <div class="mdl-cell mdl-cell--6-col">
    <items-list [items]="items | async"
      (selected)="selectItem($event)" (deleted)="deleteItem($event)">
    </items-list>
  </div>
  <div class="mdl-cell mdl-cell--6-col">
    <item-detail
      (saved)="saveItem($event)" (cancelled)="resetItem($event)"
      [item]="selectedItem | async">Select an Item</item-detail>
  </div>
  `,
    directives: [ItemList, ItemDetail],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
    items: Observable<Array<Item>>;
    selectedItem: Observable<Item>;

    constructor(private itemsService: ItemsService, private store: Store<AppStore>) {
        this.items = itemsService.items;
        this.selectedItem = store.select('selectedItem');
        this.selectedItem.subscribe(v => console.log(v));

        itemsService.loadItems();
    }

    resetItem() {
        let emptyItem: Item = {id: null, name: '', description: ''};
        this.store.dispatch({type: 'SELECT_ITEM', payload: emptyItem});
    }

    selectItem(item: Item) {
        this.store.dispatch({type: 'SELECT_ITEM', payload: item});
    }

    saveItem(item: Item) {
        this.itemsService.saveItem(item);

        // Generally, we would want to wait for the result of `itemsService.saveItem`
        // before resetting the current item.
        this.resetItem();
    }

    deleteItem(item: Item) {
        this.itemsService.deleteItem(item);

        // Generally, we would want to wait for the result of `itemsService.deleteItem`
        // before resetting the current item.
        this.resetItem();
    }
}
