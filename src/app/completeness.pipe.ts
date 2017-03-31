import { Pipe, PipeTransform } from '@angular/core';
import { Food } from './food.model';

@Pipe({
  name: 'completeness'
})
export class CompletenessPipe implements PipeTransform {
  transform(input: Food[], desiredCompleteness) {
   var output: Food[] = [];
   if(desiredCompleteness === "highCalories") {
     for (var i = 0; i < input.length; i++) {
       if (input[i].calories >= 500) {
         output.push(input[i]);
       }
     }
     return output;
   } else if (desiredCompleteness === "lowCalories") {
     for (var i = 0; i < input.length; i++) {
       if (input[i].calories <500) {
         output.push(input[i]);
       }
     }
     return output;
   } else {
     return input;
   }
 }
}
