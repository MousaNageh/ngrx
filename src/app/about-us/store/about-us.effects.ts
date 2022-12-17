import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, exhaustMap, map, of, switchMap, tap, withLatestFrom } from "rxjs";
import { AboutUsService } from "../services/about-us.service";
import * as AboutUsActions from "./about-us.actions"
import { aboutUsStoreSelector } from "./about-us.selectors";
@Injectable()
export class AboutUsEffects {
    aboutUsEffect$= createEffect(()=>
        this.actions$.pipe(
            ofType(AboutUsActions.loadedAboutUsAction),
            withLatestFrom(this.store.select(aboutUsStoreSelector)),
            exhaustMap(([type,data])=>{
                if (data.aboutUs)
                    return of({...data.aboutUs})
                return this.aboutUsService.geAboutUs().pipe(catchError(errr=>of(errr)))
            }),
            exhaustMap(res=>{ 
                if(res.error)
                    return of(AboutUsActions.AboutUsErrorAction(res))
                return of(AboutUsActions.loadAboutUsAction(res))
            }),
            
            
        ))
    
    
    constructor(
        private aboutUsService:AboutUsService,
        private actions$:Actions,
        private store:Store){
        
    }




}