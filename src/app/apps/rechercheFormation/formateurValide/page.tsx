"use client"
import FormateurValide from "./searchFormateurValide";
import TableValide from "./tableValide";
export default function Page() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">Recherche Formateur</h1>
      <FormateurValide/>
      <TableValide/>
    </main>
  );
}