import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent  {

  @Input() childFoodList: Food[];
  @Output() clickSender = new EventEmitter();

  editFood(foodToEdit: Food) {
    this.clickSender.emit(foodToEdit);
  }

  public selectedCompleteness: string = "all";
  onChange(optionFromMenu) {
  this.selectedCompleteness = optionFromMenu;
  
}
}
