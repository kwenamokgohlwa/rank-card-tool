import React, { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CreditCardForm from '../../components/CreditCardForm/CreditCardForm';
import './App.css';

const stripePromise = loadStripe('your-publishable-key'); // Replace with your actual Stripe publishable key

const App = () => {
  const [capturedCards, setCapturedCards] = useState([]);

  const handleCardSubmit = (card) => {
    // Check if the card is already captured
    if (!capturedCards.some((c) => c.number === card.number)) {
      setCapturedCards([...capturedCards, card]);
    }
  };

  return (
    <div>
      <h1>Credit Card Validation</h1>
      <Elements stripe={stripePromise}>
        <CreditCardForm onCardSubmit={handleCardSubmit} />
      </Elements>
      <div>
        <h2>Captured Cards</h2>
        <ul>
          {capturedCards.map((card, index) => (
            <li key={index}>{card.number}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;