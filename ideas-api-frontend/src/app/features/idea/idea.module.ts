import { UIModule } from '@app/ui.module';
import { EffectsModule } from '@ngrx/effects';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';

import { IdeasComponent } from './ideas/ideas.component';
import { IdeaEffects } from './state/idea.effects';
import { ideaReducer } from './state/idea.reducer';
import { IdeaComponent } from './ideas/idea/idea.component';
import { SelectedIdeaComponent } from './selected-idea/selected-idea.component';
import { IdeaResolver } from './idea.resolver';
import { UUIDGuard } from '@app/services/uuid.guard';

const routes: Routes = [
  { path: '', component: IdeasComponent },
  { path: ':id', component: SelectedIdeaComponent, canActivate: [UUIDGuard], resolve: { data: IdeaResolver } }
];

@NgModule({
  imports: [
    CommonModule,
    UIModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('ideas', ideaReducer),
    EffectsModule.forFeature([IdeaEffects])
  ],
  declarations: [IdeasComponent, IdeaComponent, SelectedIdeaComponent],
  providers: [IdeaResolver]
})
export class IdeaModule {}