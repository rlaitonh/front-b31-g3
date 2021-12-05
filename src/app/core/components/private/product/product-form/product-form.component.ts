import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../interfaces/product.interface';
import { ProductService } from '../service/product.service';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  product: IProduct = {
    _id: '',
    category: '',
    name: '',
    unitValue: 0,
    stock: 0,
    description: '',
    image: ''
  }

  edit:boolean = false;


  constructor(
    private readonly productService:ProductService,
    private readonly router:Router,
    private readonly activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {

    const params = this.activatedRoute.snapshot.params;

    if(params['id'] != undefined){
      this.productService.getProductById(params['id'])
      .subscribe(
        res =>{
          this.product = res;
          this.edit = true;
        }
      );
    }

  }

  createProduct(){
    this.productService.createProduct(this.product)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['product/list']);
      },
      err => console.log(err)
    );
    
  }

  // updateProduct(){
  //   this.productService.updateProduct(this.product.id, this.product)
  //   .subscribe(
  //     res => {
  //       console.log(res);
  //       this.router.navigate(['product/list']);
  //     },
  //     err => console.log(err)
  //   );

  // }

}
