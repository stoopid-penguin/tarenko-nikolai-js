const fs = require('fs');
const readline = require('readline');
const path = require('path');

const filePath = path.join(__dirname, 'log.txt');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Введите текст. Для завершения введите "stop":\n');

rl.on('line', (input) => {
  if (input.toLowerCase() === 'stop') {
    console.log('Программа завершена. Все данные сохранены в log.txt');
    rl.close();
    return;
  }
  fs.appendFile(filePath, input + '\n', (err) => {
  });
});
