import { createAction, props } from "@ngrx/store";
import { ProductList } from "../reducers/product-list.reducer";

export const LoadProductList = createAction(
    "[product eff] load product list"
)

export const LoadMoreProductList = createAction(
    "[product eff] load more product list"
)
export const LoadedProductList = createAction(
    "[product list effect] loaded product list",
    props<ProductList>()
)