import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) {
  }

  private recipes: Recipe[] = [
    new Recipe(
      'Pasta',
      'pink sause pasta',
      'https://upload.wikimedia.org/wikipedia/commons/8/81/Pasta_e_fagioli_rapida.jpg',
      [
        new Ingredient('pasta', 1),
        new Ingredient('tomato', 5),
        new Ingredient('capsicum', 2),
        new Ingredient('cheese', 1)
      ]

    ),
    new Recipe(
      'daal baati',
      'awesome rajasthani dish',
      'https://upload.wikimedia.org/wikipedia/commons/d/d8/Rajasthani_Dish.jpg',
      [
        new Ingredient('lentils', 1),
        new Ingredient('flour', 2),
        new Ingredient('onions', 2)
      ]
    )
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  addIngredientToShoppingList(ingredients: Ingredient[]): void {
    this.shoppingListService.addIngredients(ingredients);
  }
}
