import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoryComponent } from '../category/components/category/category.component';


//  clase para crear rutas hijas  ARCHIVO PARA COLOCAR LAS RUTAS
const childroutes: Routes=[
    //  configuracion de rutas 
   { path: '', component: HomeComponent },
   { path: 'home', component: HomeComponent },
   //ruta para categorias
   { path: 'category', component:CategoryComponent }
]


@NgModule({
    imports: [RouterModule.forChild(childroutes)],
    exports: [RouterModule]
   
})
export class RouterChildModule { }
