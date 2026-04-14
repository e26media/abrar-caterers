const fs = require('fs');
const path = require('path');

function htmlToJsx(html) {
  // Very basic converter for this specific project
  let jsx = html
    .replace(/class=/g, 'className=')
    .replace(/for=/g, 'htmlFor=')
    .replace(/<!--[\s\S]*?-->/g, '') // Remove comments
    .replace(/<img(.*?)>/g, (match) => {
      if (!match.endsWith('/>')) {
        return match.replace(/>$/, ' />');
      }
      return match;
    })
    .replace(/<source(.*?)>/g, (match) => {
      if (!match.endsWith('/>')) {
        return match.replace(/>$/, ' />');
      }
      return match;
    })
    .replace(/<input(.*?)>/g, (match) => {
      if (!match.endsWith('/>')) {
        return match.replace(/>$/, ' />');
      }
      return match;
    })
    .replace(/<hr(.*?)>/g, (match) => {
      if (!match.endsWith('/>')) {
        return match.replace(/>$/, ' />');
      }
      return match;
    })
    .replace(/<br(.*?)>/g, (match) => {
      if (!match.endsWith('/>')) {
        return match.replace(/>$/, ' />');
      }
      return match;
    })
    .replace(/style="([^"]*)"/g, (match, p1) => {
      const styles = p1.split(';').filter(s => s.trim() !== '');
      const reactStyles = styles.map(s => {
        let [key, value] = s.split(':');
        if (!key || !value) return '';
        key = key.trim().replace(/-([a-z])/g, (m, g1) => g1.toUpperCase());
        return `${key}: '${value.trim()}'`;
      }).filter(Boolean).join(', ');
      return `style={{ ${reactStyles} }}`;
    });

  // Extract body content inside <body>...</body>, ignoring scripts and nav/footer
  const bodyMatch = jsx.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (!bodyMatch) return '';
  let content = bodyMatch[1];

  // Remove nav, footer, scripts
  content = content.replace(/<nav[\s\S]*?<\/nav>/i, '');
  content = content.replace(/<footer[\s\S]*?<\/footer>/i, '');
  content = content.replace(/<script[\s\S]*?<\/script>/ig, '');

  return content.trim();
}

const filesToConvert = ['menu.html', 'gallery.html', 'contact.html'];

filesToConvert.forEach(file => {
  const name = file.split('.')[0];
  const ComponentName = name.charAt(0).toUpperCase() + name.slice(1);
  const inPath = path.join('..', 'abrar-caterers-main', file);
  
  if (!fs.existsSync(inPath)) return;
  
  const content = fs.readFileSync(inPath, 'utf8');
  
  // Extract CSS
  const styleMatch = content.match(/<style>([\s\S]*?)<\/style>/);
  if (styleMatch) {
    fs.writeFileSync(`src/pages/${ComponentName}.css`, styleMatch[1]);
  }
  
  // Convert HTML
  const jsxContent = htmlToJsx(content);
  
  const componentCode = `import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './${ComponentName}.css';

const ${ComponentName} = () => {
  useEffect(() => {
    // Reveal logic
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 80);
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el));
    
    // Page specific logic
    ${file === 'menu.html' ? `
    const tabs=document.querySelectorAll('.menu-tab');
    const sections=document.querySelectorAll('.menu-section');
    tabs.forEach(tab=>{
      tab.addEventListener('click', ()=>{
        tabs.forEach(t=>t.classList.remove('active'));
        sections.forEach(s=>s.classList.remove('active'));
        tab.classList.add('active');
        const target=document.getElementById(tab.getAttribute('data-target'));
        if(target) target.classList.add('active');
      });
    });
    ` : ''}
    ${file === 'gallery.html' ? `
    const btns=document.querySelectorAll('.filter-btn');
    const items=document.querySelectorAll('.gallery-item');
    btns.forEach(btn=>{
      btn.addEventListener('click', ()=>{
        btns.forEach(b=>b.classList.remove('active'));
        btn.classList.add('active');
        const f=btn.getAttribute('data-filter');
        items.forEach(item=>{
          if(f==='all' || item.getAttribute('data-category')===f) item.style.display='block';
          else item.style.display='none';
        });
      });
    });
    const lb=document.getElementById('lightbox');
    const lbImg=document.getElementById('lb-img');
    const lbClose=document.getElementById('lb-close');
    document.querySelectorAll('.gallery-item').forEach(item=>{
      item.addEventListener('click', ()=>{
        const src=item.querySelector('img').src;
        if(lbImg) lbImg.src=src;
        if(lb) lb.classList.add('open');
      });
    });
    if(lbClose) lbClose.addEventListener('click', ()=>lb.classList.remove('open'));
    if(lb) lb.addEventListener('click', (e)=>{if(e.target===lb) lb.classList.remove('open')});
    ` : ''}

    return () => {
      document.querySelectorAll('.reveal').forEach((el) => obs.unobserve(el));
    };
  }, []);

  return (
    <div className="bg-[var(--obsidian)] text-[var(--cream)] pb-0 font-['EB_Garamond',_Georgia,_serif]">
      <Navbar />
      ${jsxContent}
      <Footer />
    </div>
  );
};

export default ${ComponentName};
`;

  fs.writeFileSync(`src/pages/${ComponentName}.jsx`, componentCode);
  console.log(`Converted ${file}`);
});
