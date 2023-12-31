import { Component ,OnInit} from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  public totalcartItem:number=0;
  public searchTerm:string='';
  constructor(private cartService:CartService){}
ngOnInit(): void {
this.cartService.getProduct()
.subscribe((res)=>{
this.totalcartItem = res.length;

})


}
search(event:any){
  this.searchTerm = (event.target as HTMLInputElement).value;
  this.cartService.search.next(this.searchTerm);
  
}
}
