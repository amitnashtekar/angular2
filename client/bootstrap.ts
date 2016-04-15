//main entry point
import {bootstrap} from 'angular2/platform/browser';
import {Main} from './src/container';
import {provideStore} from '@ngrx/store';
import {ItemsService} from './src/items';
import {items, selectedItem} from './src/reducer';
import {HTTP_PROVIDERS} from 'angular2/http';
import {provide} from 'angular2/core';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {Devtools, instrumentStore} from '@ngrx/devtools';
import {routerReducer, routerMiddleware} from 'ngrx-store-router';


bootstrap(Main, [
  ROUTER_PROVIDERS,
  ItemsService,
  HTTP_PROVIDERS,
  provideStore({router: routerReducer,items:items, selectedItem:selectedItem}),
  instrumentStore(),
  routerMiddleware
])
.catch(err => console.error(err));

