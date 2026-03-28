import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpusersService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllUsersData(): Observable<any>{
    return this.httpClient.get("https://jsonplaceholder.typicode.com/users");
  }

  getuserinfo(id: number){
    return this.httpClient.get("https://jsonplaceholder.typicode.com/users/"+id);
  }

  getUserComments(): Observable<any>{
    return this.httpClient.get("https://jsonplaceholder.typicode.com/comments");
  }

  setData(roleData: any){
    sessionStorage.setItem('roleData', JSON.stringify(roleData));
  }

  getData(){
    return sessionStorage.getItem('roleData');
  }
}
