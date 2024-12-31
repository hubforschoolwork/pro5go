// import mongoose from 'mongoose';
// import dotenv from 'dotenv';

// dotenv.config();

// console.log('MongoDB URI:', process.env.MONGODB_URI); // Debug line

// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });



// // const connectDB = mongoose.connection;
// // db.on('error', console.error.bind(console, 'connection error:'));

// const connectDB = mongoose.connection;
// connectDB.on('error', console.error.bind(console, 'connection error:'));

// // db.once('open', () => {
// //   console.log('Connected to the database');
// // });


// connectDB.once('open', () => {
//   console.log('Connected to the database');
// });

// export default connectDB;


import mongoose from 'mongoose';
import dotenv from 'dotenv';

// dotenv.config();
dotenv.config({ path: './.env' });


// Function to connect to MongoDB
const connectDB = async () => {
  // try {
  //   await mongoose.connect(process.env.MONGODB_URI, {
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //   });
    try {
      await mongoose.connect("mongodb+srv://winter415land:7%404snowballsk%21@react.yhw2v.mongodb.net/?retryWrites=true&w=majority&",    
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });





    console.log('Connected to the database');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB; // Export the function
