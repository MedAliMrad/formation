import { gql } from "@apollo/client";
export const SEARCH_CLIENTS = gql`
  query SearchClients($searchTerm: String!) {
    searchClients(searchTerm: $searchTerm) {
      id
      name
      lastname
      phone
      entreprise
    }
  }
`;
