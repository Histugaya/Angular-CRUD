import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { DashboardModule } from './dashboard.module';
import { ProductModule } from '../product/product.module';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private service:DashboardService) { }

  ngOnInit() {
   this.getAllProduct(); 
  }


  lists:ProductModule[];
  displayedColumns: string[] = ['id', 'product','deleted','action'];

  productForm=new FormGroup({
    productId:new FormControl(),
      productName: new FormControl('',[
        Validators.required
      ]),
      deleted:new FormControl()
  });

  getAllProduct(){
   this.service.getAllProduct().subscribe
    (data => this.lists = data);
  }

  submitProduct(productName){
    if(productName.productId>0){
      this.updateProduct(productName)
    }
    else{
      this.insertProduct(productName);
    }
    
  }

  insertProduct(productName){
    this.service.insertProduct(productName).subscribe(
      data =>{
        this.getAllProduct(),
        this.resetForm()
      }
    );
  }

  updateProductById(id:number){
    this.service.getProductById(id).subscribe(
      data =>{
        this.productForm.setValue({productId:data.ProductId,productName:data.ProductName,deleted:data.Deleted})
      }
    );
  }

  updateProduct(productName){
    this.service.updateProduct(productName).subscribe(
      data =>{
        this.getAllProduct(),
        this.resetForm()
      }
    );
  }

  deleteProduct(id:number){
      this.service.deleteProduct(id).subscribe(
        data =>{this.getAllProduct()}
      );
  }

  resetForm(){
    this.productForm.reset();
  }
  
} 