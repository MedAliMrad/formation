import FormateurAnime from "./searchFormateurAnime";
import TableAnime from "./tableAnime";
export default function Page() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">Recherche Formateur</h1>
      <FormateurAnime />
      <TableAnime/>
    </main>
  );
}