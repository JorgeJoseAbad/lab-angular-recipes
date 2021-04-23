import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { DishesServiceService} from './services/dishes-service.service';
import { IngredientsService} from './services/ingredients.service';
import { ListRecipesComponent } from './list-recipes/list-recipes.component';
import { OneRecipeComponent } from './one-recipe/one-recipe.component';
import { IngredientsComponent } from './ingredients/ingredients.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ListRecipesComponent },
  { path: 'list/:id', component: OneRecipeComponent},
  { path: 'ingredients', component: IngredientsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListRecipesComponent,
    OneRecipeComponent,
    IngredientsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
