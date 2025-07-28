"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { DateSelectArg, EventClickArg } from "@fullcalendar/core";
import { useState } from "react";
import client from "../../lib/apollo-client";
import { title } from "process";
import { start } from "repl";

interface Session {
  id: number;
  client: string;
  formation: string;
  formateur: string;
  statut: "Confirmée" | "En attente" | "Annulée" | "Tous";
  cout: number;
  duree: number;
  date: string;
}

const sessionMock: Session[] = [
  {
    id: 1,
    client: "Societe X",
    formation: "DevOps",
    formateur: "Pierre",
    statut: "Confirmée",
    cout: 3500,
    duree: 3,
    date: "2025-01-01",
  },
  {
    id: 2,
    client: "Societe Y",
    formation: "React",
    formateur: "Hamilton",
    statut: "Annulée",
    cout: 4100,
    duree: 5,
    date: "2025-08-08",
  },
];
export default function PlanningCalendar() {
  const [clientFilter, setClientFilter] = useState("societe X");
  const [showEvent, setShowEvent] = useState<Session[]>([]);

  const events = sessionMock
    .filter((s) => s.client === clientFilter)
    .map((s) => ({
      id: String(s.id),
      title: s.formation,
      start: s.date,
      backgroundColor:
        s.statut === "Confirmée"
          ? "#10B981"
          : s.statut === "En attente"
          ? "#F59E0B"
          : s.statut === "Annulée"
          ? "#EF4444"
          : "#6B7280",
    }));

  const handleEventClick = (arg: EventClickArg) => {
    const session = sessionMock.find((s) => String(s.id) === arg.event.id);
    if (session) {
      setShowEvent([session]);
    }
  };
  return (
    <div className="p-6 max-w-4xl mx-auto font-sans space-y-4">
      <h1 className="text-3xl font-bold flex justify-center">Calendrier des sessions</h1>
      <label className="text-sm font-semibold flex justify-center p-5 pb-4">
        Client  : 
        <select
          className="border rounded px-4 py-1"
          value={clientFilter}
          onChange={(e) => setClientFilter(e.target.value)}
        >
          {[...new Set(sessionMock.map((s) => s.client))].map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </label>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventClick={handleEventClick}
        height="auto"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "",
        }}
      />
      {showEvent.length > 0 && (
        <div className="border rounded p-4 bg-white">
          <h2 className="font-semibold mb-2">Détails session</h2>
          {showEvent.map((s) => (
            <div key={s.id} className="space-y-1">
              <p>
                <b>Formation:</b> {s.formation}
              </p>
              <p>
                <b>Date:</b> {new Date(s.date).toLocaleDateString()}
              </p>
              <p>
                <b>Formateur:</b> {s.formateur}
              </p>
              <p>
                <b>Statut:</b> {s.statut}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
