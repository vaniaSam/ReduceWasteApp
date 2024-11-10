// Home.js
import React, { useEffect, useState } from 'react';
import { db } from './firebase'; // Import Firebase database
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';

function Home() {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    const fetchFoodItems = async () => {
      const foodCollection = collection(db, 'food'); // 'food' collection in Firestore
      const foodSnapshot = await getDocs(foodCollection);
      const foodList = foodSnapshot.docs.map(doc => doc.data());
      setFoodItems(foodList);
    };
    fetchFoodItems();
  }, []);

  return (
    <div className="home">
      <h1>Welcome to the Food Donation App</h1>
      <p>Donate food and help others in your community!</p>

      <div className="food-list">
        <h2>Available Food Donations:</h2>
        {foodItems.length === 0 ? (
          <p>No food donations available at the moment. Please check back later!</p>
        ) : (
          foodItems.map((food, index) => (
            <div key={index} className="food-item">
              <h3>{food.name}</h3>
              <p>Quantity: {food.quantity}</p>
              <p>Expiration Date: {food.expirationDate}</p>
            </div>
          ))
        )}
      </div>

      <Link to="/donate">
        <button>Donate Food</button>
      </Link>
    </div>
  );
}

export default Home;
