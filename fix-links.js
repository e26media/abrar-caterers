import fs from 'fs';
import path from 'path';

const pagesDir = path.join('src', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx')).map(f => path.join(pagesDir, f));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let updated = content.replace(/href="index\.html"/g, 'to="/"');
  updated = updated.replace(/href="([a-z]+)\.html"/g, 'to="/$1"');
  updated = updated.replace(/<a /g, '<Link ');
  updated = updated.replace(/<\/a>/g, '</Link>');
  if (content !== updated) {
    fs.writeFileSync(file, updated);
    console.log('Fixed links in ' + file);
  }
});
