import { API } from 'aws-amplify';

export const validateCard = async (cardDetails) => {
  try {
    const response = await API.post('yourApiName', '/validate-card', {
      body: cardDetails,
    });
    return response;
  } catch (error) {
    console.error('Error validating card:', error);
    throw error;
  }
};