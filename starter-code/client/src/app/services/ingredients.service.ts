import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class IngredientsService {
  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: Http) { }

  getList() {
    return this.http.get(`${this.BASE_URL}/api/ingredients`)
      .map((res) => res.json());
  }

  addNew(newIngredient){
    return this.http.post(`${this.BASE_URL}/api/ingredients`,newIngredient,)
      .map((res)=> res.json());
  }

  getIngredient(id){
    return this.http.get(`${this.BASE_URL}/api/ingredients/${id}`)
      .map(res=>res.json())
  }


}
