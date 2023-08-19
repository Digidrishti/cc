import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {
  data: any;
  Price: any;
  wishlish: boolean = false;
  constructor() { }

  ngOnInit(): void {
    let value = JSON.parse(localStorage.getItem('array') || '{}');
    debugger
    this.data = value

    

    if (Array.isArray(this.data)) {
      debugger
      this.wishlish = true
      this.Price = 0;
      this.data.forEach((i: { price: number; }) => {
        this.Price += i.price;
      });
    }
  }

}
