import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] =  [
    new Recipe('Test Recipe', 'test Description', 
    'https://upload.wikimedia.org/wikipedia/commons/a/aa/ROTI_with_PANEER_GRAVY_and_Veg_SALAD.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
