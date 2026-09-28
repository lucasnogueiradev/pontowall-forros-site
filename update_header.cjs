const fs = require('fs');

let content = fs.readFileSync('src/components/Header.astro', 'utf8');

// 1. Imports
content = content.replace(
  "import logoImg from '../assets/logo.webp';",
  "import logoImg from '../assets/logo-light.webp';"
);

// 2. Remove top-bar-logo
const topBarLogoRegex = /<div class="top-bar-logo">[\s\S]*?<\/div>/;
content = content.replace(topBarLogoRegex, '');

// 3. Justify contact
content = content.replace(
  /justify-content: space-between;/g,
  'justify-content: center;'
);

// 4. Update nav-logo
content = content.replace(
  '<a href="/" class="nav-logo-mobile" aria-label="Pontowall Forros">',
  '<a href="/" class="nav-logo" aria-label="Pontowall Forros">'
);

content = content.replace(
  /\.nav-logo-mobile/g,
  '.nav-logo'
);

content = content.replace(
  /\.nav-logo \{\s*display: none;\s*flex-shrink: 0;\s*\}/,
  '.nav-logo {\n    display: flex;\n    align-items: center;\n    flex-shrink: 0;\n    margin-right: 1rem;\n  }'
);

fs.writeFileSync('src/components/Header.astro', content);
console.log('Header atualizado.');
