import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { AppState } from '../state';
import { selectCurrentIdea } from '../state/idea.selector';
import { Idea } from '@app/models/idea';

@Component({
  selector: 'app-selected-idea',
  templateUrl: './selected-idea.component.html',
  styleUrls: ['./selected-idea.component.scss']
})
export class SelectedIdeaComponent implements OnInit, OnDestroy {
  private subscribtion$: Subscription;
  idea: Idea;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.subscribtion$ = this.store
      .select(selectCurrentIdea)
      .subscribe(val => this.idea = val);
  }

  ngOnDestroy() {
    this.subscribtion$.unsubscribe();
  }
}
