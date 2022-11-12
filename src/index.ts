import { processCommand } from './commands/process';
import { program } from 'commander';

program.addCommand(processCommand);

program.parse(process.argv);