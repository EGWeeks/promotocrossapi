'use strict'
const mochaPlugin = require('serverless-mocha-plugin')
const expect = mochaPlugin.chai.expect
const wrapped = mochaPlugin.getWrapper('getYearTrack', '/index.js', 'getYearTrack')

const lapTimes = require('../lib/dev/seed/laptimes.json')

describe('getYearTrack', () => {

  it('should return 422 if year path param is invalid', () => {
    const pathParameters = { year: '2018', track: 'WICK-338' }
    const earliestYear = 14
    const thisYear = new Date().getFullYear().toString().slice(2)
    return wrapped.run({ pathParameters }).then((res) => {
      expect(res).to.not.be.empty
      expect(res.statusCode).to.equal(422)
      expect(res.body).to.equal(
        JSON.stringify({ message: `Date is out of range. Dates are two digit format and data is between years ${earliestYear}-${thisYear}` })
      )
    })
  })

  it('should return 422 if track path param is invalid', () => {
    const pathParameters = { year: '18', track: 'HEMONDS-MOTO-X-PARK' }
    return wrapped.run({ pathParameters }).then((res) => {
      expect(res).to.not.be.empty
      expect(res.statusCode).to.equal(422)
      expect(res.body).to.equal(
        JSON.stringify({ message: 'Track name is either misformatted or not supported. View the documentation for supported track names.' })
      )
    })
  })

  it('should return 200 & track data if path parameters exist', () => {
    const pathParameters = { year: '18', track: 'WICK-338' }
    return wrapped.run({ pathParameters }).then((res) => {
      const body = JSON.parse(res.body)
      expect(res).to.not.be.empty
      expect(res.statusCode).to.equal(200)
      expect(body).to.have.property('data')
      expect(body.data).to.have.deep.members([ lapTimes[1] ])
    })
  })
})
