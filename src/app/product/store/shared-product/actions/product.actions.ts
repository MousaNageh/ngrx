import { createAction,props } from "@ngrx/store";
import { Product } from "src/app/product/model/product.model";

export const addProducts = createAction(
    "[product resolver]",
    props<{products:Product[]}>()
)