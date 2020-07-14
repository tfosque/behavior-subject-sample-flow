import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './modules/shared/shared/shared.module';
import { NgxsModule } from '@ngxs/store';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BreadCrumbsComponent } from './nav/bread-crumbs/bread-crumbs/bread-crumbs.component';
import { LocalDbComponent } from './_app/local-db/local-db.component';

/* Services */
import { LocalStorageService } from './services/local-storage/local-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BreadCrumbsComponent,
    LocalDbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    NgxsModule.forRoot([])
  ],
  providers: [LocalStorageService],
  exports: [
    BreadCrumbsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
