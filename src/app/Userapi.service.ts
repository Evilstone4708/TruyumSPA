import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  url: string = 'http://localhost:5000/api/users/';

  constructor() { }
}
