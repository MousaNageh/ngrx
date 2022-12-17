import { Component ,OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../model/product.model';
import { LoadMoreProductList } from '../store/product-list/actions/product-list.actions';
import { productListLoadingSelector, ProductListNextSelector, ProductListSelector } from '../store/product-list/selectors/product-list.selector';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
   products$!:Observable<Product[]> ;
   laoding$!:Observable<Boolean> ;
   next$!:Observable<string|null> ;
   constructor(private store:Store){}
   ngOnInit(){
    this.products$ = this.store.select(ProductListSelector)
    this.laoding$ = this.store.select(productListLoadingSelector)
    this.next$ = this.store.select(ProductListNextSelector)
  }
  laodMore(){
    this.store.dispatch(LoadMoreProductList())
  }

}
