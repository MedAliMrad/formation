"use client";

import React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { twMerge } from "tailwind-merge";

// Enum for Icon Position
export enum IconPosition {
  LEFT = "left",
  RIGHT = "right",
}

// Menu Element Interface
export interface MenuElement {
  title: string;
  icon?: React.ReactNode;
  onClick: () => void;
  iconPosition?: IconPosition;
}

// Props for DropdownMenu
interface DropdownMenuProps {
  menuElements: MenuElement[];
  trigger: React.ReactNode;
}

// DropdownMenu Component
export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  menuElements,
  trigger,
}) => {
  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger asChild>
        {trigger}
      </DropdownMenuPrimitive.Trigger>

      <DropdownMenuPrimitive.Content
        className={twMerge(
          "z-50 min-w-[8rem] rounded-md bg-white shadow-md",
          "p-2 focus:outline-none"
          
        )}
        side="right"
        align="start"
        alignOffset={100}
        sideOffset={-150} // Adjust dropdown position relative to the trigger
      >
        {menuElements.map((element, index) => (
          <DropdownMenuPrimitive.Item
            key={index}
            onClick={(e) => {
              element.onClick();
              e.preventDefault();
              e.stopPropagation();
            }}
            className={
              "flex items-center justify-between border-0 px-4 py-2 bg-white cursor-pointer rounded-md hover:bg-gray-100"
            }
          >
            {element.iconPosition === IconPosition.LEFT && (
              <span className="mr-2">{element.icon}</span>
            )}
            <span className="text-black">{element.title}</span>
            {element.iconPosition === IconPosition.RIGHT && (
              <span className="ml-2">{element.icon}</span>
            )}
          </DropdownMenuPrimitive.Item>
        ))}
      </DropdownMenuPrimitive.Content>
    </DropdownMenuPrimitive.Root>
  );
};
