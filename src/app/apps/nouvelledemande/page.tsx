"use client";

import NewForm from "@/app/components/newRequestForm";
import SubmittedRequestsTable from "@/app/apps/tableDemande/page";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {gql,useMutation} from "@apollo/client";
import client from "../../../../lib/apollo-client";

const CREATE_TRAINING_REQUEST = gql `
mutation CreateTrainingRequest($input: CreateTrainingRequestInput!) {
  createTrainingRequest(createTrainingRequestInput: $input) {
    requestNumber
    code
    intitule
    client {
      id
      name
    }
  }
}
`;

const GET_CLIENT =gql`
query GetClients{
clients {id
name
lastname
email
phone
entreprise}
}`

export default function NewRequestPage() {
  const router =useRouter();
  const [createTrainingRequest]=useMutation(CREATE_TRAINING_REQUEST);
  const handleFormSubmit = async(FormData:any) => {
    try{
      const response = await createTrainingRequest({
        variables:{
          input:{
            ...FormData,
            code:FormData.code,
            client:parseInt(FormData.client),
            intitule:FormData.intitule,
            programme:FormData.programme? FormData.programme.name : null,
            duration:parseInt(FormData.duration),
            startDate:FormData.startDate,
            endDate:FormData.endDate,
            address:FormData.address,
            clientPrice:parseFloat(FormData.clientPrice),
            comment:FormData.comment,
            trainer:FormData.trainer,
            clientFees:parseFloat(FormData.clientFees),
            logisticCost:parseFloat(FormData.logisticCost),
            trainerRate:parseFloat(FormData.trainerRate),
            status:FormData.status,
          },
        },
      });
      console.log("Mrigel",response.data.createTrainingRequest)
      router.push("/apps/tableDemande");}
      catch(error){console.error('fama mochkla',error)}
  }

  return (
    <div className=" font-sans h-full">
      <div className="container mx-auto p-6 ">
        <h1 className="text-3xl font-bold text-center">
          Formulaire de Demande de Formation
        </h1>
        <NewForm onSubmitRequest={handleFormSubmit}/>
      </div>
    </div>
  );
}
