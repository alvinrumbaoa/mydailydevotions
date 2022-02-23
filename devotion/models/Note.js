const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
	verse: { 
		type: String, 
		required: [true, "Please add Verse"] ,
		unique: true,
		maxlength: [40, "Verse cannot be more than 40 characters"]
	},
	message: {
		type: String,
		required: true,
		maxlength: [200, "Message cannot be more than 200 characters"]
	},
	application: {
		type: String,
		required: true,
		maxlength: [200, "Application cannot be more than 200 characters"]
	}

})

module.exports = mongoose.models.Note || mongoose.model('Note', NoteSchema);