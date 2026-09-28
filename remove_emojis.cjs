const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.astro') || file.endsWith('.md') || file.endsWith('.js') || file.endsWith('.ts')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('src');
const emojiRegex = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{1F1E6}-\u{1F1FF}\u2B50]/gu;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (emojiRegex.test(content)) {
    content = content.replace(emojiRegex, '');
    fs.writeFileSync(file, content, 'utf8');
    console.log('Removed emojis from', file);
  }
});

console.log('Done.');
