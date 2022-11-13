import { readFile } from 'fs/promises';
import { z } from 'zod';
import { Entry } from '../models/entry';

const EntryResult = z.object({
  id: z.string(),
  name: z.string(),
  quantity: z.number(),
});

const EntryResults = z.array(EntryResult);

export type EntriesType = z.infer<typeof EntryResults>;

export async function processFile(filePath: string) {
  try {
    const data = await readFile(filePath, { encoding: 'utf8' });
    const raw = JSON.parse(data);
    const parsed = EntryResults.parse(raw);

    parsed.forEach((element) => {
      const entry = new Entry(element.id, element.name, element.quantity);
      console.log(entry.toString());
    });
  } catch (error: any) {
    if (error.code === 'ENOENT') {
      console.error('File read failed: ' + error.message);
    } else {
      console.error('Unexpected failure: ' + error.message);
    }
  }
}
