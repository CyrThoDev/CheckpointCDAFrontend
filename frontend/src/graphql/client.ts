import { gql } from "@apollo/client";

export const GET_ALL_COUNTRIES_QUERY = gql`
  query GetAllCountries {
    countries {
      emoji
      id
      name
      code
    }
  }
`;
