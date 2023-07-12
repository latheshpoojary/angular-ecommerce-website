import { Component,OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  public prouductList:any;
  public searchKey:string='';
  public filterCategory:any;
  constructor(private api:ApiService,private cartService:CartService){}
ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.prouductList = res;
      this.filterCategory =res;
      this.prouductList.forEach((element:any) => {
        if(element.category==="men's clothing" || element.category==="women's clothing"){
          element.category = "fashion";
        }
        Object.assign(element,{quantity:1,total:element.price});
      });
      // console.log(this.prouductList);
      
    })
    this.cartService.search.subscribe((value:any)=>{
      this.searchKey = value;
    })
}
addToCart(item:any){
  this.cartService.addToCart(item);
}
filter(category:string){
  
  
  this.filterCategory=this.prouductList.filter((item:any)=>{
    if(item.category === category || category === ''){
      return item;
    }
  })
  console.log(this.filterCategory);
  
}
}
