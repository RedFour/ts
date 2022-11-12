#! /usr/bin/env node

import { processCommand } from './commands/process';
import { Command } from 'commander';

const program = new Command();

program
  .name('tscli')
  .description('A CLI for the CSS Coding Challenge')
  .version('0.0.1');

program.addCommand(processCommand, { isDefault: true });

program.parse(process.argv);
