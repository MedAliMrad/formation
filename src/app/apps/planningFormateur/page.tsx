"use client";

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, MapPin, Users, Star, AlertTriangle, TrendingUp } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

//Types:
interface Session {
  id: number;
  date: string;
  heureDebut: string;
  heureFin: string;
  client: string;
  lieu: string;
  statut: string;
  duree: number;
  satisfaction: number;
  formateur: string;
  formation: string;
}
//Mock Data :
const sessions: Session[] = [
  {
    id: 1,
    date: "2024-10-15",
    heureDebut: "09:00",
    heureFin: "12:00",
    client: "Entreprise ABC",
    formation: "Formation React Avancé",
    lieu: "Paris - Salle A",
    statut: "Confirmée",
    duree: 3,
    satisfaction: 4.5,
    formateur: "Jean Dupont",
  },
  {
    id: 2,
    date: "2024-10-15",
    heureDebut: "11:00",
    heureFin: "14:00",
    client: "Société XYZ",
    formation: "JavaScript ES6+",
    lieu: "Lyon - Centre",
    statut: "Confirmée",
    duree: 3,
    satisfaction: 4.2,
    formateur: "Jean Dupont",
  },
  {
    id: 3,
    date: "2024-10-16",
    heureDebut: "14:00",
    heureFin: "17:00",
    client: "StartUp Tech",
    formation: "Node.js Fundamentals",
    lieu: "Marseille - Hub",
    statut: "En attente",
    duree: 3,
    satisfaction: 0,
    formateur: "Jean Dupont",
  },
  {
    id: 4,
    date: "2024-10-18",
    heureDebut: "09:00",
    heureFin: "16:00",
    client: "Corp Industries",
    formation: "Full Stack Development",
    lieu: "Toulouse - Campus",
    statut: "Confirmée",
    duree: 7,
    satisfaction: 4.8,
    formateur: "Jean Dupont",
  },
  {
    id: 5,
    date: "2024-10-20",
    heureDebut: "10:00",
    heureFin: "12:00",
    client: "Digital Agency",
    formation: "TypeScript Basics",
    lieu: "Nice - Coworking",
    statut: "Annulée",
    duree: 2,
    satisfaction: 0,
    formateur: "Jean Dupont",
  },
]


