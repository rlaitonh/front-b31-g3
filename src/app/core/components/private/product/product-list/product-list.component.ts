import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { IProduct } from '../interfaces/product.interface';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: IProduct[] = [];

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject <any> = new Subject <any>();

  constructor(private readonly productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      lengthMenu: [2, 3,5,10]
      }
}
  getProducts(){
    this.productService.getProducts().subscribe(
      data =>{ this.productList = data
      this.dtTrigger.next(null);
      },
      err => console.log(err)
      );
  }
  deleteProduct(id: string){
    this.productService.deleteProduct(id)
    .subscribe(
      res =>{
        this.getProducts();
        console.log(res);
      },
      err => console.log(err)
      
    );
  }

}