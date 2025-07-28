"use client";
import { useState } from "react";
interface FormateurA {
  id: string;
  nom: string;
  sessions: number;
  taux: string;
  lastS: string;
  dispo: string;
  tarif: number;
}

export default function TableAnime() {
  const [formAnime, setFormAnim] = useState<FormateurA[]>([
    {
      id: "CLI-045",
      nom: "jean",
      sessions: 12,
      taux: "95%",
      lastS: "10/09/2024",
      dispo: "15-17/10",
      tarif: 600,
    },
    {
      id: "CLI-046",
      nom: "Laura",
      sessions: 5,
      taux: "75%",
      lastS: "05/08/2024",
      dispo: "20-22/10",
      tarif: 650,
    },
  ]);
  return (
    <div>
      <h2 className="p-6 text-2xl text-center text-black font-bold">Filtre formateurs ayant animé une formation</h2>
      <div>
        <table className="min-w-full border-spacing-0 rounded-lg overflow-hidden">
          <thead className="bg-gray-200 text-black text-left">
            <tr>
              <th className="border px-4 py-2">Code formation Client</th>
              <th className="border px-4 py-2">Nom</th>
              <th className="border px-4 py-2">Sessions</th>
              <th className="border px-4 py-2">Taux réussite</th>
              <th className="border px-4 py-2">Derniere session</th>
              <th className="border px-4 py-2">Disponibilités</th>
              <th className="border px-4 py-2">Tarif/jour</th>
            </tr>
          </thead>
          <tbody className=" text-black divide-y divide-gray-300">
            {formAnime.map((FormateurA, idx) => (
              <tr className="bg-gray-50" key={idx}>
                <th className="border px-4 py-2">{FormateurA.id}</th>
                <td className="border px-4 py-2">{FormateurA.nom}</td>
                <td className="border px-4 py-2">{FormateurA.sessions}</td>
                <td className="border px-4 py-2">{FormateurA.taux}</td>
                <td className="border px-4 py-2">{FormateurA.lastS}</td>
                <td className="border px-4 py-2">{FormateurA.dispo}</td>
                <td className="border px-4 py-2">T{FormateurA.tarif}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
