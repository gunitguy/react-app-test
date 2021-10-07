const path = require('path');
const cwd = process.cwd();

const assetsPath = path.resolve(cwd, 'src', 'assets', 'styles', 'main');

module.exports = {
    data: '@import "' + assetsPath + '";',
    includePaths: [
        path.resolve(cwd, 'node_modules'),
        path.resolve(cwd, 'src')
    ]
};
