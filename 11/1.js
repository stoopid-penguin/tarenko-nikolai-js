const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Введите текст: ", function(text) {
  fs.writeFile("output.txt", text, function(err) {
    if (err) {
      console.log("Ошибка записи");
      return;
    }
    console.log("Текст сохранён в файл");
    rl.close();
  });
});