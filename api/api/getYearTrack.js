const { STAGE, REGION, DBURL } = process.env
const AWS = require('aws-sdk')
const dynamo = new AWS.DynamoDB.DocumentClient({ region: REGION, endpoint: DBURL })

const User = require('../lib/User')
const user = new User(dynamo, STAGE)
const Response = require('../lib/Response')
const valid = require('../lib/validate')


module.exports = async event => {
	const res = new Response()
	try {
		console.log(`Event: ${JSON.stringify(event, null, 2)}`)

		const year = valid.year(event.pathParameters.year)
		const track = valid.track(event.pathParameters.track)

		const { Items } = await user.queryByYearTrack(year, track)

		res.setObj(200, { data: Items } )
	} catch ({ name, message }) {
		res.setBody({ message })

		if (name === 'InvalidYear' || name === 'InvalidTrack')
			res.setStatusCode(422)
		else
			res.setStatusCode(400)
	}
	return res.getObj()
}
