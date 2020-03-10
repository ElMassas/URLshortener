const mongoosse = require('mongoose')
const shortId = require('shortid')


const shortURLSchema = new mongoosse.Schema({
    big:{
        type: String,
        required: true
    },
    small:{
        type: String,
        required: true,
        default: shortId.generate
    },
    clicks: {
        type: Number,
        required: true,
        default: 0
    }
})

module.exports = mongoosse.model('shortURL', shortURLSchema)