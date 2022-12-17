import { createReducer, on } from "@ngrx/store";
import * as ProductListAction from "../actions/product-list.actions"
export interface ProductList {
    count:number ;
    next:string|null;
    previous:string|null;
    productIds:string[],
    loading:boolean
}

export const  productListInitState:ProductList = {
    count:0 ,
    next:null,
    previous:null,
    productIds:[],
    loading:true
}

export const productListReducer = createReducer(
    productListInitState,
    on(ProductListAction.LoadedProductList,(state,action)=>{
        return {
            ...action,
            productIds:[...state.productIds,...action.productIds],
            loading:false
        }
    })
)