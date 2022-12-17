import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';

export interface ProductResponse {
    count:number ,
    next:string|null,
    previous:string|null,
    results:Product[],
  

}


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getProduct(){
    return this.http.get<ProductResponse>("http://staging.freaksrepublic.com:8065/api/product/")
  }
  getMoreProduct(url:any){
    console.log(url);
    
    return this.http.get<ProductResponse>(url)
  }
}
