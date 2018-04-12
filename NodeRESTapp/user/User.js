var mongoose = require('mongoose');  

//Using Mongoose ORM to work with Mongo DB

var UserSchema = new mongoose.Schema(
	{  
	  name: String,
	  email: String,
	  password: String
	}
);
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');