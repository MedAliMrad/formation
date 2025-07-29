"use client";
import { useState } from "react";
import { start } from "repl";

interface FormateurValideProps{
  onSearch:(variables:{competences:string[];startDate:string;endDate:string;tarif:number})=>void
}

export default function FormateurValide({onSearch}:FormateurValideProps) {
  const [competences, setCompetences] = useState("");
  const [date, setDate] = useState("");
  const [tarif, setTarif] = useState("");

  return (
    <div className="border p-4 mt-4 rounded-md space-y-4">
      <div className="p-5">
        <label className="block text-sm font-medium text-gray-700">
          Compétences
        </label>
        <input
          type="text"
          className="block mt-1 w-full border-gray-300 rounded-md shadow-sm p-2 bg-gray-50"
          value={competences}
          onChange={(e) => setCompetences(e.target.value)}
          placeholder="[AWS / Kubernetes / ...]"
        />
      </div>
      <div className="p-5">
        <label className="block text-sm font-medium text-gray-700">
          Dates souhaitées
        </label>
        <input
          type="date"
          className="block mt-1 w-full border-gray-300 rounded-md shadow-sm p-2 bg-gray-50"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="p-5">
        <label className="block text-sm font-medium text-gray-700">
          Tarif max/jour
        </label>
        <input
          type="number"
          className="block mt-1 w-full border-gray-300 rounded-md shadow-sm p-2 bg-gray-50"
          value={tarif}
          onChange={(e) => setTarif(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-colors"
        onClick={() => {
          console.log({ competences, date, tarif });
          if (!competences || !date ||!tarif){
            alert ("merci de remplir tous les champs");
            return;
          }
          onSearch({competences:competences.split(",").map((c)=>c.trim()),
            startDate:date,
            endDate:date,
            tarif:Number(tarif)
          });
        }}
      >
        Rechercher
      </button>
    </div>
  );
}
