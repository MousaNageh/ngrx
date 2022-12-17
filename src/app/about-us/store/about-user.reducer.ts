import { createReducer ,on} from "@ngrx/store";
import { from } from "rxjs";
import { AboutUs } from "../model/about-us.model";
import * as AboutUsActions from "./about-us.actions"
export interface AboutUsStoreInterFace {
    error:any,
    loading:boolean,
    aboutUs:AboutUs|null,
}
export const aboutUsState:AboutUsStoreInterFace ={
    error:null,
    loading:true,
    aboutUs:null,
}
export const AboutUsReducer = createReducer(
    aboutUsState,
    
    on(AboutUsActions.loadAboutUsAction,(state,aboutus)=>{
        return {...state,loading:false,aboutUs:aboutus}
    }),

    on(AboutUsActions.loadedAboutUsAction,(state)=>{
        return {...state,loading:false}
    }),

    on(AboutUsActions.AboutUsErrorAction,(state,erorr)=>{
        return {...state,error:erorr,loading:false}
    }),
    on(AboutUsActions.loadedAboutUsDeleteAction,(state)=>{
        return aboutUsState
    }),


)

