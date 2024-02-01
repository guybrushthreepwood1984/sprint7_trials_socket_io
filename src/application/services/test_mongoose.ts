import mongoose, { Schema, Document } from 'mongoose';

interface IRestaurant extends Document {
  name: string;
}

const RestaurantSchema: Schema = new mongoose.Schema({
  name: { type: String, required: true }
});

const Restaurant = mongoose.model<IRestaurant>('ny', RestaurantSchema);

async function connect() {
  await mongoose.connect('mongodb://127.0.0.1/restaurants');
}

connect();

async function tryingToFindSth() {
  try {
    const restaurants = await Restaurant.find();
    console.log(restaurants);
  } catch (error) {
    console.log(error);
  }
}

tryingToFindSth();

// const Restaurant = mongoose.model<IRestaurant>('ny', RestaurantSchema);

// async function connect() {
//   await mongoose.connect('mongodb://127.0.0.1/restaurants');
// }

// connect();

// async function tryingToFindSth() {
//   try {
//     const restaurants = await Restaurant.find();
//     console.log(restaurants);
//   } catch (error) {
//     console.log(error);
//   }
// }

tryingToFindSth();
