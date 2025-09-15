import React from "react";
import RadialButton from "./RadialButton";

export default function Card({ icon, title, text, btn, onClick }) {
  return (
    <div className="glass rounded-3xl p-6 transition-all hover:translate-y-[-2px] hover:shadow-lg">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-12 w-12 rounded-2xl bg-white/25 dark:bg-white/10 grid place-items-center text-2xl">
          {icon}
        </div>
        <div>
          <h3 className="text-indigo-950 dark:text-white text-lg font-bold">
            {title}
          </h3>
          <p className="text-indigo-900/80 dark:text-white/80 text-sm">{text}</p>
        </div>
      </div>
      <RadialButton className="w-full" onClick={onClick}>
        {btn}
      </RadialButton>
    </div>
  );
}
