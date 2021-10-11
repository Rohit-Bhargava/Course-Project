import { Ingradient } from 'src/app/shared/ingradient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingListService {
  ingradientsChanged = new EventEmitter<Ingradient[]>();
  startedEditing = new Subject<number>();
  private ingradients: Ingradient[] = [
    new Ingradient('Apples', 5),
    new Ingradient('Tomatoes', 10),
  ];

  getIngraedients() {
    return this.ingradients.slice();
  }

  getIngradient(index: number){
    return this.ingradients[index];
  }

  addIngradient(ingradient: Ingradient) {
    this.ingradients.push(ingradient);
    this.ingradientsChanged.emit(this.ingradients.slice());
  }

  addIngradients(ingradients: Ingradient[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.ingradients.push(...ingradients);
    this.ingradientsChanged.emit(this.ingradients.slice());
  }

  upgradeIngradient(index: number, newIngradient: Ingradient){
    this.ingradients[index]= newIngradient;
    this.ingradientsChanged.next(this.ingradients.slice());
  }

  deleteIngradient(index: number){
    this.ingradients.splice(index, 1);
    this.ingradientsChanged.next(this.ingradients.slice());
  }

}