"use client";
interface FormateurA {
  id: string;
  nom: string;
  sessions: number;
  taux: string;
  lastS: string;
  dispo: string;
  tarif: number;
}
interface TableAnimeProps{
  formateurs:FormateurA[];
}

export default function TableAnime({formateurs}:TableAnimeProps) {
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
          <tbody className="text-black divide-y divide-gray-300">
            {formateurs.length > 0 ? (
              formateurs.map((formateur, idx) => (
                <tr className="bg-gray-50" key={idx}>
                  <th className="border px-4 py-2">{formateur.id}</th>
                  <td className="border px-4 py-2">{formateur.nom}</td>
                  <td className="border px-4 py-2">{formateur.sessions}</td>
                  <td className="border px-4 py-2">{formateur.taux}</td>
                  <td className="border px-4 py-2">{formateur.lastS}</td>
                  <td className="border px-4 py-2">{formateur.dispo}</td>
                  <td className="border px-4 py-2">T{formateur.tarif}</td>
                </tr>
              ))
            ) : (
              <tr className="bg-white">
                <td colSpan={7} className="text-center text-gray-500 py-4">
                  Aucun formateur trouvé
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
