import { createAction ,props} from "@ngrx/store";
import { Product } from "../../model/product.model";


export const loadProduct = createAction(
    "[product page] load products"
)

export const ProductsLoaded = createAction(
    "[product Effect] add loaded products to store",
    props<{products:Product[]}>()
)
