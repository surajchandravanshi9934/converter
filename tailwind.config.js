export default {
  content:["./index.html","./src/**/*.{js,jsx,ts,tsx}"], darkMode:"class",
  theme:{ extend:{ fontFamily:{inter:['Inter','system-ui','sans-serif']},
    backgroundImage:{radial:'radial-gradient(800px 400px at var(--x,50%) var(--y,50%), rgba(255,255,255,0.18), transparent 40%)'},
    boxShadow:{soft:'0 10px 30px rgba(0,0,0,0.08)',glass:'inset 0 1px 0 rgba(255,255,255,0.2), 0 8px 30px rgba(0,0,0,0.15)'},
    keyframes:{float:{'0%,100%':{transform:'translateY(0px)'},'50%':{transform:'translateY(-6px)'}},
               glow:{'0%,100%':{filter:'blur(20px) opacity(0.7)'},'50%':{filter:'blur(24px) opacity(1)'}},
               rgb:{'0%':{'background-position':'0% 50%'},'50%':{'background-position':'100% 50%'},'100%':{'background-position':'0% 50%'}}},
    animation:{float:'float 6s ease-in-out infinite',glow:'glow 6s ease-in-out infinite',rgb:'rgb 4s ease infinite'}
  }}, plugins:[] }