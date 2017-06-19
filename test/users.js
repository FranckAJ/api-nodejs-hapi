'use strict'


const lab = exports.lab = require('lab').script();
const { expect } = require('code');

const server = require('../');

lab.describe('testes do resource de users', () => {
    lab.test('deve retornar sucesso', () => {
        return server.inject({
            method: 'POST',
            url: '/api/v1/users',
            payload: {
                username: 'franck2',
                password: '123'
            }
        })
            .then((res) => {
                expect(res.statusCode).to.equal(200);
                expect(res.result).to.equal({ success: true });
        })
    });

    lab.test('Deve retornar erro ao tentar adicionar um usário existente', () => {
        return server.inject({
            method: 'POST',
            url: '/api/v1/users',
            payload: {
                username: 'franck',
                password: '123'
            }
        })
            .then((res) => {
                expect(res.statusCode).to.equal(422);
                expect(res.result.message).to.equal('Usuário já existe');
        })
    })
})

