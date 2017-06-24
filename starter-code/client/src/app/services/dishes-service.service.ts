import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DishesServiceService {
  BASE_URL: string = 'http://localhost:3000';


  constructor(private http: Http) { }

  getList() {
    console.log('on getlist of service');
    return this.http.get(`${this.BASE_URL}/api/dishes`)
      .map((res) => res.json());
  }


}
