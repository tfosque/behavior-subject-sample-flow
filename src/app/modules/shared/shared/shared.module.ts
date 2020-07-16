import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AlertComponent } from 'src/app/alert/alert.component';
import { NotificationComponent } from 'src/app/forms/notification/notification.component';
import { ImgProductThumbWithSelectionComponent } from 'src/app/shared-components/img-product-thumb-with-selection/img-product-thumb-with-selection.component';
import { SpinnerComponent } from 'src/app/shared-components/spinner/spinner/spinner.component';
import { SuggestiveItemsComponent } from 'src/app/shared-components/suggestive-items/suggestive-items/suggestive-items.component';
import { FilterInputComponent } from 'src/app/shared-components/filter-input/filter-input/filter-input.component';
import { ModalComponent } from 'src/app/shared-components/modal/modal/modal.component';


/* Services */
// import { AlertService } from 'src/app/services/alert.service';
// import { SearchService } from 'src/app/services/search.service';
import { FilterSearchPipe } from 'src/app/pipes/filter-search/filter-search.pipe';
import { ItemCountComponent } from 'src/app/shared-components/item-count/item-count.component';
import { ListOfSelectedProductsComponent } from 'src/app/cart-gallery/list-of-selected-products/list-of-selected-products.component';
import { CartGalleryComponent } from 'src/app/cart-gallery/cart-gallery.component';
import { AlertDialogComponent } from 'src/app/alert/alert-dialog/alert-dialog.component';
import { CarouselComponent } from 'src/app/shared-components/carousel/carousel.component';

@NgModule({
  declarations: [
    AlertComponent,
    NotificationComponent,
    ImgProductThumbWithSelectionComponent,
    SpinnerComponent,
    FilterInputComponent,
    FilterSearchPipe,
    SuggestiveItemsComponent,
    ModalComponent,
    ItemCountComponent,
    ListOfSelectedProductsComponent,
    CartGalleryComponent,
    AlertDialogComponent,
    CarouselComponent
  ],
  providers: [],
  imports: [
    CommonModule,
    FormsModule,
   // AlertService,
    // SearchService
  ],
  exports: [
    FormsModule,
    CommonModule,
    AlertComponent,
    NotificationComponent,
    ImgProductThumbWithSelectionComponent,
    SpinnerComponent,
    FilterInputComponent,
    FilterSearchPipe,
    SuggestiveItemsComponent,
    ModalComponent,
    ItemCountComponent,
    ListOfSelectedProductsComponent,
    CartGalleryComponent,
    AlertDialogComponent,
    CarouselComponent
  ]
})
export class SharedModule {}
