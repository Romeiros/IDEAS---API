import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MessageService } from 'primeng/components/common/messageservice';

import { AppState } from './store/app-store.module';
import { AddError } from './store/actions/error.action';
import { LoginUser, SetInitialUser } from './store/actions/auth.action';
import { AuthDTO } from './models/auth';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-ideas';

  constructor(
    private store: Store<AppState>, 
    private messageService: MessageService,
    private authService: AuthService
    ) {}

  ngOnInit() {
    if (this.authService.token) {
      this.store.dispatch(new SetInitialUser());
    }
    this.store
      .select(state => state.error)
      .subscribe(val => this.showError(val.error));
  }

  showError(err) {
    if (err) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error message',
        detail: err.message || 'Internal server error'
      });
    }
  }
}
