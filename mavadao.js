const fs = require('fs');
fs.readFile('flag.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`Conteúdo do flag.txt: ${data}`);
});
