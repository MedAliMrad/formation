"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Star,
  AlertTriangle,
  TrendingUp,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PlanningCalendar from "@/components/planningCalendar";

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

// Mock sessions
const mockSessions: Session[] = [
  {
    id: 1,
    date: "2024-10-10",
    client: "Société X",
    statut: "Confirmée",
    formation: "React Avancé",
    formateur: "Jean Dupont",
    cout: 1200,
    duree: 4,
  },
  {
    id: 2,
    date: "2024-10-15",
    client: "Société X",
    statut: "En attente",
    formation: "TypeScript Basics",
    formateur: "Pierre Durand",
    cout: 800,
    duree: 3,
  },
  {
    id: 3,
    date: "2024-09-25",
    client: "Société X",
    statut: "Confirmée",
    formation: "Node.js avancé",
    formateur: "Jean Dupont",
    cout: 1500,
    duree: 5,
  },
  {
    id: 4,
    date: "2024-10-18",
    client: "Société Y",
    statut: "Confirmée",
    formation: "Docker",
    formateur: "Jean Dupont",
    cout: 1000,
    duree: 3,
  },
];

const clients = ["Société X", "Société Y"];
const statuts = ["Tous", "Confirmée", "En attente", "Annulée", "Terminée"];

export default function PlanningClient() {
  const [currentMonth, setCurrentMonth] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });
  const prevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  };
  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
  };

  const [client, setClient] = useState(clients[0]);
  const [periode, setPeriode] = useState("");
  const [dateDeb, setDateDeb] = useState("2025-06-16");
  const [dateFin, setDateFin] = useState("2025-07-16");
  const [statutFiltre, setStatutFiltre] = useState<string>("Tous");
  const sessionsFiltrees = mockSessions.filter((s) => {
    if (s.client !== client) return false;
    if (statutFiltre !== "Tous" && s.statut !== statutFiltre) return false;
    const d = new Date(s.date);
    if (d < new Date(dateDeb) || d > new Date(dateFin)) return false;
    return true;
  });

  const budgetClient = 3300;
  const coutTotal = sessionsFiltrees.reduce((acc, s) => acc + s.cout, 0);
  const depasseBudget = coutTotal > budgetClient;
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            Planning Client
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="space-y-2">
              <Label>Client</Label>
              <Select value={client} onValueChange={setClient}>
                {" "}
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {clients.map((client) => (
                    <SelectItem key={client} value={client}>
                      {client}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Période</Label>
              <Select value={periode} onValueChange={setPeriode}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Octobre 2024">Octobre 2024</SelectItem>
                  <SelectItem value="Novembre 2024">Novembre 2024</SelectItem>
                  <SelectItem value="Décembre 2024">Décembre 2024</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Statut</Label>
              <Select value={statutFiltre} onValueChange={setStatutFiltre}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Toutes sessions">
                    Toutes sessions
                  </SelectItem>
                  <SelectItem value="Confirmées uniquement">
                    Confirmées uniquement
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="space-y-2">
                <Label>Du</Label>
                <Input
                  type="date"
                  value={dateDeb}
                  onChange={(e) => setDateDeb(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Au</Label>
                <Input
                  type="date"
                  value={dateFin}
                  onChange={(e) => setDateFin(e.target.value)}
                />
              </div>
            </div>
          </div>

          <PlanningCalendar/>
        </div>
      </div>
    </div>
  );
}
