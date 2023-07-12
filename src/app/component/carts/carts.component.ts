import { Component,OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss']
})
export class CartsComponent implements OnInit{
  public totalSize:number=0;
  public product:any=[];
  public grandTotal:number=0;
  constructor(private cartService:CartService){}
ngOnInit(): void {
this.cartService.getProduct()
.subscribe((res:any)=>{
  this.product = res;
  this.grandTotal = this.cartService.getTotalPrice(); 
  this.totalSize = res.length;
})
}
removeItem(item:any){
this.cartService.removeCartItem(item);
}
emptyCart(){
  this.cartService.removeAllCart();
}
}
