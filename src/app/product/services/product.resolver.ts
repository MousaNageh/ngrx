import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Store } from '@ngrx/store';
import { finalize, first, Observable, of, tap } from 'rxjs';
import { loadProduct } from '../store/actions/product.actions';
import { ProductResolverSelector } from '../store/selectors/product.selector';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<any> {
  loading=false ;
  constructor(private store:Store){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.store.select(ProductResolverSelector).pipe(tap(
      products=>{
        if(!this.loading){
          this.loading = true;
          this.store.dispatch(loadProduct())
        }
      }
    ),
    first(),
    finalize(()=>this.loading=false));
  }
}
