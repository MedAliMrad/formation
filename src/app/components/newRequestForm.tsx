"use client";

import { Label, RadioGroup } from "@radix-ui/react-dropdown-menu";
import { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { SEARCH_CLIENTS } from "../graphql/queries";

interface client{
  id:number;
  name:string;
  lastname:string;
  email:string;
  phone:string;
  entreprise:string;
}

type NewFormProps = {
  onSubmitRequest: (data: any) => void;
};

export default function NewForm({ onSubmitRequest }: NewFormProps) {
  const [localisation, setLocalisation] = useState("");
  const[requestNumber,setrequestNumber] = useState("");
  const [searchClients,{data,loading,error}]=useLazyQuery(SEARCH_CLIENTS);
  const [formData, setFormData] = useState({
    requestNumber: "",
    code: "",
    client: "",
    intitule: "",
    programme: null as File | null,
    duration: "",
    startDate: "",
    endDate: "",
    address: "",
    clientPrice: "",
    comment: "",
    trainer: "",
    clientFees: "",
    logisticCost: "",
    trainerRate: "",
    status: "",
  });
  
  const [searchTerm,setSearchTerm]=useState("");
  const [selectedClient,setSelectedClient]=useState<client|null>(null);
  const [clients,setClients]=useState<client[]>([]);
  const [filteredClients,setFilteredClients]=useState<client[]>(clients);
  const [clientType, setClientType] = useState<"existing" | "new">("existing");
  const [newClientData, setNewClientData] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    entreprise: "",
  });

  const handleLocalisationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setLocalisation(value);
    setFormData((prev) => ({ ...prev, address: value }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "client") {
      const selectedClient = codeClient.find((c) => c.value === value);
      setFormData((prev) => ({
        ...prev,
        client: value,
        clientPrice: selectedClient?.tarif ?? "",
      }));
    } else if (name === "trainer") {
      const selectedTrainer = codeForamteur.find((f) => f.value === value);
      setFormData((prev) => ({
        ...prev,
        trainer: value,
        trainerRate: selectedTrainer?.tarif ?? "",
      }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, programme: file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const clientInfo =
      clientType === "existing" && selectedClient
        ? {...formData, 
          client: selectedClient.id }
        : {...formData, 
          newClient: newClientData };
    onSubmitRequest(formData);
    setFormData({
      requestNumber,
      code: "",
      client: "",
      intitule: "",
      programme: null,
      duration: "",
      startDate: "",
      endDate: "",
      address: "",
      clientPrice: "",
      comment: "",
      trainer: "",
      clientFees: "",
      logisticCost: "",
      trainerRate: "",
      status: "",
    });
    console.log(formData);
  };

  useEffect(()=>{
    if (searchTerm.trim() === "")return;
    const delayDebounce = setTimeout(()=>{searchClients({variables:{searchTerm}});},300);
    return ()=>clearTimeout(delayDebounce);
  },[searchTerm]);

  useEffect(()=>{
    if (data?.searchClients) {
      setFilteredClients(data.searchClients);
    }
  },[data]);

  useEffect(() => {
    const generateRequestNumber = () => {
      const date = new Date();
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      const timestamp = Date.now().toString().slice(-6);
      return `REQ-${year}${month}${day}-${timestamp}`;
    };
    setrequestNumber(generateRequestNumber());
  }, []);

  useEffect(() => {
    setFormData((prev) => ({ ...prev, requestNumber }));
  }, [requestNumber]);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredClients(clients);
    } else {
      const filtered = clients.filter((c) =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.lastname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.entreprise.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredClients(filtered);
    }
  }, [searchTerm, clients]);

  const [codeOptions, setCodeOptions] = useState([
    { value: "code1", label: "Code 1", intitule: "intitule pour Code 1" },
    { value: "code2", label: "Code 2", intitule: "intitule pour Code 2" },
    { value: "code3", label: "Code 3", intitule: "intitule pour Code 3" },
  ]);

  const [codeClient, setCodeClient] = useState([
    { value: "client1", label: "Client 1", tarif: "321" },
    { value: "client2", label: "Client 2", tarif: "456" },
    { value: "client3", label: "Client 3", tarif: "789" },
  ]);

  const [codeForamteur, setCodeForamteur] = useState([
    { value: "Formateurx", label: "formateur X", tarif: "3000" },
    { value: "Formateury", label: "formateur Y", tarif: "4000" },
  ]);

  interface Option {
    value: string;
    label: string;
  }


  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg w-2xl mx-auto"
    >
      <div className="border-b border-gray-200 pb-6 sm:pb-8 ">
        <label className="block text-sm font-medium text-gray-700 max-w-md mx-auto sm:max-w-lg lg:max-w-xl">
          Numéro Demande
        </label>
        <input
          type="text"
          name="requestNumber"
          className="block mt-1 w-full border-gray-300 rounded-md shadow-sm p-2 bg-gray-50 "
          value={formData.requestNumber}
          readOnly
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Code</label>
        <select
          name="code"
          className="block mt-1 w-full border-gray-300 rounded-md shadow-sm p-2 bg-gray-50"
          value={formData.code}
          onChange={handleInputChange}
        >
          <option value="">Sélectionnez un code</option>
          {codeOptions.map((code) => (
            <option key={code.value} value={code.value}>
              {code.label}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
  <label className="block text-sm font-medium text-gray-700">Client</label>

  <RadioGroup
    value={clientType}
    onValueChange={(v) => setClientType(v as "existing" | "new")}
  >
    <div className="flex gap-4 mt-2">
      <div className="flex items-center gap-2">
        <input type="radio" id="existing" value="existing" checked={clientType === "existing"} onChange={() => setClientType("existing")} />
        <label htmlFor="existing">Client existant</label>
      </div>
      <div className="flex items-center gap-2">
        <input type="radio" id="new" value="new" checked={clientType === "new"} onChange={() => setClientType("new")} />
        <label htmlFor="new">Nouveau client</label>
      </div>
    </div>
  </RadioGroup>

  {clientType === "existing" && (
    <div className="border p-4 mt-4 rounded-md space-y-2">
      <input
        className="w-full border rounded-md p-2"
        placeholder="Rechercher un client"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="max-h-60 overflow-y-auto space-y-2">
        {filteredClients.map((client) => (
          <div
            key={client.id}
            className={`p-2 border rounded-md cursor-pointer ${
              selectedClient?.id === client.id
                ? "bg-blue-100 border-blue-500"
                : ""
            }`}
            onClick={() => setSelectedClient(client)}
          >
            <div className="font-medium">
              {client.name} {client.lastname}
            </div>
            <div className="text-sm text-gray-600">
              {client.email} - {client.phone}
            </div>
            {client.entreprise && (
              <span className="text-xs bg-gray-200 px-2 py-1 rounded">
                {client.entreprise}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )}

  {clientType === "new" && (
    <div className="border p-4 mt-4 rounded-md space-y-4">
      <input
        className="w-full border rounded-md p-2"
        placeholder="Nom"
        value={newClientData.name}
        onChange={(e) =>
          setNewClientData({ ...newClientData, name: e.target.value })
        }
        required
      />
      <input
        className="w-full border rounded-md p-2"
        placeholder="Prénom"
        value={newClientData.lastname}
        onChange={(e) =>
          setNewClientData({ ...newClientData, lastname: e.target.value })
        }
        required
      />
      <input
        className="w-full border rounded-md p-2"
        placeholder="Email"
        type="email"
        value={newClientData.email}
        onChange={(e) =>
          setNewClientData({ ...newClientData, email: e.target.value })
        }
        required
      />
      <input
        className="w-full border rounded-md p-2"
        placeholder="Téléphone"
        value={newClientData.phone}
        onChange={(e) =>
          setNewClientData({ ...newClientData, phone: e.target.value })
        }
      />
      <input
        className="w-full border rounded-md p-2"
        placeholder="Entreprise"
        value={newClientData.entreprise}
        onChange={(e) =>
          setNewClientData({ ...newClientData, entreprise: e.target.value })
        }
      />
    </div>
  )}
</div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          intitule
        </label>
        <input
          name="intitule"
          className="block mt-1 w-full border-gray-300 rounded-md shadow-sm p-2 bg-gray-50"
          value={formData.intitule}
          onChange={handleInputChange}
          readOnly
        ></input>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Programme
          </label>
          <input
            type="file"
            name="programme"
            className="block mt-1 w-full border-gray-300 rounded-md shadow-sm p-2 bg-gray-50"
            onChange={handleFileChange}
          ></input>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Durée(jours)
          </label>
          <input
            type="number"
            name="duration"
            className="block mt-1 w-full border-gray-300 rounded-md shadow-sm p-2 bg-gray-50"
            value={formData.duration ?? ""}
            onChange={handleInputChange}
            min={1}
            placeholder="1"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Date Début
          </label>
          <input
            type="date"
            name="startDate"
            className="block mt-1 w-full border-gray-300 rounded-md shadow-sm p-2 bg-gray-50"
            value={formData.startDate}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Date Fin
          </label>
          <input
            type="date"
            name="endDate"
            className="block mt-1 w-full border-gray-300 rounded-md shadow-sm p-2 bg-gray-50"
            value={formData.endDate}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Lieu
          </label>
          <select
            name="address"
            className="block mt-1 w-full border-gray-300 rounded-md shadow-sm p-2 bg-gray-50"
            value={formData.address}
            onChange={handleLocalisationChange}
          >
            <option value="">Selectionner un lieu</option>
            <option value="Présentiel">Présentiel</option>
            <option value="Classe Virtuelle">Classe Virtuelle (CV)</option>
          </select>
        </div>
        {localisation === "Présentiel" && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Adresse
            </label>
            <input
              type="text"
              name="address"
              className="block mt-1 w-full border-gray-300 rounded-md shadow-sm p-2 bg-gray-50"
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>
        )}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Tarif
          </label>
          <input
            type="number"
            name="clientPrice"
            className="block mt-1 w-full border-gray-300 rounded-md shadow-sm p-2 bg-gray-50"
            value={formData.clientPrice}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Commentaire
          </label>
          <textarea
            name="comment"
            className="block mt-1 w-full border-gray-300 rounded-md shadow-sm p-2 bg-gray-50"
            rows={2}
            placeholder="commentez ici!"
            value={formData.comment}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Foramteur
          </label>
          <select
            name="trainer"
            className="block mt-1 w-full border-gray-300 rounded-md shadow-sm p-2 bg-gray-50"
            value={formData.trainer}
            onChange={handleInputChange}
          >
            <option value="">Sélectionnez un formateur</option>
            {codeForamteur.map((trainer) => (
              <option key={trainer.value} value={trainer.value}>
                {trainer.label}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Frais
          </label>
          <input
            type="number"
            name="clientFees"
            className="block mt-1 w-full border-gray-300 rounded-md shadow-sm p-2 bg-gray-50"
            value={formData.clientFees}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Coût Logistique
          </label>
          <input
            type="number"
            name="logisticCost"
            className="block mt-1 w-full border-gray-300 rounded-md shadow-sm p-2 bg-gray-50"
            value={formData.logisticCost}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Tarif formateur
          </label>
          <input
            type="number"
            name="trainerRate"
            className="block mt-1 w-full border-gray-300 rounded-md shadow-sm p-2 bg-gray-50"
            value={formData.trainerRate}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Etat
          </label>
          <select
            name="status"
            className="block mt-1 w-full border-gray-300 rounded-md shadow-sm p-2 bg-gray-50"
            value={formData.status}
            onChange={handleInputChange}
          >
            <option value="">Sélectionnez un état</option>
            <option value="En cours">En cours</option>
            <option value="Traitée">Traitée</option>
            <option value="Sourcing">Sourcing</option>
            <option value="Confirmée">Confirmée</option>
            <option value="Expirée">Expirée</option>
            <option value="Annulation client">Annulation client</option>
            <option value="Annulation formateur">Annulation formateur</option>
            <option value="Terminée">Terminée</option>
          </select>
        </div>
        <div className="mb-6">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Soumettre
          </button>
        </div>
      </div>
    </form>
  );
}
