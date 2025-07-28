const sideBarItems = {
  admin: [
    { label: "Nouvelle Demande", href: "/apps/nouvelledemande" },
    { label: "Sessions/Formations", href: "/apps/formateur" },
    { label: "Formateurs/Compétence", href: "/apps/rechercheFormation" },
    { label: "Planning Formateur", href: "/apps/planningFormateur" },
    { label: "Planning Mensuel", href: "/apps/planningmensuel" },
    { label: "Planning Client", href: "/apps/planningClient" },
    { label: "Est. Couts", href: "/apps/couts" },
    { label: "Demande en attente", href: "/apps/demande" },
    { label: "Agenda Validation", href: "/apps/agenda" },
    { label: "Validation", href: "/apps/validation" },
    { label: "Logistique En Attente", href: "/apps/logistique" },
  ],
  superPlanification: [
    { label: "Nouvelle Demande", href: "/apps/nouvelledemande" },
    { label: "Sessions/Foramtion", href: "/apps/rechercheFormation" },
    { label: "Formateurs/Compétence", href: "/apps/formateur" },
    { label: "Planning Formateur", href: "/apps/planningformateur" },
    { label: "Planning Mensuel", href: "/apps/planningmensuel" },
    { label: "Planning Client", href: "/apps/planningclient" },
    { label: "Est. Couts", href: "/apps/couts" },
  ],
  utilisateurPlanification: [
    { label: "Nouvelle Demande", href: "/apps/nouvelledemande" },
    { label: "Sessions/Foramtion", href: "/apps/rechercheFormation" },
    { label: "Formateurs/Compétence", href: "/apps/formateur" },
    { label: "Planning Formateur", href: "/apps/planningformateur" },
    { label: "Est. Couts", href: "/apps/couts" },
  ],
  espaceSourcing: [
    { label: "Demande en attente", href: "/apps/demande" },
    { label: "Foramteurs", href: "/apps/formateur" },
    { label: "Est. Couts", href: "/apps/couts" },
  ],
  espaceValidation: [
    { label: "Agenda Validation", href: "/apps/agenda" },
    { label: "Validation", href: "/apps/validation" },
  ],
  espaceLogistique: [
    { label: "Logistique En Attente", href: "/apps/logistique" },
    { label: "Est. Couts", href: "/apps/couts" },
  ],
};
function mergeSideBarItems(
  ...roles: Array<(typeof sideBarItems)[keyof typeof sideBarItems]>
) {
  const map = new Map<string, (typeof roles)[0][0]>();
  roles.flat().forEach((item) => {
    if (!map.has(item.href)) {
      map.set(item.href, item);
    }
  });
  return Array.from(map.values());
}
/*Le but de la fonction mergeSidebarItems est de fusionner plusieurs tableaux d'éléments de barre latérale en un seul tableau, 
        tout en éliminant les doublons basés sur le href (la clé unique pour chaque élément de menu).*/

export const sideBarI = {
  ...sideBarItems,
  admin: mergeSideBarItems(
    sideBarItems.admin,
    sideBarItems.superPlanification,
    sideBarItems.utilisateurPlanification,
    sideBarItems.espaceSourcing,
    sideBarItems.espaceValidation,
    sideBarItems.espaceLogistique
  ),
};
