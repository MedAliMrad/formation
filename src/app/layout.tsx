"use client";

import React, { useState } from "react";
import Header from "./components/header";
import "./globals.css";
import Sidebar from "./components/sidebar";

interface IProps {
  children: React.ReactNode;
}
const user = { firstname: "Mohamed Ali", lastname: "Mrad" };
function logout() {
  console.log("Logging out...");
}

export default function Layout({ children }: IProps) {
  const[sidebarOpen,setSidebarOpen] =useState(false);
  return (
    <html lang="en">
      <body className="m-0 overflow-hidden">
        <div className="w-[100vw] h-[100vh]  ">
          <Header user={user} logout={logout} />
          {children}
        </div>
        <div className="flex flex-1 ">
          <Sidebar role={"admin"}
          />
        </div>
      </body>
    </html>
    /* m-0:Useful to remove browser default spacing and overflow-hidden:If content goes beyond the element's size, hide it instead of showing a scrollbar. */
  );
}
