const fs = require('fs');
let content = fs.readFileSync('src/pages/index.astro', 'utf8');

const depoimentosRegex = /<!-- ═══════════════ DEPOIMENTOS ═══════════════ -->[\s\S]*?<\/section>/;
content = content.replace(depoimentosRegex, '');

fs.writeFileSync('src/pages/index.astro', content);
console.log('Depoimentos removidos.');
