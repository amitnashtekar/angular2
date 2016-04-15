import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from 'angular2/core';
import {Observable} from  'rxjs/Observable';
import {Store} from '@ngrx/store';
import {loginStore} from '../interface'

@Component({
    selector: 'login',
    providers: [],
    template: `
  <div >
            <div >
       I am login
</div>
</div>
  `,

    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Login{

}