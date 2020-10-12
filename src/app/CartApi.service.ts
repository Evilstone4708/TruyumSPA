import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartApiService {

  url: string = 'http://localhost:5000/api/cart/';
  
  constructor() { }
}
