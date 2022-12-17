import { createFeatureSelector, createSelector ,} from "@ngrx/store";
import { ProductAdapter, productState } from "../adapters/product.adapter";
import { sharedPrdouctStoreName } from "../shared-product.store";


export const selectProductsState  = createFeatureSelector<productState>(sharedPrdouctStoreName)

export const selectProductsEntities = createSelector(
    selectProductsState,
    ProductAdapter.getSelectors().selectEntities
  );
  