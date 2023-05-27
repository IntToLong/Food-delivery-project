const mongoose = require('mongoose');

const connectDB = async () => {
	try {
		const connectionString =
			'mongodb://natalial:LK1QXAujioK9CJuS1tfTqVy1tgEXv2km3PELuuOW9ObnvDTsT7wpfjsvJS3vxRho7QzO5uEQ7s7FACDbvpFl1w==@natalial.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&replicaSet=globaldb&maxIdleTimeMS=120000&appName=@natalial@/test'; 
		await mongoose.connect(connectionString, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log('MongoDB connected!');
	} catch (error) {
		console.error('MongoDB connection error:', error);
		process.exit(1);
	}
};

module.exports = connectDB;


