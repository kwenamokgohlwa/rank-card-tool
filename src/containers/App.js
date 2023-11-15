import React, { useState, useEffect } from 'react';
import { withAuthenticator, useAuthenticator } from '@aws-amplify/ui-react';
import { API, graphqlOperation } from 'aws-amplify';
import { createCreditCard } from '../graphql/mutations';
import { listCreditCards } from '../graphql/queries';

const App = () => {
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  const [capturedCards, setCapturedCards] = useState([]);

  useEffect(() => {
    fetchCreditCards();
  }, []);

  const fetchCreditCards = async () => {
    try {
      const response = await API.graphql(graphqlOperation(listCreditCards));
      setCapturedCards(response.data.listCreditCards.items);
    } catch (error) {
      console.error('Error fetching credit cards:', error);
    }
  };

  const handleCardSubmit = async (cardDetails) => {
    try {
      await API.graphql(graphqlOperation(createCreditCard, { input: cardDetails }));
      fetchCreditCards();
    } catch (error) {
      console.error('Error adding credit card:', error);
    }
  };

  return (
    <div>
      <h1>Credit Card Validation</h1>
      <button onClick={signOut}>Sign Out</button>
      <div>
        <h2>Captured Cards</h2>
        <ul>
          {capturedCards.map((card) => (
            <li key={card.id}>{card.number}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default withAuthenticator(App);