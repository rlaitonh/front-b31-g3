import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { IProduct } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API_URL:string = 'http://localhost:3000';

  constructor(private readonly httpClient: HttpClient) {}
  
    // GET de todos los productos
    getProducts():Observable<IProduct[]>{
      return this.httpClient.get<IProduct[]>(`${this.API_URL}/product`);
    }
    // GET  de productos por id
    getProductById(productId:string):Observable<IProduct>{
      return this.httpClient.get<IProduct>(`${this.API_URL}/product/${productId}`);
    }
    // POST  de productos
    createProduct(product:IProduct):Observable<IProduct>{
      return this.httpClient.post<IProduct>(`${this.API_URL}/product/create`,product);
    }
    //PUT de productos
    updateProduct(product:IProduct,productId:string):Observable<IProduct>{
      return this.httpClient.put<IProduct>(`${this.API_URL}/product/${productId}`,product);
    }
    // DELETE  de productos
    deleteProduct(productId:string):Observable<IProduct>{
      return this.httpClient.delete<IProduct>(`${this.API_URL}/product/delete?productId=${productId}`);
    }
}
