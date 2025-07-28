import { gql } from "@apollo/client";

export const CREATE_CLIENT = gql `
mutation CreateClient($input:CreateClient!){
createClient(input:$input){
id 
name
lastname
email
phone
entreprise}}`