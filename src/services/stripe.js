import { loadStripe } from '@stripe/stripe-js';

const stripe = loadStripe('your-publishable-key');

export const createPaymentIntent = async (amount) => {
  try {
    const intent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
    });
    return intent;
  } catch (error) {
    console.error('Error creating payment intent:', error);
    throw error;
  }
};