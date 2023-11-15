import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Button from '../common/Button';
import Input from '../common/Input';
import './CreditCardForm.css';

const CreditCardForm = ({ onCardSubmit }) => {
  const [cardDetails, setCardDetails] = useState({
    number: '',
    exp_month: '',
    exp_year: '',
    cvc: '',
    country: '',
  });

  const stripe = useStripe();
  const elements = useElements();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({ ...cardDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { token } = await stripe.createToken(elements.getElement(CardElement), cardDetails);
      onCardSubmit(token.card);
    } catch (error) {
      console.error('Error creating token:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="credit-card-form">
      <Input
        type="text"
        placeholder="Card Number"
        value={cardDetails.number}
        onChange={(e) => handleInputChange(e)}
        name="number"
      />
      <Input
        type="text"
        placeholder="Expiry Month"
        value={cardDetails.exp_month}
        onChange={(e) => handleInputChange(e)}
        name="exp_month"
      />
      <Input
        type="text"
        placeholder="Expiry Year"
        value={cardDetails.exp_year}
        onChange={(e) => handleInputChange(e)}
        name="exp_year"
      />
      <Input
        type="text"
        placeholder="CVC"
        value={cardDetails.cvc}
        onChange={(e) => handleInputChange(e)}
        name="cvc"
      />
      <Input
        type="text"
        placeholder="Country"
        value={cardDetails.country}
        onChange={(e) => handleInputChange(e)}
        name="country"
      />
      <CardElement />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default CreditCardForm;