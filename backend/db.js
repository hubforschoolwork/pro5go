import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load .env file
dotenv.config({ path: '../.env' });



const connectDB = async () => {
  try {
    // Check if MONGODB_URI is defined
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI is not defined in the environment variables');
    }

    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log('Connected to the database');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;




// import mongoose from 'mongoose';
// import dotenv from 'dotenv';

// dotenv.config();
// // dotenv.config({ path: './.env' });


// // Function to connect to MongoDB
// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//       console.log('Connected to the database');


//   } catch (error) {
//     console.error('MongoDB connection error:', error.message);
//     process.exit(1); // Exit process with failure
//   }
// };

// export default connectDB; // Export the function
