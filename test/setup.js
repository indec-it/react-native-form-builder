process.env.NODE_ENV = 'test';

require('should');
require('babel-register')({
    ignore: /node_modules\/(?!react-native|react-router-native|@indec)/
});
