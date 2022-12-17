import { createFeatureSelector, createSelector } from "@ngrx/store";
import { selectProductsEntities } from "../../shared-product/selectors/product.selector";
import { productListStoreName } from "../product-list.store";
import { ProductList } from "../reducers/product-list.reducer";
import { Product } from '../../../model/product.model';
export const selectProductListState  = createFeatureSelector<ProductList>(productListStoreName)



export const productListLoadingSelector = createSelector(selectProductListState,
    productList=>productList.loading)

export const productListIdSelector = createSelector(selectProductListState,
        productList=>productList.productIds)


export const ProductListNextSelector = createSelector(selectProductListState,
    (productList)=>productList.next)


export const  ProductListSelector = createSelector(productListIdSelector,selectProductsEntities,
    (ids,entities)=>{
        let products =(ids.map(id=>entities[id])) as Product[]
        return products;
    })