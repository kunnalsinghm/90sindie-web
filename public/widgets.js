(()=>{
const el=h=>{const d=document.createElement("div");d.innerHTML=h.trim();return d.firstChild};
const ls=(k,v)=>{try{return v===undefined?localStorage.getItem(k):localStorage.setItem(k,v)}catch(e){return null}};
const W=el('<div id="widgets"></div>');document.body.appendChild(W);
let timers=[];

function wd(title,html,cls){
 const d=el(`<div class="wd ${cls||""}"><div class="wh"><span>${title}</span><button aria-label="Close">✕</button></div><div class="wb">${html}</div></div>`);
 W.appendChild(d);d.querySelector("button").onclick=()=>d.remove();
 const h=d.querySelector(".wh");
 h.onpointerdown=e=>{if(e.target.tagName==="BUTTON"||innerWidth<=800)return;
  const r=d.getBoundingClientRect();Object.assign(d.style,{position:"fixed",left:r.left+"px",top:r.top+"px",width:r.width+"px"});
  const sx=e.clientX-r.left,sy=e.clientY-r.top;h.setPointerCapture(e.pointerId);
  const mv=ev=>{d.style.left=Math.min(Math.max(0,ev.clientX-sx),innerWidth-60)+"px";d.style.top=Math.min(Math.max(0,ev.clientY-sy),innerHeight-80)+"px"};
  const up=()=>{h.removeEventListener("pointermove",mv);h.removeEventListener("pointerup",up)};
  h.addEventListener("pointermove",mv);h.addEventListener("pointerup",up)};
 return d.querySelector(".wb")}

const WX=c=>c===0?["Clear","☀️"]:c<=2?["Partly cloudy","⛅"]:c===3?["Overcast","☁️"]:c<=48?["Fog","🌫️"]:c<=57?["Drizzle","🌦️"]:c<=67?["Rain","🌧️"]:c<=77?["Snow","❄️"]:c<=82?["Showers","🌧️"]:["Thunderstorm","⛈️"];
const FACTS=[["10M","yearly engagement (up to) on a creator account"],["2×","Best Athlete, NIT Durgapur (2024-25, 2025-26)"],["2,500+","registrations across 14 events, Literary Circle site"],["~8,000","event participation under my PR lead (+34%)"],["95%+","test coverage on the Zoho Cloud Spend widget"],["700+","tests on Kivora Guard (tested in simulation)"],["15+","brands partnered with on campaigns and ads"],["230+","delegates at NITMUN, which I led as Editor-in-Chief"]];

function build(){
 timers.forEach(clearInterval);timers=[];W.innerHTML="";
 /* analog clock */
 const ticks=Array.from({length:12},(_,i)=>{const a=i*Math.PI/6,s=Math.sin(a),c=Math.cos(a);return `<line x1="${50+s*40}" y1="${50-c*40}" x2="${50+s*45}" y2="${50-c*45}" stroke="#245edb" stroke-width="2"/>`}).join("");
 const ck=wd("Clock",`<svg viewBox="0 0 100 100" width="120" height="120"><circle cx="50" cy="50" r="47" fill="#fff" stroke="#245edb" stroke-width="4"/>${ticks}<line class="hh" x1="50" y1="54" x2="50" y2="28" stroke="#102a6b" stroke-width="4" stroke-linecap="round"/><line class="mm" x1="50" y1="56" x2="50" y2="16" stroke="#102a6b" stroke-width="3" stroke-linecap="round"/><line class="ss" x1="50" y1="60" x2="50" y2="12" stroke="#c00" stroke-width="1.5"/><circle cx="50" cy="50" r="3" fill="#c00"/></svg><div class="cd"></div>`);
 const rot=(s,a)=>ck.querySelector(s).setAttribute("transform",`rotate(${a} 50 50)`);
 const tick=()=>{const d=new Date(),h=d.getHours()%12,m=d.getMinutes(),s=d.getSeconds();rot(".hh",(h+m/60)*30);rot(".mm",(m+s/60)*6);rot(".ss",s*6);ck.querySelector(".cd").textContent=d.toLocaleDateString([],{weekday:"long",day:"numeric",month:"long"})};
 tick();timers.push(setInterval(tick,1000));
 /* weather */
 const wx=wd("Weather","<small>Loading…</small>");
 const load=async()=>{try{const r=await fetch("https://api.open-meteo.com/v1/forecast?latitude=23.52&longitude=87.31&current=temperature_2m,weather_code&timezone=auto"),d=await r.json(),[t,i]=WX(d.current.weather_code);
  wx.innerHTML=`<div class="wxb"><span>${i}</span><div><b>${Math.round(d.current.temperature_2m)}°C</b><br>${t}</div></div><small>Durgapur, India</small>`}catch(e){wx.innerHTML="<small>Weather unavailable right now</small>"}};
 load();timers.push(setInterval(load,900000));
 /* sticky note (editable, saved in this browser) */
 const nt=wd("Sticky Note",'<div class="stn" contenteditable="true" spellcheck="false"></div>',"sticky");
 const nn=nt.querySelector(".stn");
 nn.innerText=ls("note")||"📌 Now\n• Preparing for PM / TPM roles\n• Building Kivora at Zuvoxia (Guard: tested in simulation, no customers yet)\n• Building FinOps Copilot\n• Shipped OpenCounsel (live)";
 nn.oninput=()=>ls("note",nn.innerText);
 /* highlights */
 const hl=wd("Highlights",'<div class="hn"></div><div class="hc"></div>');let k=0;
 const show=()=>{const [n,c]=FACTS[k++%FACTS.length],a=hl.querySelector(".hn"),b=hl.querySelector(".hc");a.classList.add("fade");b.classList.add("fade");setTimeout(()=>{a.textContent=n;b.textContent=c;a.classList.remove("fade");b.classList.remove("fade")},400)};
 show();timers.push(setInterval(show,4500));
 /* Kunal stats */
 wd("Kunal Stats",[["Focus",80],["Creativity",90],["Fitness",85]].map(([a,b])=>`<div class="ks"><span>${a}</span><span>${b}%</span></div><div class="kb"><i style="width:${b}%"></i></div>`).join(""),"opt");
}

const show=on=>{W.style.display=on?"":"none";document.body.classList.toggle("wg",on&&innerWidth>=1280);ls("wg",on?"1":"0")};
const isOn=()=>W.style.display!=="none";
build();{const s=ls("wg");show(s===null?innerWidth>=1280:s==="1")}
addEventListener("resize",()=>document.body.classList.toggle("wg",isOn()&&innerWidth>=1280));

/* ---------- Task Manager ---------- */
app("tm","Windows Task Manager","📈",420,340,v=>{
 v.innerHTML='<div class="mbar"><span>File</span><span>Options</span><span>View</span><span>Help</span></div><div class="tmh">Applications</div><div class="tml"></div><div class="tmb"><button class="send" data-a="sw">Switch To</button><button class="send" data-a="end">End Task</button></div><div class="stat"><div class="tms"></div></div>';
 let sel=null;const list=v.querySelector(".tml");
 const draw=()=>{if(wins.tm.el.classList.contains("hide"))return;list.innerHTML="";
  Object.entries(wins).forEach(([id,x])=>{if(x.btn.style.display==="none")return;const d=document.createElement("div");d.textContent=x.btn.textContent+(x.el.classList.contains("hide")?"   (Minimized)":"   (Running)");if(id===sel)d.className="sel";d.onclick=()=>{sel=id;draw()};list.appendChild(d)});
  v.querySelector(".tms").textContent="Applications: "+list.children.length};
 v.onclick=e=>{const a=e.target.dataset&&e.target.dataset.a;if(a&&sel&&wins[sel]){if(a==="sw")openWin(sel);else wins[sel].el.querySelector("[data-a=x]").click();draw()}};
 draw();setInterval(draw,1000)});

/* ---------- Paint ---------- */
app("paint","untitled - Paint","🖌️",580,440,v=>{
 const cols=["#000000","#808080","#800000","#ff0000","#ff8000","#ffff00","#00aa00","#00cccc","#0000ff","#880088","#ffffff"];
 v.innerHTML='<div class="mbar"><span>File</span><span>Edit</span><span>View</span><span>Image</span><span>Help</span></div><div class="pt"><div class="pp"></div><select><option value="2">Thin</option><option value="5" selected>Medium</option><option value="14">Thick</option></select><button class="send" data-a="er">Eraser</button><button class="send" data-a="cl">Clear</button><button class="send" data-a="sv">Save PNG</button></div><div class="pw"><canvas width="900" height="520"></canvas></div>';
 const cv=v.querySelector("canvas"),g=cv.getContext("2d"),sz=v.querySelector("select"),pp=v.querySelector(".pp");
 const clear=()=>{g.fillStyle="#fff";g.fillRect(0,0,cv.width,cv.height)};clear();
 let col="#000000",er=false,down=false;g.lineCap=g.lineJoin="round";
 cols.forEach(c=>{const i=document.createElement("i");i.style.background=c;i.onclick=()=>{col=c;er=false};pp.appendChild(i)});
 const pos=e=>{const r=cv.getBoundingClientRect();return[e.clientX-r.left,e.clientY-r.top]};
 cv.onpointerdown=e=>{down=true;cv.setPointerCapture(e.pointerId);const[x,y]=pos(e);g.strokeStyle=er?"#fff":col;g.lineWidth=+sz.value;g.beginPath();g.moveTo(x,y);g.lineTo(x+.1,y);g.stroke()};
 cv.onpointermove=e=>{if(!down)return;const[x,y]=pos(e);g.lineTo(x,y);g.stroke();g.beginPath();g.moveTo(x,y)};
 cv.onpointerup=cv.onpointercancel=()=>{down=false};
 v.onclick=e=>{const a=e.target.dataset&&e.target.dataset.a;if(a==="er")er=true;else if(a==="cl")clear();else if(a==="sv"){const l=document.createElement("a");l.download="my-drawing.png";l.href=cv.toDataURL();l.click()}}});

/* ---------- desktop + menu + context menu hooks ---------- */
addIcon("🖌️","Paint",apps.paint);
addMenu("l","🖌️","Paint",apps.paint);addMenu("r","📈","Task Manager",apps.tm);addMenu("r","🧩","Toggle Widgets",()=>show(!isOn()));
window.XTRA=()=>[[isOn()?"Hide Widgets":"Show Widgets",()=>show(!isOn())],["Reset Widgets",()=>{build();show(true)}],["Paint",apps.paint],["Task Manager",apps.tm]];

/* ---------- screensaver after 90s idle ---------- */
const sv=document.createElement("canvas");sv.id="ss";document.body.appendChild(sv);
let idle=0,raf=0,stars=[];const sg=sv.getContext("2d");
const stop=()=>{sv.classList.remove("on");cancelAnimationFrame(raf)};
const start=()=>{sv.width=innerWidth;sv.height=innerHeight;sv.classList.add("on");stars=Array.from({length:220},()=>({x:(Math.random()-.5)*innerWidth,y:(Math.random()-.5)*innerHeight,z:Math.random()*innerWidth}));
 const frame=()=>{sg.fillStyle="#000";sg.fillRect(0,0,sv.width,sv.height);sg.fillStyle="#fff";
  stars.forEach(s=>{s.z-=6;if(s.z<=1){s.x=(Math.random()-.5)*sv.width;s.y=(Math.random()-.5)*sv.height;s.z=sv.width}const k=300/s.z,x=sv.width/2+s.x*k,y=sv.height/2+s.y*k,r=Math.max(.4,(1-s.z/sv.width)*2.5);sg.beginPath();sg.arc(x,y,r,0,7);sg.fill()});
  sg.font="700 28px 'Trebuchet MS',sans-serif";sg.textAlign="center";sg.fillStyle="#9fc2ff";sg.fillText("Kunal Singh Munda",sv.width/2,sv.height/2);raf=requestAnimationFrame(frame)};frame()};
["pointermove","pointerdown","keydown","wheel","touchstart"].forEach(t=>addEventListener(t,()=>{idle=0;if(sv.classList.contains("on"))stop()},{passive:true}));
setInterval(()=>{if(++idle===90&&!document.hidden)start()},1000);
})();
