import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { DishesServiceService} from '../services/dishes-service.service';
import { IngredientsService} from '../services/ingredients.service';

@Component({
  selector: 'app-one-recipe',
  templateUrl: './one-recipe.component.html',
  styleUrls: ['./one-recipe.component.css'],
  providers: [DishesServiceService,IngredientsService]
})
export class OneRecipeComponent implements OnInit {
  oneRecipe: Object;
  recipeID: String;
  listIngredients:Array<Object>;


  constructor(
    private dish: DishesServiceService,
    private ingredient: IngredientsService,
    private route: ActivatedRoute) { }

    ngOnInit() {
      this.route.params.subscribe((recipeIdObject) => {
        this.recipeID = recipeIdObject['id'];
      });
      this.dish.getOneRecipe(this.recipeID).subscribe((dish) => {
        this.dish = dish
      });

      this.ingredient.getList()
        .subscribe((listIngredients)=>{
          this.listIngredients = listIngredients;
        }

        )
    }

}
