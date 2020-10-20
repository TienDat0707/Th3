import { Renderer2 } from '@angular/core';
import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-bai2',
  templateUrl: './bai2.component.html',
  styleUrls: ['./bai2.component.css']
})
export class Bai2Component implements OnInit,AfterViewInit {
  dsCategories = [
    {name:"Necklaces",total:7},
    {name:"Earrings",total:12},
    {name:"Bracelet",total:5},
    {name:"Anklet",total:18},
    {name:"Braid Jewels",total:13},
    {name:"Foot Harness",total:6}
  ]
  dsMenu =[
    {
      name: "Home",
      Itemmenu:[
        {
          Itemmane:"Home One",
          Submenu:[]
        },
        {
          Itemmane:"Home Two",
          Submenu:[]
        },
        {
          Itemmane:"Home Three",
          Submenu:[]
        }
      ],
      megamenu: false
    },
    {
      name: "Shop",
      Itemmenu:[
        {
          Itemmane:"Shop Page Layout",
          Submenu:['Grid Fullwidth','Left Sidebar','Right Sidebar','List Fullwidth','List Left Sidebar','List Right Sidebar']
        },
        {
          Itemmane:"Single Product Style",
          Submenu:['Gallery Left','Gallery Right','Tab Style Left','Tab Style Right', 'Sticky Left', 'Sticky Right']
        },
        {
          Itemmane:"Single Product Type",
          Submenu:['Single Product','Single Product Sale','Single Product Group','Single Product Variable','Single Product Affiliate','Single Product Slider']
        }
      ],
      megamenu: true
    },
    {
      name: "Blog",
      Itemmenu:[
        {
          Itemmane:"Grid View",
          Submenu:['Column Two','Column Three','Left Sidebar','Right Sidebar']
        },
        {
          Itemmane:"List View",
          Submenu:['List Fullwidth','List Left Sidebar','List Right Sidebar']
        },
        {
          Itemmane:"Blog Details",
          Submenu:['Left Sidebar','Right Sidebar']
        },
        {
          Itemmane:"Blog Format",
          Submenu:['Gallery Format','Audio Format','Video Format']
        }
      ],
      megamenu: false
    },
    {
      name: "Pages",
      Itemmenu:[
        {
          Itemmane:"My Account",
          Submenu:[]
        },
        {
          Itemmane:"Login | Register",
          Submenu:[]
        },
        {
          Itemmane:"Wishlist",
          Submenu:[]
        },
        {
          Itemmane:"Cart",
          Submenu:[]
        },
        {
          Itemmane:"Checkout",
          Submenu:[]
        },
        {
          Itemmane:"Compare",
          Submenu:[]
        },
        {
          Itemmane:"FAQ",
          Submenu:[]
        },
        {
          Itemmane:"404 Error",
          Submenu:[]
        },
        {
          Itemmane:"Comming Soon",
          Submenu:[]
        }
      ],
      megamenu: false
    },
    {
      name: "About Us",
      Itemmenu:[],
      megamenu: false
    },
    {
      name: "Contact",
      Itemmenu:[],
      megamenu: false
    },
    {
      name: "Jewellery",
      Itemmenu:[],
      megamenu: false
    }
  ]
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }
  ngAfterViewInit() { 
    this.loadScripts();
  }
  public loadScripts() {
    this.renderExternalScript('assets/js/main.js').onload = () => {
    }
  }
  public renderExternalScript(src: string): HTMLScriptElement {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.async = true;
    script.defer = true;
    this.renderer.appendChild(document.body, script);
    return script;
  }
}
