import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { AppStoreModule } from '@app/store/app-store.module';
import { AuthService } from '@app/services/auth.service';
import { ApiService } from '@app/services/api.service';
import { AuthComponent } from './components/auth/auth.component';
import { UIModule } from './ui.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UUIDGuard } from './services/uuid.guard';


@NgModule({
  declarations: [AppComponent, AuthComponent, NavbarComponent],
  imports: [
    AppRoutingModule,
    AppStoreModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UIModule
  ],
  providers: [AuthService, ApiService, UUIDGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}