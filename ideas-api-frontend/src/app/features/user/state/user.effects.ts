import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store, Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { mergeMap, catchError, map, tap, } from "rxjs/operators";

import { ApiService } from "@app/services/api.service";
import { AppState } from ".";
import { LoadUsers, UserActions, LoadUsersSuccess } from "./user.action";
import { AddError, RemoveError } from "@app/store/actions/error.action";

@Injectable()
export class UserEffects {

    constructor(
        private action$: Actions, 
        private store: Store<AppState>, 
        private api: ApiService
    ) { }

    @Effect()
    loadUsers$: Observable<Action> = this.action$.pipe(
        ofType<LoadUsers>(UserActions.LOAD_USERS),
        tap(() => this.store.dispatch(new RemoveError())),
        mergeMap(actions =>
            this.api.getUsers().pipe(
            map(users => new LoadUsersSuccess(users)),
            catchError(err => of(new AddError(err.error)))
            )
        )
    );
}