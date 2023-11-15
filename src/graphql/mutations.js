/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCreditCard = /* GraphQL */ `
  mutation CreateCreditCard(
    $input: CreateCreditCardInput!
    $condition: ModelCreditCardConditionInput
  ) {
    createCreditCard(input: $input, condition: $condition) {
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
export const updateCreditCard = /* GraphQL */ `
  mutation UpdateCreditCard(
    $input: UpdateCreditCardInput!
    $condition: ModelCreditCardConditionInput
  ) {
    updateCreditCard(input: $input, condition: $condition) {
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
export const deleteCreditCard = /* GraphQL */ `
  mutation DeleteCreditCard(
    $input: DeleteCreditCardInput!
    $condition: ModelCreditCardConditionInput
  ) {
    deleteCreditCard(input: $input, condition: $condition) {
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
