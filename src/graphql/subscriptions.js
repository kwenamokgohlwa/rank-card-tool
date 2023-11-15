/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCreditCard = /* GraphQL */ `
  subscription OnCreateCreditCard(
    $filter: ModelSubscriptionCreditCardFilterInput
  ) {
    onCreateCreditCard(filter: $filter) {
      id
      owner
      number
      exp_month
      exp_year
      cvc
      country
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateCreditCard = /* GraphQL */ `
  subscription OnUpdateCreditCard(
    $filter: ModelSubscriptionCreditCardFilterInput
  ) {
    onUpdateCreditCard(filter: $filter) {
      id
      owner
      number
      exp_month
      exp_year
      cvc
      country
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteCreditCard = /* GraphQL */ `
  subscription OnDeleteCreditCard(
    $filter: ModelSubscriptionCreditCardFilterInput
  ) {
    onDeleteCreditCard(filter: $filter) {
      id
      owner
      number
      exp_month
      exp_year
      cvc
      country
      createdAt
      updatedAt
      __typename
    }
  }
`;
