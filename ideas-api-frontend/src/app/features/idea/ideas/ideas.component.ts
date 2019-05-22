import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Idea } from '@app/models/idea';
import { AppState, LoadIdeas } from '@app/features/idea/state';
import { Entity } from '@app/models/entity';
import { map } from 'rxjs/operators';

import { selectAllIdeas } from '../state/idea.selector';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.scss']
})
export class IdeasComponent implements OnInit {
  ideas: Observable<Idea[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new LoadIdeas());
    this.ideas = this.store
      .select(selectAllIdeas);
  }
}