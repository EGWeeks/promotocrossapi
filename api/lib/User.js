class User {

	constructor(db, stage) {
		this.db = db
		this.stage = stage
		this.lapTimesTable = `pmxapi-laptimes-${this.stage}`
	}

	async queryByYearTrack(year, track) {
		const yearTrack = {
			TableName: this.lapTimesTable,
			KeyConditionExpression: 'yearTrack = :yearTrack',
			ExpressionAttributeValues: {
				':yearTrack': `${year}_${track}`
			}	
		}
		return await this.db.query(yearTrack).promise()
	}

	async queryByClass(year, track, raceClass) {
		const yearTrackClass = {
			TableName: this.lapTimesTable,
			KeyConditionExpression: 'yearTrack = :yearTrack AND begins_with(classMoto, :classMoto)',
			ExpressionAttributeValues: {
				':yearTrack': `${year}_${track}`,
				':classMoto': raceClass
			}	
		}
		return await this.db.query(yearTrackClass).promise()
	}

	async getClassMoto(year, track, raceClass, moto) {
		const classMoto = {
			TableName: this.lapTimesTable,
			Key: {
				yearTrack: `${year}_${track}`,
				classMoto: `${raceClass}_${moto}`
			}
		}
		return await this.db.get(classMoto).promise()
	}   
}

module.exports = User;
