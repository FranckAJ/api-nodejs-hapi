'use strict'

const Boom = require('boom');

exports.create = (request, reply) => {
    const { username } = request.payload;

    if (username === 'franck') {
        reply(Boom.badData('Usuário já existe'));
    }else {
        reply({success: true});
    }
}