import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Product } from "src/app/product/model/product.model";

export interface productState extends EntityState<Product> {

}

export const ProductAdapter: EntityAdapter<Product> = createEntityAdapter<Product>({
    
});
