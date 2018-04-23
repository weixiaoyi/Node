module.exports = {
    apps: [
        {
            name: 'wei_xiaoyi.com',
            script: 'babel-node ./wei_xiaoyi.com/bin/www.js',
        }
    ]
};

// babel-node www.js --presets es2015,stage-2
// babel-node www.js --presets es2015,stage-2
// pm2 start www.js --interpreter babel-node