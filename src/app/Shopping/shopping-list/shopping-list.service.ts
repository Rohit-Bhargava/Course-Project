import { Ingradient } from 'src/app/shared/ingradient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
  ingradientsChanged = new EventEmitter<Ingradient[]>();
  private ingradients: Ingradient[] = [
    new Ingradient('Apples', 5),
    new Ingradient('Tomatoes', 10),
  ];

  getIngraedients() {
    return this.ingradients.slice();
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
}