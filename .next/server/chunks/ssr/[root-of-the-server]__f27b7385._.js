module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/src/app/config/sidebarConfig.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "sideBarI": (()=>sideBarI)
});
const sideBarItems = {
    admin: [
        {
            label: "Nouvelle Demande",
            href: "/apps/nouvelledemande"
        },
        {
            label: "Sessions/Foramtion",
            href: "/apps/formation"
        },
        {
            label: "Formateurs/Compétence",
            href: "/apps/formateur"
        },
        {
            label: "Planning Formateur",
            href: "/apps/planningformateur"
        },
        {
            label: "Planning Mensuel",
            href: "/apps/planningmensuel"
        },
        {
            label: "Planning Client",
            href: "/apps/planningclient"
        },
        {
            label: "Est. Couts",
            href: "/apps/couts"
        },
        {
            label: "Demande en attente",
            href: "/apps/demande"
        },
        {
            label: "Agenda Validation",
            href: "/apps/agenda"
        },
        {
            label: "Validation",
            href: "/apps/validation"
        },
        {
            label: "Logistique En Attente",
            href: "/apps/logistique"
        }
    ],
    superPlanification: [
        {
            label: "Nouvelle Demande",
            href: "/apps/nouvelledemande"
        },
        {
            label: "Sessions/Foramtion",
            href: "/apps/formation"
        },
        {
            label: "Formateurs/Compétence",
            href: "/formateur"
        },
        {
            label: "Planning Formateur",
            href: "/apps/planningformateur"
        },
        {
            label: "Planning Mensuel",
            href: "/apps/planningmensuel"
        },
        {
            label: "Planning Client",
            href: "/apps/planningclient"
        },
        {
            label: "Est. Couts",
            href: "/apps/couts"
        }
    ],
    utilisateurPlanification: [
        {
            label: "Nouvelle Demande",
            href: "/apps/nouvelledemande"
        },
        {
            label: "Sessions/Foramtion",
            href: "/apps/formation"
        },
        {
            label: "Formateurs/Compétence",
            href: "/apps/formateur"
        },
        {
            label: "Planning Formateur",
            href: "/apps/planningformateur"
        },
        {
            label: "Est. Couts",
            href: "/apps/couts"
        }
    ],
    espaceSourcing: [
        {
            label: "Demande en attente",
            href: "/apps/demande"
        },
        {
            label: "Foramteurs",
            href: "/apps/formateur"
        },
        {
            label: "Est. Couts",
            href: "/apps/couts"
        }
    ],
    espaceValidation: [
        {
            label: "Agenda Validation",
            href: "/apps/agenda"
        },
        {
            label: "Validation",
            href: "/apps/validation"
        }
    ],
    espaceLogistique: [
        {
            label: "Logistique En Attente",
            href: "/apps/logistique"
        },
        {
            label: "Est. Couts",
            href: "/apps/couts"
        }
    ]
};
function mergeSideBarItems(...roles) {
    const map = new Map();
    roles.flat().forEach((item)=>{
        if (!map.has(item.href)) {
            map.set(item.href, item);
        }
    });
    return Array.from(map.values());
}
const sideBarI = {
    ...sideBarItems,
    admin: mergeSideBarItems(sideBarItems.admin, sideBarItems.superPlanification, sideBarItems.utilisateurPlanification, sideBarItems.espaceSourcing, sideBarItems.espaceValidation, sideBarItems.espaceLogistique)
};
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/app/components/sidebar.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Sidebar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$sidebarConfig$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/config/sidebarConfig.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const roleFontSizes = {
    admin: "text-5xl",
    superPlanification: "text-2xl",
    utilisateurPlanification: "text-xl",
    espaceSourcing: "text-3xl",
    espaceValidation: "text-2xl",
    espaceLogistique: "text-2xl"
};
function Sidebar({ role, className }) {
    const items = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$sidebarConfig$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sideBarI"][role] || []; /*is a concise way to safely access sidebar items based on the user's role */ 
    const fontSizeClass = roleFontSizes[role] || "text-5xl"; //default-size
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: `bg-red-500 w-60 m h-screen p-4 ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `text-white ${fontSizeClass} font-bold mt-6 pl-3 mb-3`,
                children: [
                    role,
                    " "
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/sidebar.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            items.map(({ label, href })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: href,
                    className: "block text-white pt-3 pl-3 hover:font-bold",
                    children: label
                }, href, false, {
                    fileName: "[project]/src/app/components/sidebar.tsx",
                    lineNumber: 30,
                    columnNumber: 34
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/sidebar.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/layout.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Layout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/sidebar.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const user = {
    firstname: "Mohamed Ali",
    lastname: "Mrad"
};
function logout() {
    console.log("Logging out...");
}
function Layout({ children }) {
    const [sidebarOpen, setSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-1 w-[100vw] h-[100vh] overflow-hidden ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        role: "admin"
                    }, void 0, false, {
                        fileName: "[project]/src/app/layout.tsx",
                        lineNumber: 22,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-full flex-col bg-gray-800 flex-1 overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 min-h-[calc(100vh-4rem)] box-border overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white h-full overflow-hidden",
                                children: children
                            }, void 0, false, {
                                fileName: "[project]/src/app/layout.tsx",
                                lineNumber: 27,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/layout.tsx",
                            lineNumber: 26,
                            columnNumber: 12
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/layout.tsx",
                        lineNumber: 24,
                        columnNumber: 10
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/layout.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/layout.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/layout.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__f27b7385._.js.map