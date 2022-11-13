import { Command } from 'commander';
import { processFile } from '../services/processService';
export const processCommand = new Command()
  .command('process [filePath]')
  .description('Process a file')
  .action(async (filePath = 'css_example.json') => {
    await processFile(filePath);
  });
