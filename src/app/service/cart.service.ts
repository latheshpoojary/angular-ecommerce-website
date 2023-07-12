import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItems:any=[]
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  constructor() { }
  getProduct(){
    return this.productList.asObservable();
  }
  setProduct(product:any){
    this.cartItems.push(...product);
    this.productList.next(product);
  }
  addToCart(product:any){
    this.cartItems.push(product);
    this.productList.next(this.cartItems);
    this.getTotalPrice();
    console.log(this.cartItems);
    
  }
  getTotalPrice():number{
    let grandTotal = 0;
    this.cartItems.map((item:any)=>{
      grandTotal += item.total;
    })
    return grandTotal;
  }
  removeCartItem(product:any){
    this.cartItems.map((item:any,index:any)=>{
      if(product.id === item.id){
         this.cartItems.splice(index,1);
      }
    })
    this.productList.next(this.cartItems);
  }
  removeAllCart(){
    this.cartItems = [];
    this.productList.next(this.cartItems);
    this.productList.next(this.cartItems);
  }
}
  