const formateurs = ["Jean Dupont", "Pierre Durand"];
export default function PlanningFormateur() {
  const [formateurSelectionne, setFormateurSelectionne] =
    useState("Jean Dupont");
  const [periode, setPeriode] = useState("october 2024");
  const [affichage, setAffichage] = useState("toutes sessions");
  const [vue, setVue] = useState("tableau");
  const [dateDebut, setDateDebut] = useState("2024-10-01");
  const [dateFin, setDateFin] = useState("2024-10-31");
  const [sessionSelectionnee, setSessionSelectionnee] =useState<Session | null>(null);
  const [showStats, setShowStats] = useState(false);

  // Fonction pour détecter les conflits de planning
  const detecterConflits = (session: Session, autreSessions: Session[]) => {
    return autreSessions.some((autre) => {
      if (autre.id === session.id || autre.date === session.date) return false;

      const debS = new Date(`${session.date}T${session.heureDebut}`);
      const finS = new Date(`${session.date}T${session.heureFin}`);
      const debutAutre = new Date(`${autre.date}T${autre.heureDebut}`);
      const finAutre = new Date(`${autre.date}T${autre.heureFin}`);
      return debS < finAutre && finS > debutAutre;
    });
  };
  // Filtrer les sessions
  const sessionsFiltrees = sessions.filter((session) => {
    if (session.formateur !== formateurSelectionne) return false;
    if (affichage === "Confirmées uniquement" && session.statut !== "confirmée")
      return false;
  });

  //calculer les statistiques
  const calculerStat = () => {
    const sessionsConf = sessionsFiltrees.filter(
      (s) => s.statut === "confirmée"
    );
    const totalHeures = sessionsConf.reduce((acc, s) => {
      return acc + s.duree;
    }, 0);
    const satisfactionMoyenne =
      sessionsConf.length > 0
        ? sessionsConf.reduce((acc, s) => acc + s.satisfaction, 0) /
          sessionsConf.length
        : 0;

    return {
      totalSessions: sessionsFiltrees.length,
      sessionsConf: sessionsConf.length,
      totalHeures,
      satisfactionMoyenne: satisfactionMoyenne.toFixed(1),
      clientsUniques: new Set(sessionsConf.map((s) => s.client)).size,
    };

  };
      const stats = calculerStat();
    const getStatutBadge = (statut: Session["statut"]) => {
      const variants: Record<string, string> = {
        Confirmée: "bg-blue-100 text-blue-800",
        "En attente": "bg-gray-100 text-gray-800",
        Annulée: "bg-red-100 text-red-800",
      };

      return (
        <span
          className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold ${variants[statut]}`}
        >
          {statut}
        </span>
      );
    };

    const getSatisfactionStars = (satisfaction: number) => {
      if (satisfaction === 0) return <span className="text-gray-400">N/A</span>;

      return (
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span>{satisfaction}/5</span>
        </div>
      );
    };
  return ( <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* En-tête */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Planning Formateur</h1>

          {/* Filtres */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="space-y-2">
              <Label>Formateur</Label>
              <Select value={formateurSelectionne} onValueChange={setFormateurSelectionne}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {formateurs.map((formateur) => (
                    <SelectItem key={formateur} value={formateur}>
                      {formateur}
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
              <Label>Afficher</Label>
              <Select value={affichage} onValueChange={setAffichage}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Toutes sessions">Toutes sessions</SelectItem>
                  <SelectItem value="Confirmées uniquement">Confirmées uniquement</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Vue</Label>
              <Select value={vue} onValueChange={setVue}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Tableau">Tableau</SelectItem>
                  <SelectItem value="Calendrier">Calendrier</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Période personnalisée */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="space-y-2">
              <Label>Du</Label>
              <Input type="date" value={dateDebut} onChange={(e) => setDateDebut(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label>Au</Label>
              <Input type="date" value={dateFin} onChange={(e) => setDateFin(e.target.value)} />
            </div>
          </div>
        </div>

        {/* Statistiques rapides */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-blue-500" />
                <div>
                  <p className="text-sm text-gray-600">Total Sessions</p>
                  <p className="text-2xl font-bold">{stats.totalSessions}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-green-500" />
                <div>
                  <p className="text-sm text-gray-600">Confirmées</p>
                  <p className="text-2xl font-bold">{stats.sessionsConf}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-purple-500" />
                <div>
                  <p className="text-sm text-gray-600">Total Heures</p>
                  <p className="text-2xl font-bold">{stats.totalHeures}h</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-orange-500" />
                <div>
                  <p className="text-sm text-gray-600">Clients</p>
                  <p className="text-2xl font-bold">{stats.clientsUniques}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-500" />
                <div>
                  <p className="text-sm text-gray-600">Satisfaction</p>
                  <p className="text-2xl font-bold">{stats.satisfactionMoyenne}/5</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tableau des sessions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Sessions de {formateurSelectionne}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-medium">Date</th>
                    <th className="text-left p-3 font-medium">Horaires</th>
                    <th className="text-left p-3 font-medium">Client</th>
                    <th className="text-left p-3 font-medium">Formation</th>
                    <th className="text-left p-3 font-medium">Lieu</th>
                    <th className="text-left p-3 font-medium">Statut</th>
                    <th className="text-left p-3 font-medium">Durée</th>
                    <th className="text-left p-3 font-medium">Satisfaction</th>
                  </tr>
                </thead>
                <tbody>
                  {sessionsFiltrees.map((session) => {
                    const aConflit = detecterConflits(session, sessionsFiltrees)

                    return (
                      <tr
                        key={session.id}
                        className={`border-b hover:bg-gray-50 cursor-pointer transition-colors ${
                          aConflit ? "bg-red-50 border-red-200" : ""
                        }`}
                        onClick={() => {
                          setSessionSelectionnee(session)
                          setShowStats(true)
                        }}
                      >
                        <td className="p-3">
                          <div className="flex items-center gap-2">
                            {aConflit && <AlertTriangle className="h-4 w-4 text-red-500" />}
                            {new Date(session.date).toLocaleDateString("fr-FR")}
                          </div>
                        </td>
                        <td className="p-3">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4 text-gray-400" />
                            {session.heureDebut} - {session.heureFin}
                          </div>
                        </td>
                        <td className="p-3 font-medium">{session.client}</td>
                        <td className="p-3">{session.formation}</td>
                        <td className="p-3">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4 text-gray-400" />
                            {session.lieu}
                          </div>
                        </td>
                        <td className="p-3">{getStatutBadge(session.statut)}</td>
                        <td className="p-3">{session.duree}</td>
                        <td className="p-3">{getSatisfactionStars(session.satisfaction)}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>

            {sessionsFiltrees.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                Aucune session trouvée pour les critères sélectionnés
              </div>
            )}
          </CardContent>
        </Card>

        {/* Modal des statistiques */}
        <Dialog open={showStats} onOpenChange={setShowStats}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Statistiques - {sessionSelectionnee?.formation}</DialogTitle>
            </DialogHeader>

            {sessionSelectionnee && (
              <div className="space-y-6">
                {/* Détails de la session */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-2">Détails de la session</h3>
                    <div className="space-y-2 text-sm">
                      <p>
                        <span className="font-medium">Date:</span>{" "}
                        {new Date(sessionSelectionnee.date).toLocaleDateString("fr-FR")}
                      </p>
                      <p>
                        <span className="font-medium">Horaires:</span> {sessionSelectionnee.heureDebut} -{" "}
                        {sessionSelectionnee.heureFin}
                      </p>
                      <p>
                        <span className="font-medium">Client:</span> {sessionSelectionnee.client}
                      </p>
                      <p>
                        <span className="font-medium">Lieu:</span> {sessionSelectionnee.lieu}
                      </p>
                      <p>
                        <span className="font-medium">Durée:</span> {sessionSelectionnee.duree}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Performance</h3>
                    <div className="space-y-2 text-sm">
                      <p>
                        <span className="font-medium">Statut:</span> {getStatutBadge(sessionSelectionnee.statut)}
                      </p>
                      <p>
                        <span className="font-medium">Satisfaction:</span>{" "}
                        {getSatisfactionStars(sessionSelectionnee.satisfaction)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Statistiques globales du formateur */}
                <div>
                  <h3 className="font-semibold mb-4">Statistiques globales - {formateurSelectionne}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm text-blue-600">Sessions totales</p>
                      <p className="text-2xl font-bold text-blue-700">{stats.totalSessions}</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-sm text-green-600">Heures dispensées</p>
                      <p className="text-2xl font-bold text-green-700">{stats.totalHeures}h</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="text-sm text-purple-600">Clients formés</p>
                      <p className="text-2xl font-bold text-purple-700">{stats.clientsUniques}</p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p className="text-sm text-yellow-600">Satisfaction moy.</p>
                      <p className="text-2xl font-bold text-yellow-700">{stats.satisfactionMoyenne}/5</p>
                    </div>
                  </div>
                </div>

                {/* Alertes */}
                {detecterConflits(sessionSelectionnee, sessionsFiltrees) && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 text-red-700">
                      <AlertTriangle className="h-5 w-5" />
                      <span className="font-semibold">Conflit de planning détecté</span>
                    </div>
                    <p className="text-sm text-red-600 mt-1">
                      Cette session chevauche avec une autre session programmée le même jour.
                    </p>
                  </div>
                )}
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>);
}
