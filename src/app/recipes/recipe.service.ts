import {Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs';

@Injectable()
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();

  constructor(private shoppingListService: ShoppingListService) {
  }

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Pasta',
  //     'pink sause pasta',
  //     'https://upload.wikimedia.org/wikipedia/commons/8/81/Pasta_e_fagioli_rapida.jpg',
  //     [
  //       new Ingredient('pasta', 1),
  //       new Ingredient('tomato', 5),
  //       new Ingredient('capsicum', 2),
  //       new Ingredient('cheese', 1)
  //     ]
  //
  //   ),
  //   new Recipe(
  //     'daal baati',
  //     'awesome rajasthani dish',
  //     'https://upload.wikimedia.org/wikipedia/commons/d/d8/Rajasthani_Dish.jpg',
  //     [
  //       new Ingredient('lentils', 1),
  //       new Ingredient('flour', 2),
  //       new Ingredient('onions', 2)
  //     ]
  //   )
  // ];

  private recipes: Recipe[] = [];

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  addIngredientToShoppingList(ingredients: Ingredient[]): void {
    this.shoppingListService.addIngredients(ingredients);
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
}
