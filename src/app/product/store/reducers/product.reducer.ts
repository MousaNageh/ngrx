import { createReducer,on } from "@ngrx/store";
import { Product } from "../../model/product.model";
import { ProductActions } from "../actions/product-actions.types";
export interface ProductStoreInterface  {
    count:number;
    next:string|null;
    previous:string|null;
    results:Product[],
    loading: Boolean,
    error: string|null,

}
export const productInitStore:ProductStoreInterface = {
    count:0,
    next:null,
    previous:null,
    results:[],
    loading:true,
    error:null
}

export const productReducer = createReducer(
    productInitStore,
    on(ProductActions.loadProduct,(state)=>{
        return {...state,loading:false}
    })

)