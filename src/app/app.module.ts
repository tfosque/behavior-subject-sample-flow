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
import { FilterInputComponent } from './shared-components/filter-input/filter-input/filter-input.component';
import { ModalComponent } from './shared-components/modal/modal/modal.component';
import { SpinnerComponent } from './shared-components/spinner/spinner/spinner.component';
import { ChildToParentComponent } from './shared-components/child-to-parent/child-to-parent/child-to-parent.component';
import { ParentToChildComponent } from './shared-components/parent-to-child/parent-to-child/parent-to-child.component';
import { SidebarComponent } from './nav/sidebar/sidebar.component';
import { PaginationComponent } from './shared-components/pagination/pagination.component';

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
    LineItemComponent,
    FilterInputComponent,
    ModalComponent,
    SpinnerComponent,
    ChildToParentComponent,
    ParentToChildComponent,
    SidebarComponent,
    PaginationComponent
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
