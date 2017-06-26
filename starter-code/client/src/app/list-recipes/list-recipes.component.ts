import { Component, OnInit } from '@angular/core';
import { DishesServiceService} from '../services/dishes-service.service';

@Component({
  selector: 'app-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrls: ['./list-recipes.component.css'],
  providers: [DishesServiceService]
})
export class ListRecipesComponent implements OnInit {
  dishes:Array<Object>;

  constructor(private dishesService: DishesServiceService) { }

  ngOnInit() {
    console.log('on init ListRecipesComponent');
    this.dishesService.getList()
    .subscribe((dishes) => {
      console.log(dishes);
      this.dishes = dishes;
    });

  }

}
