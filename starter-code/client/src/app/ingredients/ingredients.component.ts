import { Component, OnInit } from '@angular/core';
import { IngredientsService } from '../services/ingredients.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css'],
  providers: [IngredientsService]
})
export class IngredientsComponent implements OnInit {

  private ingredients: any;

  constructor(
    private ingredientsService: IngredientsService
  ) { }

  ngOnInit() {
    this.ingredientsService.getList()
      .subscribe(
        list => {
          console.log(list);
          this.ingredients = list;
          debugger;
        }
      )
  }

  addNewIngredient(form){
    debugger;
    let newIngredient = {
      name : form.value.name,
      description: form.value.description,
      image: form.value.image
    }

    this.ingredientsService.addNew(newIngredient)
    .subscribe(ingredient=>console.log("nuevo hecho",ingredient))

  }

}
