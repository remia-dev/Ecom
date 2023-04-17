import React, { useContext } from "react";

// Sidebar Context
import { SidebarContext } from "../contexts/SidebarContext";

// Icons
import { BsBag } from "react-icons/bs";

const Header = () => {
  const { isOpen, setIsOpen }: any = useContext(SidebarContext);
  return (
    <header className="bg-pink-200">
      <div>Header</div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer flex relative"
      >
        <BsBag className="text-2xl" />
      </div>
    </header>
  );
};

export default Header;
