'use strict';
const mochaPlugin = require('serverless-mocha-plugin')
const expect = mochaPlugin.chai.expect
const wrapped = mochaPlugin.getWrapper('getClassMoto', '/index.js', 'getClassMoto')

const lapTimes = require('../lib/dev/seed/laptimes.json')

describe('getClassMoto', () => {

  it('should return 422 if moto path param is invalid', () => {
    const pathParameters = { year: '18', track: 'WICK-338', class: '450', moto: '3' }
    return wrapped.run({ pathParameters }).then((res) => {
      expect(res).to.not.be.empty
      expect(res.statusCode).to.equal(422)
      expect(res.body).to.equal(JSON.stringify({ message: 'Moto is either misformatted or not supported.' }))
    })
  })

  it('should return 200 & moto data if path parameters exist', () => {
    const pathParameters = { year: '18', track: 'WICK-338', class: '450', moto: '2' }
    return wrapped.run({ pathParameters }).then((res) => {
      const body = JSON.parse(res.body)
      expect(res).to.not.be.empty
      expect(res.statusCode).to.equal(200)
      expect(body).to.have.property('data')
      expect(body.data.riderData).to.have.deep.members(lapTimes[1].riderData)
      expect(body.data.moto).to.equal(parseInt(pathParameters.moto))
    })
  })

  it('should return 200 & empty body if path parameters does not exist', () => {
    const pathParameters = { year: '18', track: 'WICK-338', class: '450', moto: '1' }
    return wrapped.run({ pathParameters }).then((res) => {
      console.log(`res: ${res.body}`)
      const body = JSON.parse(res.body)
      expect(res).to.not.be.empty
      expect(res.statusCode).to.equal(200)
      expect(body).to.be.empty
    })
  })
})
