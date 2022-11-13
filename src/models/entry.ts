import { Stringable } from '../interfaces/stringable';

export class Entry implements Stringable {
  id: string;
  name: string;
  quantity: number;

  constructor(id: string, name: string, quantity: number) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
  }

  toString() {
    return `Entry{id: "${this.id}", name: "${this.name}", quantity: ${this.quantity}}`;
  }
}
