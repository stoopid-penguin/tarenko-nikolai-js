const fs = require('fs');
const path = require('path');

try {
  const filePath = path.join(__dirname, 'data.txt');
  const data = fs.readFileSync(filePath, 'utf8');
  console.log(`Количество строк: ${data.split('\n').length}`);
  console.log(`Количество символов: ${data.length}`);
} catch (err) {
  console.error('Ошибка при чтении файла:', err);
}