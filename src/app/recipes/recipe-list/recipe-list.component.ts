import { Component } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component ({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Testipe',
    'A test-recipe',
    'https://get.pxhere.com/photo/dish-food-cuisine-ingredient-la-carte-food-hors-d-oeuvre-recipe-vegetarian-food-comfort-food-produce-appetizer-Persillade-side-dish-finger-food-meat-garnish-canape-japanese-cuisine-mediterranean-food-1621827.jpg'
    ),
    new Recipe(
      'Testipe',
    'A test-recipe',
    'https://get.pxhere.com/photo/dish-food-cuisine-ingredient-la-carte-food-hors-d-oeuvre-recipe-vegetarian-food-comfort-food-produce-appetizer-Persillade-side-dish-finger-food-meat-garnish-canape-japanese-cuisine-mediterranean-food-1621827.jpg'
    )
  ];

}
