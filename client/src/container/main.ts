import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router, Route, RouteConfig} from 'angular2/router';
import {Devtools} from '@ngrx/devtools';
import {App} from './app.ts';



@Component({
    selector: 'my-app',
    template: `
    <a [routerLink]="['App']">App</a> |


    <hr>
    <router-outlet></router-outlet>
    <ngrx-devtools></ngrx-devtools>
  `,
    directives: [ROUTER_DIRECTIVES, Devtools]
})

@RouteConfig([
    new Route({path: '/App', component: App, name: 'App'}),
  

])
export class Main {
    constructor(public router: Router) {

    }
}