import { createReducer, on } from "@ngrx/store";
import { ProductAdapter } from "../adapters/product.adapter";
import * as ProductActions from "../actions/product.actions"

export const productReducer = createReducer(
    ProductAdapter.getInitialState(),
    on(ProductActions.addProducts,(state,payload)=>{
        return ProductAdapter.upsertMany(payload.products, state); 
    })

)