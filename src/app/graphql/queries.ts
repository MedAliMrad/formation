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
export const FILTER_FORMATEURS_WITH_EXP = gql`
  query FilterFormateurWithExp($filterExp: filterFormateurInput!) {
    filterFormateurWithExp(filterExp: $filterExp) {
      id
      name
      lastname
      email
      tarifConventionne
    }
  }
`;

export const FILTER_FORMATEURS_WITHOUT_EXP = gql`
  query FilterFormateurWithoutExp($filterWithoutExp:filterFormateursWithoutExpInput!){
  filterFormateurWithoutExp(filterWithoutExp:$filterWithoutExp){
  id
  name
  lastname
  email
  competence
  tarifConventionne}
  }
`;
