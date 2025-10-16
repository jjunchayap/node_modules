import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginForm: FormGroup = new FormGroup({});
  mensajeExito: string = '';
  mensajeError: string = '';
  flg_enviando:boolean = false;
  flg_mostrarDebug: boolean = false;

  constructor(private fb: FormBuilder,
              private authService: Auth,
              private router: Router
  ){
    this.loginForm = fb.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(6)]]
    });
  }

  get email(){
    return this.loginForm.get('email');
  }

  get password(){
    return this.loginForm.get('password');
  }

  onSubmit(){
    this.mensajeError = '';
    this.mensajeExito = '';

    if(this.loginForm.valid){
      this.flg_enviando = true;

      console.log('Datos del formulario', this.loginForm.value);

      const credentials = this.loginForm.value;

      this.authService.login(credentials).subscribe({
        next:(response) =>{
          console.log('Login exitoso: ', response);

          this.mensajeExito = 'Bienvenido/a ' + response?.user.name ;

          this.loginForm.reset();
          
          setTimeout(()=>{
            this.router.navigate(['/home'])
          }, 1000)
          
        },
        error: (error) =>{
          console.log('Error en login ',error);
          this.mensajeError = 'Credenciales incorrectas'
          this.flg_enviando = false;
        },
        complete: () =>{
          console.log('Login request completado')
          this.flg_enviando = false;
        }
      })



    }else{
      this.loginForm.markAllAsTouched();
      this.mensajeError = 'Por favor, completa el formulario correctamente.';
    }
  }

  hasError(ControlName: string, errorType: string): boolean{
    const control = this.loginForm.get(ControlName);
    return !!(control && control.hasError(errorType) && (control.dirty || control.touched));
  }

  isFildInvalid(controlName: string): boolean{
    const control = this.loginForm.get(controlName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }


  
}
