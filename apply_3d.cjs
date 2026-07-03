const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'home.html');
let html = fs.readFileSync(filePath, 'utf8');

const tiltAttrs = 'data-tilt data-tilt-max="15" data-tilt-speed="400" data-tilt-glare="true" data-tilt-max-glare="0.2" data-tilt-perspective="1000"';

const targets = [
    'stat-card',
    'value-card',
    'expertise-item',
    'accordion-item',
    'tech-detailed-card',
    'hassel-item',
    'feature-card',
    'product-card'
];

targets.forEach(target => {
    // Find class="... target ..." and append glass-3d-card and tilt attrs.
    // Ensure we don't apply it multiple times if run again.
    const regex = new RegExp(`class="([^"]*\\b${target}\\b[^"]*)"(?!.*data-tilt)`, 'g');
    html = html.replace(regex, (match, p1) => {
        if(p1.includes('glass-3d-card')) return match;
        return `class="${p1} glass-3d-card" ${tiltAttrs}`;
    });
});

const tiltScript = `<script src="https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.8.0/vanilla-tilt.min.js"></script>\n</body>`;
if (!html.includes('vanilla-tilt.min.js')) {
    html = html.replace('</body>', tiltScript);
}

fs.writeFileSync(filePath, html);
console.log('3D effects applied successfully to home.html.');
