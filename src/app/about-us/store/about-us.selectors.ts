import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AboutUsStoreName } from "./about-us.store";
import { AboutUsStoreInterFace } from "./about-user.reducer";


export const aboutUsStoreSelector = createFeatureSelector<AboutUsStoreInterFace>(AboutUsStoreName)

export  const aboutUsSelector = createSelector(
    aboutUsStoreSelector,
    (aboutUs)=>aboutUs.aboutUs 
)

export  const aboutUsLoadingSelector = createSelector(
    aboutUsStoreSelector,
    (aboutUs)=>aboutUs.loading 
)

export  const aboutUsErrorSelector = createSelector(
    aboutUsStoreSelector,
    (aboutUs)=>aboutUs.error 
)