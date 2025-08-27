import React from 'react'
export default function RGBAuthButton({children,className='',...props}){
  return(<button className={`relative rounded-xl px-4 py-2 font-semibold text-white transition-all
    rgb-outline shadow-lg hover:shadow-2xl hover:scale-[1.03]
    before:absolute before:inset-[-2px] before:rounded-[14px] before:bg-inherit before:blur-xl before:opacity-80 before:-z-10 ${className}`}{...props}>
    <span className="relative z-10 mix-blend-screen">{children}</span></button>)}