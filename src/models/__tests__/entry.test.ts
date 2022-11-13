import { Entry } from './../entry';

describe('Entry model', () => {
  test('can return string representation', () => {
    const entry = new Entry('id', 'name', 1);

    expect(entry.toString()).toBe('Entry{id: "id", name: "name", quantity: 1}');
  });

  test('can serialize and deserialize', () => {
    const entry = new Entry('id', 'name', 1);

    const serialEntry = entry.serialize();

    expect(serialEntry).toBe('{"id":"id","name":"name","quantity":1}');

    const newEntry = Entry.fromSerialized(serialEntry);

    expect(entry).toEqual(newEntry);
  });
});
