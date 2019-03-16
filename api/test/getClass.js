'use strict';
const mochaPlugin = require('serverless-mocha-plugin')
const expect = mochaPlugin.chai.expect
const wrapped = mochaPlugin.getWrapper('getClass', '/index.js', 'getClass')

const lapTimes = require('../lib/dev/seed/laptimes.json')

describe('getClass', () => {

  it('should return 422 if class path param is invalid', () => {
    const pathParameters = { year: '18', track: 'WICK-338', class: '125' }
    return wrapped.run({ pathParameters }).then((res) => {
      expect(res).to.not.be.empty
      expect(res.statusCode).to.equal(422)
      expect(res.body).to.equal(JSON.stringify({ message: 'Race class is either misformatted or not supported.' }))
    })
  })

  it('should return 200 & class data if path parameters exist', () => {
    const pathParameters = { year: '18', track: 'WICK-338', class: '450' }
    return wrapped.run({ pathParameters }).then((res) => {
      const body = JSON.parse(res.body)
      expect(res).to.not.be.empty
      expect(res.statusCode).to.equal(200)
      expect(body).to.have.property('data')
      expect(body.data).to.have.deep.members([ lapTimes[1] ])
      expect(body.data[0].class).to.equal(parseInt(pathParameters.class))
    })
  })
})
