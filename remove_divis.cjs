const fs = require('fs');

// 1. index.astro
let indexAstro = fs.readFileSync('src/pages/index.astro', 'utf8');
indexAstro = indexAstro.replace(/"Pontowall Forros e Divisórias"/g, '"Pontowall Forros"');
indexAstro = indexAstro.replace(/Drywall e Divisórias/g, 'Forro Drywall');
indexAstro = indexAstro.replace(/Construção a seco para divisórias, paredes e forros em gesso acartonado./g, 'Construção a seco para forros rebaixados e lisos em gesso acartonado.');
indexAstro = indexAstro.replace(/drywall%20ou%20divisorias/g, 'forro%20drywall');
indexAstro = indexAstro.replace(/Instalação de divisórias drywall escritório SP/g, 'Instalação de forro drywall escritório SP');
indexAstro = indexAstro.replace(/divisórias de drywall e forro/g, 'forro de drywall e');
fs.writeFileSync('src/pages/index.astro', indexAstro);

// 2. Footer.astro
let footerAstro = fs.readFileSync('src/components/Footer.astro', 'utf8');
footerAstro = footerAstro.replace(/Drywall e Divisórias/g, 'Forro Drywall');
footerAstro = footerAstro.replace(/Pontowall Forros e Divisórias/g, 'Pontowall Forros');
fs.writeFileSync('src/components/Footer.astro', footerAstro);

// 3. BaseHead.astro
let baseHeadAstro = fs.readFileSync('src/components/BaseHead.astro', 'utf8');
baseHeadAstro = baseHeadAstro.replace(/Pontowall Forros e Divisórias/g, 'Pontowall Forros');
fs.writeFileSync('src/components/BaseHead.astro', baseHeadAstro);

console.log('Removed all mentions of divisorias.');
