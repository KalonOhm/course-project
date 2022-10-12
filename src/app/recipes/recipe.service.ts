import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core"
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Peppizza',
    'A test-recipe',
    'https://get.pxhere.com/photo/dish-food-cuisine-ingredient-la-carte-food-hors-d-oeuvre-recipe-vegetarian-food-comfort-food-produce-appetizer-Persillade-side-dish-finger-food-meat-garnish-canape-japanese-cuisine-mediterranean-food-1621827.jpg',
      [
        new Ingredient('Pepperoni', 37),
        new Ingredient('Tomato Sauce', 1),
        new Ingredient('Dough', 1),
      ]
    ),
    new Recipe(
      'Megatini',
    'A second test-recipe',
    'https://get.pxhere.com/photo/dish-food-cuisine-ingredient-la-carte-food-hors-d-oeuvre-recipe-vegetarian-food-comfort-food-produce-appetizer-Persillade-side-dish-finger-food-meat-garnish-canape-japanese-cuisine-mediterranean-food-1621827.jpg',
      [
        new Ingredient('Olives', 37),
      new Ingredient('Gin', 1),
      new Ingredient('Vermouth', 1),
    ]
    )
  ];

  constructor(private shoppingListService: ShoppingListService){}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
