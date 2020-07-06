import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import { HighlightWodDirective } from './directives/highlight-wod.directive';
import { FilterSearchPipe } from './pipes/filter-search/filter-search.pipe';
import { EllipsisPipe } from './pipes/ellipsis/ellipsis.pipe';
import { AlertComponent } from './alert/alert.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { BreadCrumbsComponent } from './nav/bread-crumbs/bread-crumbs/bread-crumbs.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { TemplatesComponent } from './templates/templates.component';
import { StepperComponent } from './shared-components/steppeer/stepper/stepper.component';
import { ModalSimpleComponent } from './shared-components/modal-simple/modal-simple/modal-simple.component';
import { SuggestiveItemsComponent } from './shared-components/suggestive-items/suggestive-items/suggestive-items.component';
import { LineItemComponent } from './shared-components/line-item/line-item/line-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ReadComponent,
    CreateComponent,
    HighlightWodDirective,
    FilterSearchPipe,
    EllipsisPipe,
    AlertComponent,
    ShoppingCartComponent,
    OrderSummaryComponent,
    BreadCrumbsComponent,
    OrderHistoryComponent,
    TemplatesComponent,
    StepperComponent,
    ModalSimpleComponent,
    SuggestiveItemsComponent,
    LineItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
