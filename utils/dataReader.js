const fs = require('fs');
const path = require('path');

function readJsonData(filePath) {

    const fullPath = path.join(
        __dirname,
        '..',
        'test-data',
        filePath
    );

    const data = fs.readFileSync(fullPath, 'utf-8');

    return JSON.parse(data);
}

module.exports = {
    readJsonData
};