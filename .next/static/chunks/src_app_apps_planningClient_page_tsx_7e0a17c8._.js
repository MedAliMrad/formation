(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/apps/planningClient/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>PlanningClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
// Mock sessions
const mockSessions = [
    {
        id: 1,
        date: "2024-10-10",
        client: "Société X",
        statut: "Confirmée",
        formation: "React Avancé",
        formateur: "Jean Dupont",
        cout: 1200,
        duree: 4
    },
    {
        id: 2,
        date: "2024-10-15",
        client: "Société X",
        statut: "En attente",
        formation: "TypeScript Basics",
        formateur: "Pierre Durand",
        cout: 800,
        duree: 3
    },
    {
        id: 3,
        date: "2024-09-25",
        client: "Société X",
        statut: "Confirmée",
        formation: "Node.js avancé",
        formateur: "Jean Dupont",
        cout: 1500,
        duree: 5
    },
    {
        id: 4,
        date: "2024-10-18",
        client: "Société Y",
        statut: "Confirmée",
        formation: "Docker",
        formateur: "Jean Dupont",
        cout: 1000,
        duree: 3
    }
];
const clients = [
    "Société X",
    "Société Y"
];
const statuts = [
    "Tous",
    "Confirmée",
    "En attente",
    "Annulée",
    "Terminée"
];
function PlanningClient() {
    _s();
    const [client, setClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(clients[0]);
    const [dateDeb, setDateDeb] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("2025-06-16");
    const [dateFin, setDateFin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("2025-07-16");
    const [statutFiltre, setStatutFiltre] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Tous");
    const sessionsFiltrees = mockSessions.filter((s)=>{
        if (s.client !== client) return false;
        if (statutFiltre !== "Tous" && s.statut !== statutFiltre) return false;
        const d = new Date(s.date);
        if (d < new Date(dateDeb) || d > new Date(dateFin)) return false;
        return true;
    });
    const budgetClient = 3300;
    const coutTotal = sessionsFiltrees.reduce((acc, s)=>acc + s.cout, 0);
    const depasseBudget = coutTotal > budgetClient;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50 p-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto space-y-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-lg shadow-sm p-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold text-gray-900 mb-6",
                    children: "Planning Client"
                }, void 0, false, {
                    fileName: "[project]/src/app/apps/planningClient/page.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/apps/planningClient/page.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/apps/planningClient/page.tsx",
            lineNumber: 80,
            columnNumber: 1
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/apps/planningClient/page.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
_s(PlanningClient, "1hFhLW2vCPxAJaa9U9YzuveOxdM=");
_c = PlanningClient;
var _c;
__turbopack_context__.k.register(_c, "PlanningClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_apps_planningClient_page_tsx_7e0a17c8._.js.map