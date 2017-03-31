import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public masterFoodList: Food[] = [
    new Food("Chocolate", "sweet",500),
    new Food("McDonalds", "cheap", 800),
    new Food("Siu Mai", "dirty", 400)
  ];

  selectedFood: Food = null;
  showDetails(clickedFood: Food) {
    this.selectedFood = clickedFood;
  }
  finishedEditing(){
    this.selectedFood = null;
  }
  addFood(foodChild: Food){
    this.masterFoodList.push(foodChild);
  }
}
