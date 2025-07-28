"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { gql,useQuery } from "@apollo/client";

interface Client{
  id:number;
  name:string;
  lastname:string;
  phone:string;
  entreprise:string;
};

interface TrainingRequest{
  requestNumber:string;
  code:string;
  intitule:string;
  startDate:string;
  endDate:string;
  client:Client;
  clientPrice:number;
  status:string;
}

interface GetTrainingRequestSResponse{
  trainingRequests:TrainingRequest[];
}

export default function SubmittedRequestsTable() {

  const GET_TRAINING_REQUESTS = gql `
  query{
  trainingRequests{
  requestNumber
  code
  intitule
  startDate
  endDate
  clientPrice
  status
  client{
  id 
  name
  lastname
  phone
  entreprise
  }}
  }
  `;

  const {data,loading,error} = useQuery<GetTrainingRequestSResponse>(GET_TRAINING_REQUESTS)

  if (loading) return<p className="text-blue-600 text-center text-6xl mt-60">Loading...</p>
  if (error) return <p className="text-red-600 text-center text-6xl mt-60">Error:{error.message}</p>

  const headerT = [
    "ID-Demande",
    "Client",
    "Foramtion",
    "Dates",
    "Prix de vente",
    "Statut",
  ];
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case "En cours":
        return "bg-yellow-500 text-black";
      case "Traité":
        return "bg-green-500";
      case "Sourcing":
        return "bg-blue-500";
      case "Confirmée":
        return "bg-green-200";
      case "Expiré":    
        return "bg-white";
      case "Annulation client":
        return "bg-red-500";
    case "Annulation formateur":
        return "bg-red-500";
    }
  };
   const formatDate = (start: Date | string, end: Date | string) => {
    const startDate = typeof start === "string" ? new Date(start) : start;
    const endDate = typeof end === "string" ? new Date(end) : end;
    return `${startDate.toLocaleDateString()} → ${endDate.toLocaleDateString()}`;
  };
  return (
    <div>
      <h2 className="mt-5 mx-3 mb-2 text-2xl text-black font-bold">
        Demande Soumises
      </h2> 
      {/*Desktop view*/}
      <div className="hidden md:block ">
        <table className="min-w-full border-spacing-0 rounded-lg overflow-hidden ">
          <thead className="bg-gray-200 text-black text-left">
            <tr>
              {headerT.map((headerT) => (
                <th key={headerT} className="border px-4 py-2">
                  {headerT}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className=" text-black divide-y divide-gray-300">
            {data?.trainingRequests.map((req, index) => {
              const start =
                typeof req.startDate === "string"
                  ? new Date(req.startDate)
                  : req.startDate;
              const end =
                typeof req.endDate === "string"
                  ? new Date(req.endDate)
                  : req.endDate;
              return (
                <tr className="bg-gray-50" key={index}>
                  <td className=" py-4 px-2 ">{index + 1}</td>
                  <td className=" py-4 px-2 ">{req.client.name}</td>
                  <td className=" py-4 px-2 ">{req.intitule}</td>
                  <td className="py-4 px-6">
                    {start.toLocaleDateString()} → {end.toLocaleDateString()}
                  </td>

                  <td className=" py-4 px-2 ">{req.clientPrice}</td>
                  <td className=" py-4 px-2 text-center  ">
                    <span
                      className={`${getStatusColor(
                        req.status
                      )} px-3 py-1 inline-flex rounded-full text-sm`}
                    >
                      {req.status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/*Mobile view*/}
       <div className="lg:hidden space-y-4">
        {data?.trainingRequests.map((request, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md border border-gray-200 p-4">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{request.intitule}</h3>
                <p className="text-sm text-gray-600">ID: {request.requestNumber}</p>
              </div>
              <span
                className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(request.status)}`}
              >
                {request.status}
              </span>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium text-gray-500">Client:</span>
                <span className="text-sm text-gray-900">{request.client.name}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-sm font-medium text-gray-500">Dates:</span>
                <span className="text-sm text-gray-900">{formatDate(request.startDate, request.endDate)}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-sm font-medium text-gray-500">Prix:</span>
                <span className="text-sm font-semibold text-gray-900">
                  {request.clientPrice.toLocaleString("fr-FR")} €
                </span>
              </div>
            </div>
          </div>
        ))} 
      </div>
<div className="mt-6 text-center">
  <Link href="/apps/nouvelledemande">
    <button className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 transition">
      Nouvelle Demande
    </button>
  </Link>
</div>

    </div>
  );
}
