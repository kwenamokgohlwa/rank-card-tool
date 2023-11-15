/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCreditCard = /* GraphQL */ `
  query GetCreditCard($id: ID!) {
    getCreditCard(id: $id) {
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
export const listCreditCards = /* GraphQL */ `
  query ListCreditCards(
    $filter: ModelCreditCardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCreditCards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
