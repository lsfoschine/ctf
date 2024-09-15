const fs = require('fs');

// Ler o conteúdo do arquivo flag.txt e imprimir
fs.readFile('flag.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Erro ao ler o arquivo:', err);
    return;
  }
  console.log(data);
});
