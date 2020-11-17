const fs = require('fs-extra');
const path = require('path');

const reportPath = path.join(__dirname, '../reports');

fs.emptyDirSync(reportPath);
