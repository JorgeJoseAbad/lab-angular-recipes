import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { DishesServiceService} from '../services/dishes-service.service';

@Component({
  selector: 'app-one-recipe',
  templateUrl: './one-recipe.component.html',
  styleUrls: ['./one-recipe.component.css'],
  providers: [DishesServiceService]
})
export class OneRecipeComponent implements OnInit {
  oneRecipe: Object;
  recipeID: String;

  constructor(
    private dish: DishesServiceService,
    private route: ActivatedRoute) { }

    ngOnInit() {
      this.route.params.subscribe((recipe) => {
        this.recipeID = recipe['id']

      });
      this.dish.getOneRecipe(this.recipeID).subscribe((dish) => {
        this.dish = dish
      });
    }

}
