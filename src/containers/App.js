import React, { useState, useEffect } from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { API, graphqlOperation } from 'aws-amplify';
import { createCreditCard, updateCreditCard } from '../graphql/mutations';
import { listCreditCards } from '../graphql/queries';
import { CreditCardCreateForm, CreditCardUpdateForm } from '../ui-components';

const App = () => {
  const [capturedCards, setCapturedCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

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

  const handleCardCreate = async (cardDetails) => {
    try {
      await API.graphql(graphqlOperation(createCreditCard, { input: cardDetails }));
      fetchCreditCards(); // Update the list of captured cards
    } catch (error) {
      console.error('Error adding credit card:', error);
    }
  };

  const handleCardUpdate = async (cardDetails) => {
    try {
      await API.graphql(graphqlOperation(updateCreditCard, { input: cardDetails }));
      fetchCreditCards(); // Update the list of captured cards
      setSelectedCard(null); // Reset selected card after update
    } catch (error) {
      console.error('Error updating credit card:', error);
    }
  };

  const handleEditClick = (card) => {
    setSelectedCard(card);
  };

  return (
    <div>
      <h1>Credit Card Validation</h1>
      <CreditCardCreateForm onCreate={handleCardCreate} />
      {selectedCard && (
        <CreditCardUpdateForm card={selectedCard} onUpdate={handleCardUpdate} onCancel={() => setSelectedCard(null)} />
      )}
      <div>
        <h2>Captured Cards</h2>
        <ul>
          {capturedCards.map((card) => (
            <li key={card.id}>
              {card.number}{' '}
              <button onClick={() => handleEditClick(card)}>Edit</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default withAuthenticator(App);