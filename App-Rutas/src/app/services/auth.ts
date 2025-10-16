
import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable, of, tap } from 'rxjs';
import { User } from '../intefaces/user';
import { loginRequest } from '../intefaces/loginRequest';
import { loginResponse } from '../intefaces/loginResponse';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  private baseURL = 'https://localhost:3000/api';
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  private currentUserSubject = new BehaviorSubject<User | null>(null);

  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  public currentUser$ = this.currentUserSubject.asObservable();

  private simulatedUser = [    
    {
      email: 'admin@test.com',
      password: 'password',
      user: {
        id: 1,
        email: 'admin@test.com',
        name: 'Administrador',
        role: 'admin'
      }
    },
    {
      email: 'user@test.com',
      password: 'password123',
      user: {
        id: 2,
        email: 'user@test.com',
        name: 'Usuario Regular',
        role: 'user'
      }
    },
    {
      email: 'juan@gmail.com',
      password: '123456',
      user: {
        id: 3,
        email: 'juan@gmail.com',
        name: 'Juan Pérez',
        role: 'user'
      }
    }
  ]

  constructor(){
    this.checkStoredAuth();
  }

  private checkStoredAuth(){
    const token = localStorage.getItem('token');
    const userString = localStorage.getItem('user');

    if(token && userString){
      try{
        const user = JSON.parse(userString);
        this.isAuthenticatedSubject.next(true);
        this.currentUserSubject.next(user);
        console.log('Usuario autenticado encontrado en localstorage:', user)
      }catch(error){
        console.log('Error parsing stored user:', error)
        this.logOut();
      }
    }
  }

  login(credentials: loginRequest): Observable<loginResponse | null>{

    console.log('Intento de login')

    return of(null).pipe(
      delay(1500),
      tap(()=>{

        const foundUser = this.simulatedUser.find(
          u=>u.email === credentials.email && u.password === credentials.password
        );

        if(!foundUser){
          throw new Error('Credenciales inválidas');
        }

        const response: loginResponse = {
          token : this.generateFakeToken(),
          user : foundUser.user
        };

        localStorage.setItem('token',response.token);
        localStorage.setItem('user',JSON.stringify(response.user));

        this.isAuthenticatedSubject.next(true);
        this.currentUserSubject.next(response.user);

        return response;


      }),
      tap({
        error: (error) =>{
          console.error('Error en login:',error);
          throw error;
        }
      })
    );
  }

  logOut(): void{
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    this.isAuthenticatedSubject.next(false);
    this.currentUserSubject.next(null);

  }

  isLoggedIn(): boolean{
    return this.isAuthenticatedSubject.value;
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getCurrentUser(): User | null{
    const userString = localStorage.getItem('user');
    if(userString){
      try{
        return JSON.parse(userString);
      }catch(error){
        console.log('Error parsing current user:',error);
        return null;
      }
    }
    return null;
  }

  hasRole(role: String): boolean{
    const user = this.getCurrentUser();
    return user ? user.role === role : false;
  }

  generateFakeToken(): string{
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2);
    return 'fake-jwt-token-' + timestamp + random;
  }

  getTestUsers():any[]{
    return this.simulatedUser.map(u => ({
      email: u.email,
      password: u.password,
      name: u.user.name,
      role: u.user.role

    }))
  }



  // localStorage.setItem('token', response.token);

  
}
