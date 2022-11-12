import { Entry } from './../entry';

describe('Entry model', () => {
  test('can return string representation', () => {
    const entry = new Entry('id', 'name', 1);

    expect(entry.toString()).toBe('Entry{id: "id", name: "name", quantity: 1}');
  });
});
