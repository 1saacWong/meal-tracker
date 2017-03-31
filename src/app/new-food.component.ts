import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';
@Component({
  selector: 'app-new-food',
  templateUrl: './new-food.component.html',
  styleUrls: ['./new-food.component.css']
})
export class NewFoodComponent  {
  @Output() newFoodSender = new EventEmitter();
  addClicked(name: string,details: string, calories: number) {
      var newFoodToAdd: Food = new Food(name,details, calories);
      this.newFoodSender.emit(newFoodToAdd);
    }

}
