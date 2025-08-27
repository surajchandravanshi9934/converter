import React,{useRef} from 'react'
export default function RadialButton({as:Tag='button',className='',children,...props}){
  const ref=useRef(null)
  const update=(e)=>{const el=ref.current;if(!el)return;const r=el.getBoundingClientRect();el.style.setProperty('--x',(e.clientX-r.left)+'px');el.style.setProperty('--y',(e.clientY-r.top)+'px')}
  return(<Tag ref={ref} onMouseMove={update} onMouseEnter={update}
    className={`relative inline-flex items-center justify-center rounded-2xl px-6 py-3 font-semibold text-white transition-all
    bg-gradient-to-r from-indigo-500 via-violet-500 to-blue-500 shadow-lg hover:shadow-2xl
    before:absolute before:inset-0 before:rounded-2xl before:bg-radial before:opacity-0 hover:before:opacity-100 before:transition-opacity
    active:scale-[0.98] ${className}`} {...props}>
    <span className="relative z-10">{children}</span>
    <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/20"></span>
  </Tag>)}