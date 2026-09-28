const fs = require('fs');
const path = require('path');

const assignments = {
  'como-instalar-forro-isopor.md': '../../assets/forro1.webp',
  'forro-isopor-para-galpao.md': '../../assets/forro3.webp',
  'forro-isopor-quanto-dura.md': '../../assets/forro-eps.webp',
  'forro-isopor-vs-fibra-mineral.md': '../../assets/forro2.webp',
  'quanto-custa-instalar-forro-isopor.md': '../../assets/hero-blog.webp'
};

const blogDir = path.join('src', 'content', 'blog');

for (const [file, image] of Object.entries(assignments)) {
  const filePath = path.join(blogDir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if heroImage already exists
    if (content.includes('heroImage:')) {
      content = content.replace(/heroImage:.*$/m, `heroImage: "${image}"`);
    } else {
      // Add heroImage right before the closing ---
      content = content.replace(/^---\s*$/m, `heroImage: "${image}"\n---`);
    }
    
    fs.writeFileSync(filePath, content);
  }
}

console.log('Adicionadas imagens aos posts do blog.');
