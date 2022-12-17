import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { StoreModule } from '@ngrx/store';
import { sharedPrdouctStoreName } from './store/shared-product/shared-product.store';
import { ProductResolver } from './resolvers/product.resolver';
import { productReducer } from './store/shared-product/reducer/product.reducer';
import { productListStoreName } from './store/product-list/product-list.store';
import { productListReducer } from './store/product-list/reducers/product-list.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffect } from './store/product-list/effects/Product-list.effect';


@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    StoreModule.forFeature(sharedPrdouctStoreName,productReducer),
    StoreModule.forFeature(productListStoreName,productListReducer),
    EffectsModule.forFeature([ProductEffect])
  ]
})
export class ProductModule { }
