import { gql } from "@apollo/client";

export const GET_COUNTRY_BY_CODE = gql`
  query GetCountry($code: String!) {
    country(code: $code) {
      code
      continent {
        id
        name
      }
      emoji
      id
      name
    }
  }
`;
