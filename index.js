'use strict'

const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({port: 8080});

// $lab:coverage:off$
server.register({
    register: require('hapi-router'),
    options: {
        routes: 'resources/**/routes.js'
    }
}, function (err) {
    if (err) throw err;
});

if (require.main === module) {

    server.start((err) => {

        if (err) throw err;

        console.log('Server running at:', server.info.uri);
    })
}else {
    module.exports = server;
}
// $lab:coverage:on$