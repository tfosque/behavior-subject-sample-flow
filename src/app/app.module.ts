import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';

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
import { SuggestedSellingComponent } from './suggested-selling/suggested-selling.component';

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
    SuggestedSellingComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
