"use client";

import React, { useState } from "react";
import Header from "./components/header";
import "./globals.css";
import Sidebar from "./components/sidebar";
import { ApolloWrapper } from "../../lib/apolloWrapper";

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
      <body>
        <div className="flex flex-1 w-[100vw] h-[100vh] overflow-hidden ">
          <Sidebar role={"admin"}
          />
         <div className="h-full flex-col bg-gray-400 flex-1 overflow-hidden">
           <Header user={user} logout={logout} />
           <div className="p-4 h-[calc(100vh-4rem)] box-border overflow-hidden">
            <div className="bg-white h-full overflow-x-hidden overflow-y-auto rounded-lg"><ApolloWrapper>{children}</ApolloWrapper></div> 
          </div>
        </div>
        </div>
      </body>
    </html>
    /* m-0:Useful to remove browser default spacing and overflow-hidden:If content goes beyond the element's size, hide it instead of showing a scrollbar. */
  );
}
/* overflow-x-hidden w overflow-y-auto : bech t7ot children yet7arkou ema header w sidebar dima fixe */