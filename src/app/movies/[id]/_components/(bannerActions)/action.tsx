import React from "react";
import { action } from "./banner-action";

interface Props {
  children: React.ReactNode;
  onMarked: (action: action) => void;
  isChecked: boolean;
  title: string;
}
const Action = ({ children, onMarked, isChecked, title }: Props) => {
  return (
    <button
      onClick={() => onMarked(isChecked ? "remove" : "add")}
      title={title}
      className=" bg-white/20 h-10 w-10 hover:bg-white/40 transition-colors duration-300 gap-x-2 rounded-full flex justify-center items-center"
    >
      {children}
    </button>
  );
};

export default Action;
