import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { exhaustMap, map, tap, withLatestFrom } from "rxjs";
import { Product } from "src/app/product/model/product.model";
import { ProductResponse, ProductService } from "src/app/product/services/product.service";
import { addProducts } from "../../shared-product/actions/product.actions";
import * as ProductListActions from "../actions/product-list.actions"
import { ProductListNextSelector } from "../selectors/product-list.selector";
@Injectable()
export class ProductEffect {
    productListEffect$=createEffect(()=>
    this.actions$.pipe(
        ofType(ProductListActions.LoadProductList),
        exhaustMap(()=>this.productService.getProduct()),
        tap((res:ProductResponse)=>{
            
            this.store.dispatch(addProducts({products:res.results}))
        }),
        map((res:ProductResponse)=>{
            return ProductListActions.LoadedProductList({
                count:res.count ,
                next:res.next,
                previous:res.previous,
                productIds:res.results.map((el:Product)=>el.id),
                loading:true
            })
        })
        )
    )

    productListMoreEffect$=createEffect(()=>
    this.actions$.pipe(
        ofType(ProductListActions.LoadMoreProductList),
        withLatestFrom(this.store.select(ProductListNextSelector)),
        exhaustMap(([type,next])=>this.productService.getMoreProduct(next)),
        tap((res:ProductResponse)=>{
            this.store.dispatch(addProducts({products:res.results}))
        }),
        map((res:ProductResponse)=>{
            return ProductListActions.LoadedProductList({
                count:res.count ,
                next:res.next,
                previous:res.previous,
                productIds:res.results.map((el:Product)=>el.id),
                loading:true
            })
        })
        )
    )
    
    
    
    
    
    
    constructor(
        private actions$:Actions,
        private store:Store,
        private productService:ProductService
        ){}
}