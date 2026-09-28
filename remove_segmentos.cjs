const fs = require('fs');
let content = fs.readFileSync('src/pages/index.astro', 'utf8');

const startIdx = content.indexOf('<!-- Segmentos -->');
if (startIdx !== -1) {
  // Find the end of this div which is before the end of the section
  const endMarker = '</div>\n        </div>\n      </section>';
  const endIdx = content.indexOf(endMarker, startIdx);
  
  if (endIdx !== -1) {
    const before = content.substring(0, startIdx);
    const after = content.substring(endIdx);
    fs.writeFileSync('src/pages/index.astro', before + after);
    console.log('Segmentos removidos.');
  } else {
    console.log('End marker not found');
  }
} else {
  console.log('Start marker not found');
}
