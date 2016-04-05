import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from 'angular2/core';
import {ItemsService} from '../items';
import {Item, AppStore} from '../interface'
@Component({
    selector: 'items-list',
    template: `
  <div *ngFor="#item of items" (click)="selected.emit(item)"
    class="item-card mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title">
      <h2 class="mdl-card__title-text">{{item.name}}</h2>
    </div>
    <div class="mdl-card__supporting-text">
      {{item.description}}
    </div>
    <div class="mdl-card__menu">
      <button (click)="deleted.emit(item); $event.stopPropagation();"
        class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
        <i class="material-icons">close</i>
      </button>
    </div>
  </div>
  `
})
export  class ItemList {
    @Input() items: Item[];
    @Output() selected = new EventEmitter();
    @Output() deleted = new EventEmitter();
}