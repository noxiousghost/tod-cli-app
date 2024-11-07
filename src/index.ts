#!/usr/bin/env node

import { Command } from 'commander';

const program = new Command();

program
  .name('TODO CLI APP')
  .version('0.0.1')
  .description('Create and view your tasks from the comfort of your terminal');
program
  .command('test')
  .description('Run a test command')
  .action(() => {
    console.log('Todo CLI is working!');
  });

program.parse(process.argv);

//take input from the command line
// use app -- add

// validate the input
// if the input is valid save to the json file
// else display list of error in the input fields
