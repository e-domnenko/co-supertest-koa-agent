'use strict'

/*!
 * imports.
 */

var agent = require('co-supertest').agent
var http = require('http')

/*!
 * exports.
 */

module.exports = server

/**
 * Converts a Koa app into a supertest compatible agent instance.
 *
 * @param {Application} app
 * Koa application instance.
 *
 * @return {TestAgent}
 * co-supertest agent instance.
 */

function server (app) {
  return agent(http.createServer(app.callback()))
}
