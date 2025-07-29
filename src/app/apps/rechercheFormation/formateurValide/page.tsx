"use client";
import { useState } from "react";
import FormateurValide from "./searchFormateurValide";
import TableValide from "./tableValide";
import { FILTER_FORMATEURS_WITHOUT_EXP } from "@/app/graphql/queries";
import { useLazyQuery } from "@apollo/client";
import { error } from "console";

interface RawFormateur {
  id: string;
  name: string;
  lastname: string;
  tarifConventionne: number;
}

export default function Page() {
  const [formateurs, setFormateurs] = useState<RawFormateur[]>([]);
  const [fetchFormateurWithoutExp, { loading, error }] = useLazyQuery<
    { filterFormateurWithoutExp: RawFormateur[] }, // Make sure the query name matches exactly
    {
      filterWithoutExp: {
        competences: string[];
        startDate: string;
        endDate: string;
        tarif: number;
      };
    }
  >(FILTER_FORMATEURS_WITHOUT_EXP, {
    onCompleted: (data) => {
      setFormateurs(
        data.filterFormateurWithoutExp.map((f) => ({
          id: f.id,
          name: f.name,
          lastname: f.lastname,
          tarifConventionne: f.tarifConventionne,
        }))
      );
    },
  });
  const handleSearchWithoutExp = (variables: {
    competences: string[];
    startDate: string;
    endDate: string;
    tarif: number;
  }) => {
    fetchFormateurWithoutExp({
      variables: { filterWithoutExp: variables },
    });
  };

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">Recherche Formateur</h1>
      <FormateurValide onSearch={handleSearchWithoutExp} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <TableValide
        formateurs={formateurs.map((f) => ({
          nom: `${f.name} ${f.lastname}`,
          valideLe: "N/A", // or fill in actual data if available
          validateur: "Inconnu",
          disponibilite: "Non spécifiée",
          competence: "Non précisée",
          tarif: f.tarifConventionne,
        }))}
      />
    </main>
  );
}
