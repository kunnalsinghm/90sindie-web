(()=>{
const el=h=>{const d=document.createElement("div");d.innerHTML=h.trim();return d.firstChild};
const ss=(k,v)=>{try{return v===undefined?sessionStorage.getItem(k):v===null?sessionStorage.removeItem(k):sessionStorage.setItem(k,v)}catch(e){return null}};
const README=["KUNAL SINGH MUNDA","Developer. Filmmaker. Athlete. Creator.","","Student at NIT Durgapur (B.Tech CSE, 2023-2027).","Building Kivora at Zuvoxia: software that helps teams see","where their AI spend goes and stay within budget.","","Honest status: Kivora Guard is built and tested in simulation.","It isn't verified on live providers, has no customers yet,","and isn't publicly available.","","Interned at Zoho (Cloud Spend) and MyCPTrainer.","Preparing for PM / TPM roles. Open to brand collaborations and film projects.","","Email: singhkunal7934@gmail.com"].join("\n");
const apps=window.apps={};let n=0,visits="…";
function app(id,title,icon,w,h,build){apps[id]=()=>{if(wins[id]){openWin(id);return}const k=n++%6;
 const x=mk(id,title,"",{icon,style:{left:`calc(14% + ${k*26}px)`,top:`${50+k*26}px`,width:`min(${w}px,94vw)`,height:`min(${h}px,calc(100vh - 110px))`}});x.view.classList.add("app");build(x.view,x)}}

window.app=app;
/* ---------- Command Prompt ---------- */
app("term","Command Prompt","⬛",680,400,(v,w)=>{
 v.innerHTML='<div class="term"><div class="to"></div><div class="tl"><span>C:\\kunal&gt;</span><input spellcheck="false" autocomplete="off" autocapitalize="off"></div></div>';
 const box=v.firstChild,out=box.querySelector(".to"),inp=box.querySelector("input"),hist=[];let hi=0;
 const say=t=>{const d=document.createElement("div");d.textContent=t;out.appendChild(d)};
 const go=p=>{openWin("show",p);return "Opening "+p+"…"};
 const C={
  help:()=>"Commands: about, skills, experience, projects, kivora, contact, whoami, date, ls, cat <file>,\n  open <about|experience|projects|contact|notepad|wallpaper>, clear, exit",
  about:()=>"Kunal Singh Munda: Developer. Filmmaker. Athlete. Creator.\nStudent at NIT Durgapur, aiming for Technical Product Management.",
  whoami:()=>"kunal-singh-munda",
  skills:()=>"Technical : Python, Java, C++, JavaScript, TypeScript, SQL, Node.js, React, Next.js, PostgreSQL, Docker, GCP\nProduct   : Roadmapping, PRDs, Product Discovery, Funnel Analysis, Pricing, A/B Testing\nAI infra  : LLM cost attribution, semantic caching, model routing, load testing",
  experience:()=>"Zoho (Cloud Spend), SDE Intern, May-Jun 2026\n  collaboration widget, 5 REST APIs, rule-builder, 95%+ test coverage\nMyCPTrainer, Product Engineer Intern, May-Jul 2025\n  load time -40%, reminder cron job 50 -> 15 min",
  projects:()=>"1. Kivora (Zuvoxia): AI cost-governance platform, pre-launch\n2. Literary Circle website (LC NITD): live, 2,500+ registrations across 14 events",
  kivora:()=>"Kivora Guard is built and tested in simulation. It isn't verified on live\nproviders, has no customers yet, and isn't publicly available.",
  contact:()=>"Email: singhkunal7934@gmail.com",
  date:()=>new Date().toString(),
  ls:()=>"README.txt   resume.pdf   kivora\\   literary-circle\\",
  cat:a=>/readme/.test(a)?README:a?"The system cannot find the file specified.":"Usage: cat <file>",
  sudo:()=>"kunal is not in the sudoers file. This incident will be reported.",
  clear:()=>{out.innerHTML="";return ""},
  exit:()=>{w.el.querySelector("[data-a=x]").click();return ""},
  open:a=>({about:"about",experience:"experience",projects:"projects",contact:"contact"}[a])?go(a):apps[{notepad:"note",wallpaper:"disp"}[a]]?(apps[{notepad:"note",wallpaper:"disp"}[a]](),"Opening "+a+"…"):"Usage: open <about|experience|projects|contact|notepad|wallpaper>"
 };Object.assign(C,window.TERMX||{});
 say("Microsoft Windows XP [Version 5.1.2600]\n(C) Copyright 1985-2001 Microsoft Corp.\n\nType 'help' to see what I can do.\n");
 box.onclick=()=>inp.focus();setTimeout(()=>inp.focus(),50);
 inp.onkeydown=e=>{
  if(e.key==="Enter"){const c=inp.value.trim();say("C:\\kunal>"+c);inp.value="";
   if(c){hist.push(c);hi=hist.length;const [cmd,...a]=c.split(/\s+/),f=C[cmd.toLowerCase()];
    const r=f?f(a.join(" ").toLowerCase()):`'${cmd}' is not recognized as an internal or external command,\noperable program or batch file.`;if(r)say(r)}
   box.scrollTop=box.scrollHeight}
  else if(e.key==="ArrowUp"){if(hi>0)inp.value=hist[--hi]}
  else if(e.key==="ArrowDown"){inp.value=hi<hist.length-1?hist[++hi]:(hi=hist.length,"")}};
});

/* ---------- Notepad ---------- */
app("note","README.txt - Notepad","📝",520,380,v=>{
 v.innerHTML='<div class="mbar"><span>File</span><span>Edit</span><span>Format</span><span>View</span><span>Help</span></div><textarea class="npt" readonly></textarea>';
 v.querySelector("textarea").value=README});

/* ---------- Social links / Recycle Bin / System / Display ---------- */
app("links","Social Links","🌐",360,250,v=>{
 const row=(i,t,h)=>`<div><span>${i}</span><a href="${h}" target="_blank" rel="noopener">${t}</a></div>`;
 v.innerHTML='<div class="lst">'+row("🔗","LinkedIn",LINKS.linkedin)+row("💻","GitHub",LINKS.github)+row("🧩","LeetCode",LINKS.leetcode)+row("🎬","YouTube",LINKS.youtube||"#")+row("📸","Instagram",LINKS.instagram||"#")+row("✉️","singhkunal7934@gmail.com",LINKS.email)+"</div>"});
app("bin","Recycle Bin","🗑️",430,260,v=>{
 v.innerHTML='<div class="lst">'+[["📄","ai_bill_surprise.pdf"],["📄","old_resume_FINAL_final_v7.doc"],["📝","i_fit_in_one_box.txt"],["📄","merge_conflict_2025.diff"],["📝","localhost_3000_already_in_use.log"]].map(([i,t])=>`<div><span>${i}</span>${t}</div>`).join("")+'</div><div class="stat"><div>5 object(s)</div><div style="width:auto">Nothing important, promise.</div></div>'});
app("sys","System Properties","🖥️",380,310,v=>{
 v.innerHTML=`<div class="sys"><b>System</b><br>Kunal Singh Munda Showcase 2026<br>Version 5.1 (XP theme)<br><br><b>Registered to</b><br>Kunal Singh Munda<br>NIT Durgapur, B.Tech CSE<br><br><b>Built with</b><br>HTML, CSS, JavaScript, Node.js, Express<br><br><b>Visitors</b><br>${visits}</div>`});
const WALLS=[["Bliss","url(/bliss.jpg) center/cover no-repeat #5a7edc"],["Luna Blue","linear-gradient(#245edb,#5a7edc)"],["Classic Teal","#008080"],["Night Sky","linear-gradient(#0b1026,#1b2a6b 60%,#2a4a9a)"],["Sunset","linear-gradient(#1c1b4b,#c2487b 60%,#f6a65a)"],["Graphite","#2b2b2b"]];
let cur=0;
const setWall=i=>{cur=i;document.documentElement.style.background=document.body.style.background=WALLS[i][1];try{localStorage.setItem("wall",i)}catch(e){}};
window.setWall=setWall;window.WALLS=WALLS;try{const i=+localStorage.getItem("wall");if(i>0&&WALLS[i])setWall(i)}catch(e){}
app("disp","Display Properties","🎨",420,300,v=>{
 v.innerHTML='<div class="sw">'+WALLS.map(([t,b],i)=>`<div data-i="${i}" style="background:${b}" class="${i===cur?"cur":""}">${t}</div>`).join("")+"</div>";
 v.onclick=e=>{const d=e.target.closest("[data-i]");if(!d)return;setWall(+d.dataset.i);v.querySelectorAll("[data-i]").forEach(x=>x.classList.toggle("cur",x===d))}});

/* ---------- desktop icons, start menu ---------- */
const addIcon=(g,t,f,p)=>{const d=el(`<div class="ico"><i>${g}</i><span>${t}</span></div>`);
 d.onclick=()=>{document.querySelectorAll(".ico").forEach(x=>x.classList.remove("sel"));d.classList.add("sel");if(matchMedia("(pointer:coarse)").matches||innerWidth<=800)f()};
 d.ondblclick=f;(p||$("#icons")).appendChild(d);return d};
window.addIcon=addIcon;addIcon("📝","README.txt",apps.note);addIcon("⬛","Command Prompt",apps.term);
addIcon("🗑️","Recycle Bin",apps.bin,$("#desk")).classList.add("bin");
$("#desk").addEventListener("pointerdown",e=>{if(!e.target.closest(".ico"))document.querySelectorAll(".ico").forEach(x=>x.classList.remove("sel"))});
addMenu("l","📝","README.txt",apps.note);addMenu("l","⬛","Command Prompt",apps.term);
addMenu("r","🌐","Social Links",apps.links);addMenu("r","🎨","Display Properties",apps.disp);

/* ---------- context menu ---------- */
const ctx=el('<div id="ctx"></div>');document.body.appendChild(ctx);
$("#desk").addEventListener("contextmenu",e=>{if(e.target.closest(".win"))return;e.preventDefault();ctx.innerHTML="";
 [["Open My Showcase",()=>openWin("show")],["Command Prompt",apps.term],["Change Wallpaper…",apps.disp],["Refresh",()=>location.reload()],["Properties",apps.sys],...(window.XTRA?XTRA():[])].forEach(([t,f])=>{const d=document.createElement("div");d.textContent=t;d.onclick=()=>{ctx.style.display="none";f()};ctx.appendChild(d)});
 ctx.style.display="block";ctx.style.left=Math.min(e.clientX,innerWidth-200)+"px";ctx.style.top=Math.min(e.clientY,innerHeight-190)+"px"});
document.addEventListener("pointerdown",e=>{if(!ctx.contains(e.target))ctx.style.display="none";if(!$("#cal").contains(e.target)&&e.target.id!=="time")$("#cal").classList.remove("open")});
document.addEventListener("keydown",e=>{if(e.key==="Escape"){ctx.style.display="none";$("#menu").classList.remove("open");$("#cal").classList.remove("open")}});

/* ---------- tray: calendar, balloon, clippy ---------- */
const tray=$("#tray");tray.insertAdjacentHTML("afterbegin",'<span class="ti" title="Volume">🔊</span><span class="ti" id="bi" title="Show tip">💬</span>');
const cal=el('<div id="cal"></div>'),bal=el('<div id="bal"></div>'),clip=el('<div id="clip"></div>');document.body.append(cal,bal,clip);
$("#time").onclick=()=>{const d=new Date(),y=d.getFullYear(),m=d.getMonth(),f=new Date(y,m,1).getDay(),dim=new Date(y,m+1,0).getDate();
 cal.innerHTML=`<h4>${d.toLocaleDateString([],{weekday:"long",month:"long",day:"numeric",year:"numeric"})}</h4><div class="cg">`+"SMTWTFS".split("").map(c=>`<b>${c}</b>`).join("")+"<span></span>".repeat(f)+Array.from({length:dim},(_,i)=>`<span class="${i+1===d.getDate()?"td":""}">${i+1}</span>`).join("")+"</div>";cal.classList.toggle("open")};
let bt;const balloon=(t,x)=>{bal.innerHTML=`<button aria-label="Close">✕</button><b>${t}</b>${x}`;bal.classList.add("open");bal.querySelector("button").onclick=()=>bal.classList.remove("open");clearTimeout(bt);bt=setTimeout(()=>bal.classList.remove("open"),10000)};
const WELCOME=()=>balloon("Welcome to my Showcase","Double-click My Showcase to begin. Try the Command Prompt, Paint, Ask Kunal, or right-click the desktop.");
$("#bi").onclick=WELCOME;
const TIPS=["Looking for my resume? Double-click Resume on the desktop.","Open the Command Prompt and type 'help'.","Right-click the desktop to change the wallpaper.","Kivora Guard is built and tested in simulation, with no customers yet. Honest status!","Ask Kunal anything in the Messenger window."];
function clippy(){if(ss("clip")||innerWidth<=800)return;let i=0;const show=()=>{clip.innerHTML=`<div class="cb"><button aria-label="Dismiss">✕</button>${TIPS[i++%TIPS.length]}</div><div class="cc">📎</div>`;clip.classList.add("open");clip.querySelector("button").onclick=()=>{clip.remove();clearInterval(iv);ss("clip","1")}};show();const iv=setInterval(show,22000)}

/* ---------- login / log off / turn off ---------- */
function chime(){try{const a=new (window.AudioContext||window.webkitAudioContext)();[[523,0],[659,.18],[784,.36],[1047,.54]].forEach(([f,t])=>{const o=a.createOscillator(),g=a.createGain(),s=a.currentTime+t;o.type="sine";o.frequency.value=f;o.connect(g);g.connect(a.destination);g.gain.setValueAtTime(.0001,s);g.gain.exponentialRampToValueAtTime(.15,s+.03);g.gain.exponentialRampToValueAtTime(.0001,s+.5);o.start(s);o.stop(s+.55)})}catch(e){}}
const login=el('<div id="login"><div class="lt"><span>Kunal Singh Munda · Showcase ’26</span></div><div class="lm"><div class="ll"><h1>Kunal Singh Munda</h1><p class="hint">To begin, click your user name</p></div><div class="lu" tabindex="0"><i>🧑‍💻</i><div><b>Kunal Singh Munda</b><span>Developer · Filmmaker · Athlete · Creator</span></div></div></div><div class="lb"><span>⏻ Turn off computer</span><span>Windows XP-style portfolio</span></div></div>');
document.body.appendChild(login);
const enter=()=>{login.classList.add("gone");ss("booted","1");chime();setTimeout(WELCOME,700);setTimeout(clippy,9000)};
const lu=login.querySelector(".lu");lu.onclick=enter;lu.onkeydown=e=>{if(e.key==="Enter")enter()};
if(ss("booted"))login.classList.add("gone");else lu.focus();
function shut(){const s=el('<div id="shut"><div class="sd"><div class="sh">Turn off computer</div><div class="sb"><button data-a="sb"><i>🌙</i>Stand By</button><button data-a="off"><i>⏻</i>Turn Off</button><button data-a="re"><i>🔄</i>Restart</button></div><div class="sf"><button class="send" data-a="x">Cancel</button></div></div></div>');document.body.appendChild(s);
 const black=(h,f)=>{s.className="black";s.innerHTML=h;s.onclick=f};const reboot=()=>{ss("booted",null);location.reload()};
 s.onclick=e=>{const b=e.target.closest("[data-a]"),a=b&&b.dataset.a;
  if(a==="x")s.remove();else if(a==="sb")black("",()=>s.remove());
  else if(a==="off")black('<div class="off">It is now safe to turn off<br>your computer.<small>(click anywhere to power on)</small></div>',reboot);
  else if(a==="re")reboot()}}
$("#menu .mf").innerHTML='<button id="lo">🔑 Log Off</button><button id="so">⏻ Turn Off Computer</button>';
$("#lo").onclick=()=>{$("#menu").classList.remove("open");login.classList.remove("gone");lu.focus()};
$("#so").onclick=()=>{$("#menu").classList.remove("open");shut()};

/* ---------- visitor counter ---------- */
fetch("/api/visit",{method:ss("seen")?"GET":"POST"}).then(r=>r.json()).then(d=>{visits=d.visits;ss("seen","1");const s=showcase.el.querySelectorAll(".stat div")[1];if(s){s.textContent="👁 "+d.visits;s.style.width="auto"}}).catch(()=>{});
})();
