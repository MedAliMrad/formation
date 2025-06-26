"use client";
import { sideBarI } from "../config/sidebarConfig";
import Link from "next/link";

interface sidebarProps {
  role: keyof typeof sideBarI;
}
const roleFontSizes: Record<string,string> ={
  admin: "text-5xl",
  superPlanification: "text-2xl",
  utilisateurPlanification: "text-xl",
  espaceSourcing: "text-3xl",
  espaceValidation: "text-2xl",
  espaceLogistique: "text-2xl",
}
/*Record<Keys, Type> creates a type-safe object with:

Keys as the allowed keys (usually strings or union types)

Type as the value type

It’s built-in, like string, number, boolean, etc., and is part of TypeScript’s utility types. */
export default function Sidebar({ role }: sidebarProps) {
  const items = sideBarI[role] || []; /*is a concise way to safely access sidebar items based on the user's role */
  const fontSizeClass=roleFontSizes[role] || "text-5xl"; //default-size
  return (
    <aside className="bg-red-500 w-60 h-full fixed top-16 hidden sm:block">
      <div className={`text-white ${fontSizeClass} font-bold mt-6 pl-3 mb-3`}>{role} </div>
      {items.map(({label,href})=><Link 
      key={href}
      href={href}
      className="block text-white pt-3 pl-3 hover:font-bold"
      >
      {label}
      </Link>)}
    </aside> /* when i nedd a sidebar i should use aside ,it's better then div here */
    /* By default, if you don’t specify a height or put content inside, the <aside> won’t show up. */
    /* in the line 28 we used the classname {``} in order to use ${} */
  );
}
