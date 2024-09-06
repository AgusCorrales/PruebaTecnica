const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const NewsSchema = new mongoose.Schema({
    title: String,
    description: String,
    date: Date,
    content: String,
    auth: String,
    likes: [{ type: ObjectId }],
}, { timestamps: true });

const News = mongoose.model('News', NewsSchema);

module.exports = News;