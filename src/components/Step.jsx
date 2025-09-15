import React from "react";

export default function Step({ icon, title, text }) {
  return (
    <div className="flex items-start gap-3">
      <div className="h-10 w-10 grid place-items-center text-xl rounded-2xl bg-white/25 dark:bg-white/10">
        {icon}
      </div>
      <div>
        <h4 className="font-bold">{title}</h4>
        <p className="opacity-80">{text}</p>
      </div>
    </div>
  );
}
