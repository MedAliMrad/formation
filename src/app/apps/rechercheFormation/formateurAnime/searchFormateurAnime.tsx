"use client";
import { useState } from "react";
interface FormateurAnimeProps{
  onSearch:(variables:{code:number;date:Date;tarif:number})=>void;
}
export default function FormateurAnime({onSearch}:FormateurAnimeProps) {
  const [code, setCode] = useState("");
  const [date, setDate] = useState("");
  const [tarif, setTarif] = useState("");
  return (
    <div className="border p-4 mt-4 rounded-md space-y-4">
      <div className="p-5">
        <label className="block text-sm font-medium text-gray-700">
          Formation Recherché
        </label>
        <input
          type="text"
          className="block mt-1 w-full border-gray-300 rounded-md shadow-sm p-2 bg-gray-50 "
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="devops / code / client"
        />
      </div>
      <div className="p-5">
        <label className="block text-sm font-medium text-gray-700">
          Dates souhaitées
        </label>
        <input
          type="date"
          className="block mt-1 w-full border-gray-300 rounded-md shadow-sm p-2 bg-gray-50 "
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
          className="block mt-1 w-full border-gray-300 rounded-md shadow-sm p-2 bg-gray-50 "
          value={tarif}
          onChange={(e) => setTarif(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-colors"
         onClick={() => {
          if (!code ||!date||!tarif){
            alert("remplir tout les champs SVP");
            return;
          }
          onSearch({code:Number(code),date:new Date(date),tarif:Number(tarif)});
        }}
      >
        Rechercher
      </button>
    </div>
  );
}
