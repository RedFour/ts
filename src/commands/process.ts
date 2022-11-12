import { Command } from 'commander';
import { process } from '../services/processService';
export const processCommand = new Command()
  .command('process [filePath]')
  .description('Process a file')
  .action((filePath = 'css_example.json') => {
    process(filePath);
  });
