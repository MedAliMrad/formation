import FormateurAnime from "./searchFormateurAnime";
import TableAnime from "./tableAnime";
import { useLazyQuery } from "@apollo/client";
import { FILTER_FORMATEURS_WITH_EXP } from "@/app/graphql/queries";
import { useState } from "react";

interface FormateurType {
  id: string;
  name: string;
  lastname: string;
  tarifConventionne: number;
}

export default function Page() {
  const [formateurs, setFormateurs] = useState<any[]>([]);

  const [fetchFormateurs, { loading, error }] = useLazyQuery<
    { filterFormateurWithExp: FormateurType[] },
    { filterExp: { code: number; date: Date; tarif: number } }
  >(FILTER_FORMATEURS_WITH_EXP, {
    onCompleted: (data) => {
      setFormateurs(
        data.filterFormateurWithExp.map((f) => ({
          id: f.id,
          nom: `${f.name} ${f.lastname}`,
          sessions: 0,
          taux: "N/A",
          lastS: "N/A",
          dispo: "N/A",
          tarif: f.tarifConventionne,
        }))
      );
    },
  });

  const handleSearch = (variables: { code: number; date: Date; tarif: number }) => {
    console.log("Searching with:", variables);
    fetchFormateurs({ variables: { filterExp: variables } });
  };

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">Recherche Formateur</h1>
      <FormateurAnime onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <TableAnime formateurs={formateurs} />
    </main>
  );
}
