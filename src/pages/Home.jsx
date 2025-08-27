import React from 'react'
import RadialButton from '../components/RadialButton'
export default function Home(){
  return(<main id="home" onMouseMove={(e)=>{document.documentElement.style.setProperty('--x',e.clientX+'px');document.documentElement.style.setProperty('--y',e.clientY+'px')}}>
    <section className="relative overflow-hidden">
      <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-indigo-400/40 blur-3xl animate-glow"/>
      <div className="absolute top-10 right-0 w-96 h-96 rounded-full bg-fuchsia-500/40 blur-3xl animate-glow"/>
      <div className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 w-[800px] h-[200px] rounded-full bg-cyan-400/20 blur-3xl animate-glow"/>
      <div className="mx-auto max-w-7xl px-4 pt-10 md:pt-16 pb-14">
        <div className="grid md:grid-cols-2 items-center gap-10">
          <div className=" mt-30px text-indigo-950 dark:text-white">
            <h1 className="text-5xl md:text-6xl font-black leading-tight drop-shadow-sm">𝗖𝗢𝗡𝗩𝗘𝗥𝗧 𝗔𝗡𝗬𝗧𝗛𝗜𝗡𝗚 <br/> 𝗔𝗡𝗬𝗧𝗛𝗜𝗡𝗚</h1>
            <p className="mt-4 text-indigo-900/80 dark:text-white/80 text-lg max-w-xl">Simple fast and AI-powered file conversion at your fingertips.</p>
            <div className="mt-8 flex gap-4"><RadialButton href="#tools" as="a">Get Started</RadialButton></div>
          </div>
          <div className="relative"><div className="">
            <img src="public\ai.png" alt="AI Robot" className="w-[300px] h-auto object-contain  animate-float"/></div></div>
        </div>
        <div id="tools" className="grid md:grid-cols-3 gap-6 mt-14">
          <Card icon="📄" title="PDF → Image" text="Turn your PDFs into images instantly." btn="Convert Now"/>
          <Card icon="🖼️" title="Image → Text (OCR)" text="Extract text from any image with AI OCR." btn="Extract Text"/>
          <Card icon="🖼️" title="PNG → JPG" text="Convert high-quality PNGs into JPGs easily." btn="Convert Now"/>
        </div>
        <div id="how" className="mt-16 rounded-3xl glass p-8">
          <h2 className="text-3xl font-extrabold text-indigo-950 dark:text-white text-center mb-6">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-6 text-indigo-950 dark:text-white">
            <Step icon="📂" title="Upload your file" text="Drag & drop or click to select."/>
            <Step icon="⚡" title="Select conversion type" text="Choose a tool from the list."/>
            <Step icon="✅" title="Download result" text="Get high quality outputs in seconds."/>
          </div>
        </div>
        <footer id="contact" className="text-indigo-900/80 dark:text-white/70 text-sm mt-16 pb-10 text-center">Built by SURAJ </footer>
      </div>
    </section></main>)}
function Card({icon,title,text,btn}){
  return(<div className="glass rounded-3xl p-6 transition-all hover:translate-y-[-2px] hover:shadow-lg">
    <div className="flex items-center gap-3 mb-4">
      <div className="h-12 w-12 rounded-2xl bg-white/25 dark:bg-white/10 grid place-items-center text-2xl">{icon}</div>
      <div><h3 className="text-indigo-950 dark:text-white text-lg font-bold">{title}</h3>
        <p className="text-indigo-900/80 dark:text-white/80 text-sm">{text}</p></div></div>
    <RadialButton className="w-full">{btn}</RadialButton></div>)}
function Step({icon,title,text}){
  return(<div className="flex items-start gap-3"><div className="h-10 w-10 grid place-items-center text-xl rounded-2xl bg-white/25 dark:bg-white/10">{icon}</div>
    <div><h4 className="font-bold">{title}</h4><p className="opacity-80">{text}</p></div></div>)}
