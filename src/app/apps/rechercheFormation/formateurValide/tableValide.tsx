"use client";
import { useState } from "react";

interface FormateurV {
  nom: string;
  valideLe: string;
  validateur: string;
  disponibilite: string;
  competence: string;
  tarif: number;
}
interface TableValideProps{formateurs:FormateurV[]}
export default function TableValide({ formateurs }: TableValideProps) {
  const [formAnime, setFormAnim] = useState<FormateurV[]>([]);

  return (
    <div>
      <h2 className="p-6 text-2xl text-center text-black font-bold">
        Filtre formateurs ayant animé une formation
      </h2>
      <div>
        <table className="min-w-full border-spacing-0 rounded-lg overflow-hidden">
          <thead className="bg-gray-200 text-black text-left">
            <tr>
              <th className="border px-4 py-2">Nom</th>
              <th className="border px-4 py-2">Validé le</th>
              <th className="border px-4 py-2">Validateur</th>
              <th className="border px-4 py-2">Disponibilité</th>
              <th className="border px-4 py-2">Compétence</th>
              <th className="border px-4 py-2">Tarif/jour</th>
            </tr>
          </thead>
<tbody className="text-black divide-y divide-gray-300">
  {formateurs.length > 0 ? (
    formateurs.map((formateur, idx) => (
      <tr className="bg-gray-50" key={idx}>
        <td className="border px-4 py-2">{formateur.nom}</td>
        <td className="border px-4 py-2">{formateur.valideLe}</td>
        <td className="border px-4 py-2">{formateur.validateur}</td>
        <td className="border px-4 py-2">{formateur.disponibilite}</td>
        <td className="border px-4 py-2">{formateur.competence}</td>
        <td className="border px-4 py-2">{formateur.tarif} €</td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan={6} className="text-center text-gray-500 py-4">
        Aucun formateur validé trouvé
      </td>
    </tr>
  )}
</tbody>

        </table>
      </div>
    </div>
  );
}
