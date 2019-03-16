const tracks = require('./tracks.json')
const CustomError = require('./CustomError')

module.exports = {

    year: y => {
        const earliestYear = 16
        const thisYear = new Date().getFullYear().toString().slice(2)
        if((y < earliestYear) || (y > thisYear)) {
            throw new CustomError(
                'InvalidYear', 
                `Date is out of range. Dates are two digit format and data is between years ${earliestYear}-${thisYear}`
            )
        }
        return y
    },

    track: t => {
        if(!tracks.includes(t)) {
            throw new CustomError(
                'InvalidTrack', 
                'Track name is either misformatted or not supported. View the documentation for supported track names.'
            )
        }
        return t
    },

    class: c => {
        const validClasses = ['250', '450']
        if(!validClasses.includes(c))
            throw new CustomError('InvalidRaceClass', 'Race class is either misformatted or not supported.')
            
        return c
    },

    moto: m => {
        const validMotos = ['1', '2']
        if(!validMotos.includes(m))
            throw new CustomError('InvalidMoto', 'Moto is either misformatted or not supported.')

        return m
    }
}
