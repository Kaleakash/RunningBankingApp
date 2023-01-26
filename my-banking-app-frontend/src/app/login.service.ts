import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import { Login } from './login';
import {environment} from '../environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl:string=`http://${environment.baseIP}:3000/api/admin`;
  constructor(public http:HttpClient) { }



  signIn(login:any):Observable<JSON>{
      return this.http.post<JSON>(this.baseUrl+"/login",login,{responseType:'json'});
  }

  changePassword(login:any):Observable<Login> {
    return this.http.put<Login>(this.baseUrl+"/changePassword",login);
  }




  // deposit(customer:any):Observable<Customer> {
  //   return this.http.put<Customer>(this.baseUrl+"/"+customer.id,customer);
  // }
}
