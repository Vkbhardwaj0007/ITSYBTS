const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir);

const htmlFiles = files.filter(f => f.endsWith('.html'));

htmlFiles.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Remove canvas tag
    content = content.replace(/<!-- Crucrite Background Canvas -->\s*<canvas id="circuit-bg"><\/canvas>/g, '');
    content = content.replace(/<canvas id="circuit-bg"><\/canvas>/g, '');

    // Remove the JS block
    const jsRegex = /\/\/\s*Crucrite \(Circuit\) Background Animation[\s\S]*?\}\)\(\);/g;
    content = content.replace(jsRegex, '');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Processed ${file}`);
});

// Also remove from index.css
const cssPath = path.join(dir, 'index.css');
if (fs.existsSync(cssPath)) {
    let cssContent = fs.readFileSync(cssPath, 'utf8');
    const cssRegex = /\/\* High-Tech Circuit Background \(Crucrite\) \*\/[\s\S]*?#circuit-bg\s*\{[\s\S]*?\}/g;
    cssContent = cssContent.replace(cssRegex, '');
    fs.writeFileSync(cssPath, cssContent, 'utf8');
    console.log(`Processed index.css`);
}

console.log("Done removing animation from the entire website.");
