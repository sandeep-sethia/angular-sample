import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(
    private http: HttpClient,
    private recipeService: RecipeService
  ) {
  }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    return this.http.put('https://angular-sample-f5650.firebaseio.com/recipes.json', recipes)
      .subscribe(result => {
        console.log(result);
      });
  }

  fetchRecipes() {
    return this.http.get<Recipe[]>('https://angular-sample-f5650.firebaseio.com/recipes.json')
      .pipe(map(
        recipes => {
          return recipes.map(recipe => {
            return {
              ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []
            };
          });
        }
      ), tap(recipes => {
          this.recipeService.setRecipes(recipes);
        })
      );
  }
}
