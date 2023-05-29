import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, filter, map } from 'rxjs';
import { Customer } from '../Model/Customer';
import { Produit } from '../Model/Produit';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  LinkProduct = 'http://localhost:5000/api/Products/GetProducts';
  LinkSearchProduct = 'http://localhost:5000/api/Products/SearchListProducts';
  LinkSaveProduct = 'http://localhost:5000/api/Products/InsertProduct';
  constructor(private http: HttpClient) {}

  GetListProduct(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.LinkProduct);
    // return this.http
    //   .get<Produit[]>(this.LinkProduct)
    //   .pipe(
    //     map((dataArray: any[]) =>
    //       dataArray.filter((dataObject: any) => dataObject.id === 1)
    //     )
    //   );
  }

  SearchListProduct(product: Produit): Observable<Produit[]> {
    return this.http.post<Produit[]>(this.LinkSearchProduct, product);
  }

  SaveProduct(product: Produit): Observable<boolean> {
    return this.http.post<boolean>(this.LinkSaveProduct, product);
  }
}
