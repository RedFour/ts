import fs from 'fs';
import { z } from 'zod';
import { Entry } from '../models/entry';

const EntryResult = z.object({
  id: z.string(),
  name: z.string(),
  quantity: z.number(),
});

const EntryResults = z.array(EntryResult);

export type EntriesType = z.infer<typeof EntryResults>;

export function process(filePath: string) {
  fs.readFile(filePath, 'utf8', (error, jsonString) => {
    if (error) {
      console.log('File read failed:', error);
      return;
    }
    try {
      const raw = JSON.parse(jsonString);
      const parsed = EntryResults.parse(raw);

      parsed.forEach((element) => {
        const entry = new Entry(element.id, element.name, element.quantity);
        console.log(entry.toString());
      });
    } catch (error) {
      console.log('Error parsing JSON string: ', error);
    }
  });
}
