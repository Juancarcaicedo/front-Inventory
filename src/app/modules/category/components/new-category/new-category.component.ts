import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryService } from 'src/app/modules/shared/services/category.service';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css']
})
export class NewCategoryComponent implements OnInit {

  //para inicializar el categoryform importar fb:formbuilder en el constructor
  public categoryForm: FormGroup;
  // para darle nombre al boton agregar actualizar
  estadoFormulario: string = "";
  constructor(private fb: FormBuilder, private categoryService: CategoryService,
            private dialogRef: MatDialogRef<NewCategoryComponent>, 
            @Inject(MAT_DIALOG_DATA) public data: any) {

    console.log(data);
    this.estadoFormulario = "Agregar";

    //  instaciamos el objeto formulario categoryform con el this 
    this.categoryForm = this.fb.group( {
      //campo del formulario puede tener valor por defecto en las '' required es requerido
      name: ['', Validators.required],
      //campo description 
      description: ['', Validators.required]
    });

    if (data != null ){
      this.updateForm(data);
      this.estadoFormulario = "Actualizar";
    }
  }

  ngOnInit(): void {
  }

  // evento para guardar con validaciones ponemos datos en constructor private category service
  onSave(){
//creamos nuestro objeto json data 
    let data = {
      // pregunta si el campo no es vacio  luego retorna el valor si tiene datos al data
      name: this.categoryForm.get('name')?.value,
      //si el vampo no es vacio retorna el valor luego retorna valor si tiene datos al data
      description: this.categoryForm.get('description')?.value
    }

    if (this.data != null ){
      //update registry
      this.categoryService.updateCategorie(data, this.data.id)
              .subscribe( (data: any) =>{
                this.dialogRef.close(1);
              }, (error:any) =>{
                this.dialogRef.close(2);
              })
    } else {
      //create new registry
      this.categoryService.saveCategorie(data)
          .subscribe( (data : any) => {
            console.log(data);
            this.dialogRef.close(1);
          }, (error: any) => {
            this.dialogRef.close(2);
          })
    }
    

  }

  onCancel(){
    this.dialogRef.close(3);

  }

  updateForm(data: any){
    this.categoryForm = this.fb.group( {
      name: [data.name, Validators.required],
      description: [data.description, Validators.required]
    });

  }

}
