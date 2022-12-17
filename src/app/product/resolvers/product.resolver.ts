import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { first, Observable, of, tap } from 'rxjs';
import { LoadProductList } from '../store/product-list/actions/product-list.actions';
import { productListLoadingSelector } from '../store/product-list/selectors/product-list.selector';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<any> {
  loading = false ;
  constructor(private store:Store){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.store.pipe(
      select(productListLoadingSelector),
      tap(productListLoading=>{
        if(!this.loading && productListLoading){
          this.loading =true ;
          this.store.dispatch(LoadProductList())
        }
      }),
      first()
    )
  }
}
