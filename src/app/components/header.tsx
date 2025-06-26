"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { Sheet,SheetTrigger,SheetContent } from "./ui/sheet";
import {DropdownMenu} from "./ui/dropdown";
import Sidebar from "./sidebar";

interface HeaderProps {
  user: {
    firstname: string;
    lastname: string;
  } | null;
  logout: () => void;
}


export default function Header({user, logout,}:HeaderProps) {
  const [open, setOpen] = useState(false);
  const menuElements = [
    { title: "Profile", onClick: () => console.log("Profile") },
    { title: "Logout", onClick: logout },
  ];

  return (
    <header>
      <div className="bg-black px-3  md:px-6 w-full h-[4rem] flex items-center justify-between ">
        <div>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <button 
                className="text-white sm:hidden"
                onClick={()=>setOpen(true)}
                >
                <Menu/>    
                </button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-red-500 w-60 p-0">
            <Sidebar role="admin" /> {/* You can pass dynamic role if needed */}
          </SheetContent>
        </Sheet>
        </div>
        <DropdownMenu
        trigger={
            <div>
                <p className="text-white text-right text-md pb-5 md:text-right p-5">
                {user ?`${user?.firstname} ${user.lastname}`:""}</p>
            </div> /* The user container has flex-1 → it takes up all remaining horizontal space between hamburger and container edge. */
        }
        menuElements={menuElements}
        >

        </DropdownMenu>
        
        
      </div>

    </header>
  );
}
