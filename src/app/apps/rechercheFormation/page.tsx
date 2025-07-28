"use client";
import Link from "next/link";

export default function RechercherFormation() {
  return (
    <div className="border-2 min-h-screen flex item-center justify-center bg-gray-50 p-72">
      <div className="grid gap-6 w-full max-w-xl">
        <Link href="/apps/rechercheFormation/formateurAnime">
          <div className="p-6 rounded-2xl border-2 border-gray-200 bg-white hover:bg-gray-400">
            <p className="text-lg font-medium text-gray-800">Formateurs ayant animé une formation</p>
          </div>
        </Link>
        <Link href="/apps/rechercheFormation/formateurValide">
          <div className="p-6 rounded-2xl border-2 border-gray-200 bg-white hover:bg-gray-400">
            <p className="text-lg font-medium text-gray-800">Formateurs validés (non expérimentés)</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
