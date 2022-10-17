import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  mobileQuery: MediaQueryList;

  //creamos  un arreglo con los menu
  menuNav=[
    {name: "Home", route: "home", icon:"home"},
    {name: "Categorias", route: "category", icon:"category"},
    {name: "Productos", route: "home", icon:"production_quantity_limits"}

  ]

  constructor(media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(maz-width: 600px)');// son útiles cuando deseas modificar tu página web o aplicación en función del tipo de dispositivo
   }

  ngOnInit(): void {
  }

}
