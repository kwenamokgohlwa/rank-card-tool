import { API, graphqlOperation } from 'aws-amplify';
import { createCreditCard } from '../graphql/mutations';
import { listCreditCards } from '../graphql/queries';

export const addCreditCard = async (cardDetails) => {
  try {
    const response = await API.graphql(graphqlOperation(createCreditCard, { input: cardDetails }));
    console.log('Credit card added:', response.data.createCreditCard);
    return response.data.createCreditCard;
  } catch (error) {
    console.error('Error adding credit card:', error);
    throw error;
  }
};

export const getAllCreditCards = async () => {
  try {
    const response = await API.graphql(graphqlOperation(listCreditCards));
    console.log('All credit cards:', response.data.listCreditCards.items);
    return response.data.listCreditCards.items;
  } catch (error) {
    console.error('Error fetching credit cards:', error);
    throw error;
  }
};