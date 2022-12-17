import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product/product.component';
import { ProductResolver } from './services/product.resolver';
import { StoreModule } from '@ngrx/store';
import { productStoreName } from './store/product.store';
import { productReducer } from './store/reducers/product.reducer';


@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    StoreModule.forFeature(productStoreName,productReducer),
  ],
  providers:[
    ProductResolver
  ]
})
export class ProductModule { }
