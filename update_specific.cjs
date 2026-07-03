const fs = require('fs');

let content = fs.readFileSync('index.html', 'utf8');

const updates = [
    { title: 'WiFi', url: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500' },
    { title: 'Bluetooth', url: 'https://images.unsplash.com/photo-1585827552668-d0728b355e37?w=500' },
    { title: 'RFID', url: 'https://images.unsplash.com/photo-1621252171032-15f20959f939?w=500' }
];

let blocks = content.split("url('");
for (let i = 1; i < blocks.length; i++) {
    for (let update of updates) {
        // Look ahead in the next 1000 characters for the title
        if (blocks[i].substring(0, 1000).includes(update.title)) {
            const closingQuoteIdx = blocks[i].indexOf("')");
            if (closingQuoteIdx !== -1) {
                blocks[i] = update.url + blocks[i].substring(closingQuoteIdx);
                console.log('Updated ' + update.title);
            }
        }
    }
}

fs.writeFileSync('index.html', blocks.join("url('"));
