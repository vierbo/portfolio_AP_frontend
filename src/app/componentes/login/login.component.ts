import { Component, OnInit } from '@angular/core';
//inyectar las librerias para armar un form.
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  //inyectar el constructor del formbuilder
  constructor(private builder: FormBuilder){
  
  //grupo de controladores para el form de login
  this.form= this.builder.group({
    password:['',[Validators.required, Validators.minLength(4)]],
    email:['',[Validators.required, Validators.email]],
  })
}
  ngOnInit() {}
  //métodos para el formulario.
  get Password(){
    return this.form.get("password");
  }
  get Mail(){
    return this.form.get("email");
  }
  //validaciones
  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }
  get EmailValid(){
    return false
  }

  onEnviar(event: Event){
    //detiene la programación o ejecución del comportamiento submit del form.
    event.preventDefault;

    if(this.form.valid){
      //llama al servicio para enviar los datos al servidor.
      alert("todo bien man!")}
      else{
        this.form.markAllAsTouched();
    }
  }

}
