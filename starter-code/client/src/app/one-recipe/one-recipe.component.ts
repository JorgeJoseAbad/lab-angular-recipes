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
  private dish: Object = {};
  private recipeID: String;
  private listIngredients:Array<Object>;
  private listDishIngredients:Array<Object> = [];

  constructor(
    private dishesService: DishesServiceService,
    private ingredient: IngredientsService,
    private route: ActivatedRoute) {
}

    ngOnInit() {
      this.route.params.subscribe((recipeIdObject) => {
        this.recipeID = recipeIdObject['id'];
      });
      /*
      dish = {
        // ...
        ingredients: [
          {
            ingredient: { name: "Olive Oil" },
            quantity: 1
          },
        ]
      }
      */

      this.dishesService.getOneRecipe(this.recipeID)
      .subscribe((dish) => {
        dish.ingredients.forEach(
          (item,i)=>this.ingredient.getIngredient(item.ingredientId)
            .subscribe((ingredient)=>{
              let ingredient_in_dish={
                name : ingredient.name,
                quantity:item.quantity
              }
              this.listDishIngredients.push(ingredient_in_dish);
              dish.ingredients[i] = {};
              dish.ingredients[i] = ingredient_in_dish;
            
            })
        );
        this.dish = dish;
        console.log(this.dish);

      });

      this.ingredient.getList()
        .subscribe((listIngredients)=>{
          this.listIngredients = listIngredients;
          }
        )
    }

    addToRecipe(data){

      let idIngredient = data.value.ingredientId;
      let quantity = data.value.quantity;
      let idRecipe = this.recipeID

      this.dishesService.addNewIngredient(idRecipe,idIngredient,quantity)
        .subscribe((res)=>console.log(res));

    }

}
