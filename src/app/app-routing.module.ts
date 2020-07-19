import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './modules/shared/shared/shared.module';

/* Supportive Components */

import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { SidebarComponent } from './shared-components/sidebar/sidebar.component';

import { PaginationComponent } from './shared-components/pagination/pagination.component';
import { ParentToChildComponent } from './shared-components/parent-to-child/parent-to-child/parent-to-child.component';
import { ChildToParentComponent } from './shared-components/child-to-parent/child-to-parent/child-to-parent.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { StepperComponent } from './shared-components/steppeer/stepper/stepper.component';
import { ViewContainerComponent } from './shared-components/sidebar/view-container/view-container.component';

/* Routes Components */
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { TemplatesComponent } from './templates/templates.component';

/* Services */
import { ShoppingCartService } from './services/shopping-cart.service';
import { CartPreviewComponent } from './shopping-cart/cart-preview/cart-preview.component';
import { CartLineItemComponent } from './shopping-cart/cart-line-item/cart-line-item.component';

/* Routes */
const routes: Routes = [
  { path: 'splash', component: SplashScreenComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'templates', component: TemplatesComponent }
];

@NgModule({
  declarations: [
    TemplatesComponent,
    ViewContainerComponent,
    ShoppingCartComponent,
    OrderSummaryComponent,
    OrderSummaryComponent,
    StepperComponent,
    CartLineItemComponent,
    ChildToParentComponent,
    ParentToChildComponent,
    PaginationComponent,
    SplashScreenComponent,
    ReadComponent,
    CreateComponent,
    CartPreviewComponent,
    SidebarComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    SharedModule,
  ],
  providers: [ShoppingCartService],
  exports: [
    RouterModule,
    ShoppingCartComponent,
    CartLineItemComponent,
    CartPreviewComponent
  ],
})
export class AppRoutingModule { }
