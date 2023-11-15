<<<<<<< HEAD
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
=======
import { API } from 'aws-amplify';

export const validateCard = async (cardDetails) => {
  try {
    const response = await API.post('', '/validate-card', {
      body: cardDetails,
    });
    return response;
  } catch (error) {
    console.error('Error validating card:', error);
>>>>>>> 14db01c8b4f9e23b90c45a7f1f15fda22810efef
    throw error;
  }
};