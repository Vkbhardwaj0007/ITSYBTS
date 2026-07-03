const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Replace old logo pattern
    content = content.replace(
        /<img src="images\/logo\.svg" alt="[^"]*" class="logo-img[^"]*">/g,
        '<img src="images/new_logo_nobg.png" alt="ITSYBTS TECHNOLOGY" style="height: 65px; width: auto; object-fit: contain; margin-left: -10px;" class="logo-animated">'
    );

    // Replace specific alternate styles
    content = content.replace(
        /<img src="images\/logo\.svg" alt="[^"]*" style="height: 45px;">/g,
        '<img src="images/new_logo_nobg.png" alt="ITSYBTS TECHNOLOGY" style="height: 45px; width: auto; object-fit: contain; margin-left: -10px;" class="logo-animated">'
    );

    // Also update the ones in index.html and home.html that were already updated
    content = content.replace(
        /<img src="images\/new_logo_nobg\.png" alt="ITSYBTS TECHNOLOGY" style="height: 65px; width: auto; object-fit: contain; margin-left: -10px;">/g,
        '<img src="images/new_logo_nobg.png" alt="ITSYBTS TECHNOLOGY" style="height: 65px; width: auto; object-fit: contain; margin-left: -10px;" class="logo-animated">'
    );

    // There's one more case in careers.html: class="logo-img"
    content = content.replace(
        /<img src="images\/logo\.svg" alt="itsybts" class="logo-img">/g,
        '<img src="images/new_logo_nobg.png" alt="ITSYBTS TECHNOLOGY" style="height: 65px; width: auto; object-fit: contain; margin-left: -10px;" class="logo-animated">'
    );
    
    // photo_guide.html has alt="ITSYBTS TECHNOLOGY Logo"
    content = content.replace(
        /<img src="images\/logo\.svg" alt="ITSYBTS TECHNOLOGY Logo">/g,
        '<img src="images/new_logo_nobg.png" alt="ITSYBTS TECHNOLOGY" style="height: 65px; width: auto; object-fit: contain; margin-left: -10px;" class="logo-animated">'
    );

    fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Logos updated successfully across all HTML files.');
