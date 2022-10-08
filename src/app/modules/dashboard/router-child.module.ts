import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';


//  clase para crear rutas hijas 
const childroutes: Routes=[
    //  configuracion de rutas 
   { path: '', component: HomeComponent },
   { path: 'home', component: HomeComponent }
]


@NgModule({
    imports: [RouterModule.forChild(childroutes)],
    exports: [RouterModule]
   
})
export class RouterChildModule { }
