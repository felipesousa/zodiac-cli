const inquirer = require('inquirer');

const askType = async () => {
  const questions = [
    {
      message: 'Select the type of query do you wanna see: ',
      choices: ['today', 'week', 'month'],
      default: 'today',
      type: 'list',
      name: 'type' 
    },
  ];

  return await inquirer.prompt(questions);
}

const askZodiac = async () => {
  const questions = [
    {
      message: 'Choose your Zodiac: ',
      choices: ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'],
      default: 'today',
      type: 'list',
      name: 'zodiac' 
    },
  ];

  return await inquirer.prompt(questions);
}

module.exports = {
  askType,
  askZodiac,
}
