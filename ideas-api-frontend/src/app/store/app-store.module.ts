import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { RouterReducerState, routerReducer, StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';

import { errorReducer, ErrorState } from './reducers/error.reducer';
import { AuthEffects } from './effects/auth.effect';
import { AuthState, authReducer } from './reducers/auth.reducer';
import { RouterStateUrl, CustomSerializer } from './reducers/router.reducer';


export interface AppState {
  error: ErrorState;
  auth: AuthState;
  router: RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<AppState> = {
  error: errorReducer,
  auth: authReducer,
  router: routerReducer
}

export const effects = [
  AuthEffects
]
//import { effects, reducers } from '@app/store';

CommonModule
@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forRoot(effects),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    StoreRouterConnectingModule
  ],
  providers: [
    {
      provide: RouterStateSerializer,
      useClass: CustomSerializer
    }
  ]
})
export class AppStoreModule {}