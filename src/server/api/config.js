
const config = process.env.NODE_ENV == 'production' ? {
    uri: 'mongodb://mongo_instance:27017/sociallyapp',
    expressPORT: 3010
} : {
    uri: 'mongodb://localhost:3001/meteor',
    expressPORT: 3010
};

module.exports = config;
