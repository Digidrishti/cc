import { Router, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  wisharray : any[]=[];
  constructor(
    private router: Router
  ) { }

  smartphones  =  [
    {id1: 1,im:'one',n:'Leg Piece', fav:false, price:240, text:'The Vivo V23 5G runs Funtouch OS 12 is based on Android 12 and packs 128GB, 256GB of inbuilt storage. The Vivo V23 5G is a dual-SIM (GSM and GSM) mobile that accepts Nano-SIM and Nano-SIM cards. The Vivo V23 5G measures 157.20 x 72.42 x 7.39mm (height x width x thickness) and weighs 179.00 grams. '},
    {id1: 2,im:'two',n:'Roated chiken', fav:false, price:240, text:'Vivo Y75 is an amazing smartphone for hardcore gamers and multitaskers out there. It comes with an Ultra Game Mode 2.0 through which users can switch between Power Saving, Performance and Balanced modes in real-time. It also includes 4D Game Vibration and Game Picture-in-Picture feature to send text messages without minimising the gaming apps.'},
    {id1: 3,im:'three',n:'Piece', fav:false, price:300, text:'The Vivo X80 runs OriginOS Ocean is based on Android 12 and packs 128GB, 256GB of inbuilt storage. The Vivo X80 is a dual-SIM (GSM and GSM) mobile that accepts Nano-SIM and Nano-SIM cards. The Vivo X80 measures 164.95 x 75.23 x 8.30mm (height x width x thickness) and weighs 203.00 grams. It was launched in Cosmic Black and Urban Blue colours.'},
    {id1: 4,im:'four',n:'Full Chiken', fav:false, price:300, text:'The Vivo T1 Pro 5G is built to deliver consistent performance for a long period of time through its Flagship Level 8 Layer Liquid Cooling Technology. The camera quality of the smartphone is also brilliant which empowers users to capture their moments in a magical way. Further, Ultra Game Mode, Flash Charging and fingerprint sensor are useful features.'},
    {id1: 5,im:'five',n:'Gadaknath', fav:false, price:260, text:'The newly launched Vivo Y01A runs on Android 11 (Go Edition) with a layer of Funtouch OS 11.1 on top, out of the box. The OS on the smartphone, therefore, is fairly old compared to others in the same segment. Even the processor on the latest Y-series model from Vivo is comparatively old with the device housing a MediaTek Helio P35 SoC under the hood.'},
    {id1: 6,im:'six',n:'small Piece', fav:false, price:280, text:'Boasts an advanced dual-camera system that allows you to click mesmerising pictures with immaculate clarity. Furthermore, the lightning-fast A15 Bionic chip allows for seamless multitasking, elevating your performance to a new dimension. A big leap in battery life, a durable design, and a bright Super Retina XDR display facilitate boosting your user experience.'},
  ]

  
  ngOnInit(): void {
    
  }
  wishlist(value: any) {
    this.wisharray.push(value)   
    console.log('From SMenu',this.wisharray)
    localStorage.setItem('array',JSON.stringify(this.wisharray))
    value.fav=true
  }

  unwishlist(value: any) {
  value.fav=false  
  }

  gotoCart(value:any) {
    this.router.navigate(['/addToCart/', value.im]);
    localStorage.setItem('details',JSON.stringify(value))
  }

  gotoDetails(value: any) {
    this.router.navigate(['/productDetails/', value.im]);
    localStorage.setItem('details',JSON.stringify(value))
  }


}
