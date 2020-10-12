import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserApiService } from '../Userapi.service';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList: Array<User>
  url: string = 'http://localhost:5000/api/user/'
  constructor(private http: HttpClient, private api: UserApiService) {
    this.userList = new Array<User>();
  }

  //**************************************/ Dont delete after this \**************************************\\

  public addCustomer(user: User){
    return this.http.post(this.url, user);
  }


}
