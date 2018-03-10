#!/usr/bin/env node

const fetch = require('node-fetch');
const chalk = require('chalk');
const clear = require('clear');
const Spinner = require('clui').Spinner;
const figlet = require('figlet');

const { askType, askZodiac } = require('./lib/questions');

clear();

console.log(
  chalk.red(figlet.textSync('Zodiac-CLI', { horizontalLayout: 'full'}))
);

const run = async () => {
  const {type}   = await askType();
  const {zodiac} = await askZodiac();
  const spinner = new Spinner(`Getting the ${type} of ${zodiac}...`, ['⣾','⣽','⣻','⢿','⡿','⣟','⣯','⣷']);
 
  try {
    console.log('\n')
    spinner.start();
    const response = await fetch(`http://horoscope-api.herokuapp.com/horoscope/${type}/${zodiac}`);
    const json = await response.json();
    console.log(chalk.green('\n\n', json.horoscope, '\n'))

  } catch (err) { 
    throw err;
  } finally {
    spinner.stop();
  }
}

run();
