import { Serializable } from '../interfaces/serializable';
import { Stringable } from '../interfaces/stringable';

export class Entry implements Serializable, Stringable {
  id: string;
  name: string;
  quantity: number;

  constructor(id: string, name: string, quantity: number) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
  }

  toObject() {
    return {
      id: this.id,
      name: this.name,
      quantity: this.quantity,
    };
  }

  toString() {
    return `Entry{id: "${this.id}", name: "${this.name}", quantity: ${this.quantity}}`;
  }

  serialize(): string {
    return JSON.stringify(this.toObject());
  }

  static fromSerialized(serial: string) {
    const entry: ReturnType<Entry['toObject']> = JSON.parse(serial);

    return new Entry(entry.id, entry.name, entry.quantity);
  }
}
