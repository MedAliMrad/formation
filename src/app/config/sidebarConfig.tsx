const sideBarItems = {
  admin: [
    { label: "Nouvelle Demande", href: "/nouvelledemande" },
    { label: "Sessions/Foramtion", href: "/formation" },
    { label: "Formateurs/Compétence", href: "/formateur" },
    { label: "Planning Formateur", href: "/planningformateur" },
    { label: "Planning Mensuel", href: "/planningmensuel" },
    { label: "Planning Client", href: "/planningclient" },
    { label: "Est. Couts", href: "/couts" },
    { label: "Demande en attente", href: "/demande" },
    { label: "Agenda Validation", href: "/agenda" },
    { label: "Validation", href: "/validation" },
    { label: "Logistique En Attente", href: "/logistique" },
  ],
  superPlanification: [
    { label: "Nouvelle Demande", href: "/nouvelledemande" },
    { label: "Sessions/Foramtion", href: "/formation" },
    { label: "Formateurs/Compétence", href: "/formateur" },
    { label: "Planning Formateur", href: "/planningformateur" },
    { label: "Planning Mensuel", href: "/planningmensuel" },
    { label: "Planning Client", href: "/planningclient" },
    { label: "Est. Couts", href: "/couts" },
  ],
  utilisateurPlanification: [
    { label: "Nouvelle Demande", href: "/nouvelledemande" },
    { label: "Sessions/Foramtion", href: "/formation" },
    { label: "Formateurs/Compétence", href: "/formateur" },
    { label: "Planning Formateur", href: "/planningformateur" },
    { label: "Est. Couts", href: "/couts" },
  ],
  espaceSourcing: [
    { label: "Demande en attente", href: "/demande" },
    { label: "Foramteurs", href: "/formateur" },
    { label: "Est. Couts", href: "/couts" },
  ],
  espaceValidation: [
    { label: "Agenda Validation", href: "/agenda" },
    { label: "Validation", href: "/validation" },
  ],
  espaceLogistique: [
    { label: "Logistique En Attente", href: "/logistique" },
    { label: "Est. Couts", href: "/couts" },
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
