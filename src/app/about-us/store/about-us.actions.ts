import { createAction,props } from "@ngrx/store";
import { AboutUs } from "../model/about-us.model";


export const loadAboutUsAction = createAction("[about us page] load about us",
    props<AboutUs>()
)
export const loadedAboutUsAction = createAction("[about us effect] loaded about us")


export const AboutUsErrorAction = createAction("[about us effect] error about us",
props<any>())

export const loadedAboutUsDeleteAction = createAction("[about us page] delete about us")