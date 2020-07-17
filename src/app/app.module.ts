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
import { CollapseComponent } from './shared-components/collapse/collapse.component';
import { TooltipComponent } from './shared-components/tooltip/tooltip.component';
import { ScrollsbyComponent } from './shared-components/scrollsby/scrollsby.component';
import { CardComponent } from './shared-components/card/card.component';
import { PluralPipe } from './pipes/plural/plural.pipe';
import { AdComponent } from './marketing/ad/ad.component';
import { FlyoutMenusComponent } from './nav/flyout-menus/flyout-menus.component';
import { ProductComponent } from './product/product.component';
import { DescriptionComponent } from './product/description/description.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BreadCrumbsComponent,
    LocalDbComponent,
    CollapseComponent,
    TooltipComponent,
    ScrollsbyComponent,
    CardComponent,
    PluralPipe,
    AdComponent,
    FlyoutMenusComponent,
    ProductComponent,
    DescriptionComponent
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
    BreadCrumbsComponent,
    PluralPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
