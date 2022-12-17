import { createFeatureSelector ,createSelector} from "@ngrx/store";
import { productStoreName } from "../product.store";
import { ProductStoreInterface } from "../reducers/product.reducer";


export const productSelectorState = createFeatureSelector<ProductStoreInterface>(productStoreName)

export  const ProductResolverSelector = createSelector(
    productSelectorState,
    (products)=>products
) 