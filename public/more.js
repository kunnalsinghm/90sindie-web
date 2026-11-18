(()=>{
/* ====== EDIT THESE ====== */
const BOOK_URL="mailto:singhkunal7934@gmail.com?subject=Let%27s%20chat&body=Hi%20Kunal%2C%20I%27d%20like%20to%20book%20a%20short%20chat."; // put your Calendly link here
const REEL=window.REEL||[];          // showreel: {title:"Brand film",url:"https://www.youtube.com/watch?v=XXXXXXXXXXX"} or {title:"Clip",url:"/reel.mp4"}
/* ======================== */
const el=h=>{const d=document.createElement("div");d.innerHTML=h.trim();return d.firstChild};
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const ls=(k,v)=>{try{return v===undefined?localStorage.getItem(k):localStorage.setItem(k,v)}catch(e){return null}};
const ss=(k,v)=>{try{return v===undefined?sessionStorage.getItem(k):sessionStorage.setItem(k,v)}catch(e){return null}};
const link=u=>u.startsWith("http")?window.open(u,"_blank","noopener"):(location.href=u);

/* ---------- sounds (tray volume icon mutes) ---------- */
let muted=ls("mute")==="1",AC;
const tone=(f,t,d,g,type)=>{if(muted)return;try{AC=AC||new (window.AudioContext||window.webkitAudioContext)();const o=AC.createOscillator(),v=AC.createGain(),s=AC.currentTime+t;o.type=type||"sine";o.frequency.value=f;o.connect(v);v.connect(AC.destination);v.gain.setValueAtTime(.0001,s);v.gain.exponentialRampToValueAtTime(g||.06,s+.02);v.gain.exponentialRampToValueAtTime(.0001,s+d);o.start(s);o.stop(s+d+.05)}catch(e){}};
const sfx={open:()=>tone(880,0,.12,.04),pop:()=>tone(660,0,.08,.05),err:()=>{tone(440,0,.18,.08,"square");tone(330,.15,.25,.08,"square")},off:()=>[784,659,523,392].forEach((f,i)=>tone(f,i*.2,.4,.1))};
const vol=document.querySelector("#tray .ti");
if(vol){vol.textContent=muted?"🔇":"🔊";vol.style.cursor="pointer";vol.onclick=()=>{muted=!muted;ls("mute",muted?"1":"0");vol.textContent=muted?"🔇":"🔊";if(!muted)sfx.open()}}
document.addEventListener("click",e=>{if(e.target.id==="so")sfx.off()});

/* ---------- per-window view counts (admin page) + sounds ---------- */
const track=id=>{try{fetch("/api/view",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({w:String(id)}),keepalive:true}).catch(()=>{})}catch(e){}};
const _mk=window.mk,_ow=window.openWin;
window.mk=function(){sfx.open();track(arguments[0]);return _mk.apply(this,arguments)};
window.openWin=function(id){sfx.open();track(id);return _ow.apply(this,arguments)};

/* ---------- window snapping (drag to left/right edge = half, top = maximize) ---------- */
window.snapWin=(w,ev)=>{if(!ev||innerWidth<=800)return;const x=ev.clientX,y=ev.clientY,set=o=>Object.assign(w.style,{right:"auto",bottom:"auto",top:"0",height:"100%"},o);
 if(y<=4)w.classList.add("max");else if(x<=6)set({left:"0",width:"50%"});else if(x>=innerWidth-6)set({left:"50%",width:"50%"})};

/* ---------- Resume ---------- */
app("resume","Resume.pdf - Adobe Reader","📄",740,540,v=>{
 v.innerHTML=`<div class="mbar"><span>File</span><span>Edit</span><span>View</span><span>Help</span><a href="${esc(LINKS.resume)}" download>⬇ Download</a><a href="${esc(LINKS.resumeDrive||"#")}" target="_blank" rel="noopener" style="margin-left:12px">Google Drive ↗</a></div><iframe class="frm" src="${esc(LINKS.resume)}" title="Resume"></iframe>`});

/* ---------- Kivora case study (Word-style document) ---------- */
app("case","Kivora - Case Study.doc - Microsoft Word","📘",780,560,v=>{
 v.innerHTML=`<div class="mbar"><span>File</span><span>Edit</span><span>View</span><span>Insert</span><span>Format</span><span>Help</span></div><div class="doc"><div class="paper">
<h1>Kivora: AI Cost-Governance Platform</h1><div class="sub">Product case study · Zuvoxia (independent venture) · Product Lead &amp; Developer · Aug 2026 – present</div>
<div class="warn">⚠ Honest status: Kivora Guard is built and tested in simulation. It isn’t verified on live providers, has no customers yet, and isn’t publicly available.</div>
<h2>1. Problem</h2><p>Teams using multiple LLM providers lack visibility into AI spend and protection from runaway costs. AI bills arrive as one number; I’m working on making them explainable: where the spend goes, who or what caused it, and how to stay within budget.</p>
<h2>2. Strategy</h2><p>Defined buyer personas and positioning against LLM gateways and cost-observability tools. The roadmap has three stages:</p>
<table><tr><th>Stage</th><th>Focus</th></tr><tr><td>1</td><td>Visibility</td></tr><tr><td>2</td><td>Optimization</td></tr><tr><td>3</td><td>Autonomy</td></tr></table>
<h2>3. PRD and validation</h2><p>Authored a 9-section PRD with 5 success metrics (for example cost per successful agent task and retry-cost ratio), scope, trade-offs and risks. Stage gates keep building behind validation: 5–10 buyer interviews first (planned for December 2026), then paying-customer thresholds.</p>
<h2>4. Pricing hypotheses</h2>
<table><tr><th>Product</th><th>Model</th></tr><tr><td>Guard</td><td>$999–$2,500 per month</td></tr><tr><td>Compass (AI model-downgrade recommendations)</td><td>15–20% of verified savings against a baseline</td></tr><tr><td>Autopilot</td><td>Enterprise add-on</td></tr></table>
<p>These are framed as hypotheses to test with buyers, not settled facts.</p>
<h2>5. The three products</h2><table><tr><th>Product</th><th>Status</th></tr><tr><td>Guard</td><td>Built, tested in simulation</td></tr><tr><td>Compass</td><td>Working prototype</td></tr><tr><td>Autopilot</td><td>Early prototype on simulated data</td></tr></table><h2>6. Guard: what was built</h2><ul><li>About 36,000 lines: an OpenAI/Anthropic-compatible streaming proxy, per-team budgets, and idempotent usage metering on schema-per-tenant PostgreSQL.</li><li>700+ tests.</li><li>Load test of about 35,000 requests at up to 200 concurrency on 1 vCPU: 0 errors and 0 dropped billing records.</li><li>Indexing cut budget-check latency by 65% (about 40 ms to about 14 ms).</li></ul>
<h2>7. Next</h2><p>Talk to engineers and founders who run AI in production, validate the problem and pricing, and verify Guard on live providers.</p></div></div>`});

/* ---------- Ask Kunal (messenger) ---------- */
const QA=[
["Who are you?","I’m Kunal Singh Munda, a student at NIT Durgapur: developer, filmmaker, athlete and creator, building products (Kivora, OpenCounsel), making cinematic travel films, competing in track events and leading campus teams. Right now I’m preparing for Product and Technical Product Manager roles."],
["What is Kivora?","Kivora (at Zuvoxia) is software that helps teams see where their AI spend goes, who or what caused it, and stay within budget. Honest status: Kivora Guard is built and tested in simulation, isn’t verified on live providers, has no customers yet, and isn’t publicly available."],
["What did you do at Zoho?","As a Software Development Engineer Intern on Zoho Cloud Spend (May–Jun 2026), I owned a full-stack collaboration widget (5 REST APIs, 15+ rich-text options), shipped a reusable rule-builder (an estimated 40% less configuration time) and led testing to 95%+ coverage."],
["What about MyCPTrainer?","As a Product Engineer Intern (May–Jul 2025) I cut load time by 40%, cut a reminder cron job from 50 to 15 minutes, and co-developed SheetScope on real-time Codeforces API integrations."],
["Why Technical Product Management?","Zoho showed me it isn’t just about writing code. It’s about real problems, real users and how great products are born. TPM is where technology, creativity and people come together."],
["What are your strongest skills?","Full-stack development (React, Next.js, Node.js, PostgreSQL), product work (PRDs, roadmaps, pricing, success metrics) and growth and content (campaigns, community, outreach)."],
["Tell me about your creator work","I’ve partnered with 15+ brands on promotions, campaigns, scripting and ads, driving 8 to 10 million yearly engagements."],
["Are you looking for roles?","Yes. I’m preparing for Product Manager and Technical Product Manager roles, and I’m open to brand collaborations and film projects too."],
["How can I reach you?","Email singhkunal7934@gmail.com, or use the Outlook Express window or the Contact page."]];
QA.push(...(window.QAX||[]));
app("msn","Ask Kunal - Messenger","🗨️",460,520,v=>{
 v.innerHTML='<div class="msn"><div class="msh"><b>Kunal Singh Munda</b><br>Online · pick a question below</div><div class="msl"></div><div class="msq"></div><div class="msf"><button>📅 Book a chat</button></div></div>';
 const log=v.querySelector(".msl"),q=v.querySelector(".msq");
 const add=(who,text,cls)=>{const p=document.createElement("p");p.className=cls||"";const w=document.createElement("div"),t=document.createElement("div");w.className="who";w.textContent=who+" says:";t.textContent=text;p.append(w,t);log.appendChild(p);log.scrollTop=log.scrollHeight;return p};
 add("Kunal","Hi! 👋 Thanks for stopping by. Ask me anything using the buttons below.");
 QA.forEach(([a,b])=>{const btn=document.createElement("button");btn.textContent=a;btn.onclick=()=>{add("You",a,"you");sfx.pop();const t=add("Kunal","…");setTimeout(()=>{t.remove();add("Kunal",b);sfx.pop()},550)};q.appendChild(btn)});
 v.querySelector(".msf button").onclick=()=>link(BOOK_URL)});

/* ---------- Windows Media Player ---------- */
app("wmp","Windows Media Player","▶️",660,440,v=>{
 v.innerHTML='<div class="wmp"><div class="wscr"></div><div class="wpl"><b>Now Playing</b><div class="wli"></div></div></div>';
 const scr=v.querySelector(".wscr"),li=v.querySelector(".wli");
 if(!REEL.length){scr.innerHTML='<div class="wempty">🎬<br>Showreel coming soon<small>Add your film and brand videos to the REEL list at the top of public/more.js</small></div>';li.textContent="(empty playlist)";return}
 const yt=u=>(u.match(/(?:v=|youtu\.be\/|embed\/)([\w-]{11})/)||[])[1];
 const play=i=>{const r=REEL[i],id=yt(r.url);scr.innerHTML=id?`<iframe src="https://www.youtube.com/embed/${id}" allowfullscreen allow="encrypted-media"></iframe>`:`<video src="${esc(r.url)}" controls autoplay></video>`;li.childNodes.forEach((d,j)=>d.classList.toggle("on",j===i))};
 REEL.forEach((r,i)=>{const d=document.createElement("div");d.textContent="▶ "+r.title;d.onclick=()=>play(i);li.appendChild(d)});play(0)});

/* ---------- My Computer / My Documents ---------- */
const FS={n:"My Documents",c:[
 {n:"Projects",i:"📁",c:[{n:"Kivora Case Study.doc",i:"📘",a:()=>apps.case()},{n:"Literary Circle Website",i:"🌐",a:()=>openWin("show","software")}]},
 {n:"Experience",i:"📁",c:[{n:"Zoho - SDE Intern",i:"💼",a:()=>openWin("show","experience")},{n:"MyCPTrainer - Product Engineer Intern",i:"💼",a:()=>openWin("show","experience")}]},
 {n:"Achievements",i:"📁",c:[{n:"Leadership and awards",i:"🏆",a:()=>openWin("show","leadership")}]},
 {n:"Creator",i:"📁",c:[{n:"Content and brand work",i:"🎬",a:()=>openWin("show","creator")},{n:"Showreel",i:"▶️",a:()=>apps.wmp()}]},
 {n:"Resume.pdf",i:"📄",a:()=>apps.resume()},{n:"README.txt",i:"📝",a:()=>apps.note()},{n:"Blog.txt",i:"📝",a:()=>apps.blog()}]};
app("explorer","My Documents","💽",600,420,v=>{
 v.innerHTML='<div class="exh"><button data-a="up">⬆ Up</button><input class="ad" readonly></div><div class="fl"></div><div class="stat"><div class="es"></div></div>';
 let path=[FS];const fl=v.querySelector(".fl"),ad=v.querySelector(".ad"),es=v.querySelector(".es");
 const show=()=>{const cur=path[path.length-1];ad.value=path.map(p=>p.n).join("\\");fl.innerHTML="";
  cur.c.forEach(x=>{const d=document.createElement("div");d.className="fi";d.innerHTML=`<i>${x.i}</i>`;d.append(x.n);
   const open=()=>{if(x.c){path.push(x);show()}else x.a()};
   d.onclick=()=>{fl.querySelectorAll(".sel").forEach(s=>s.classList.remove("sel"));d.classList.add("sel");if(matchMedia("(pointer:coarse)").matches)open()};d.ondblclick=open;fl.appendChild(d)});
  es.textContent=cur.c.length+" object(s)"};
 v.querySelector("[data-a=up]").onclick=()=>{if(path.length>1){path.pop();show()}};show()});

/* ---------- Internet Explorer (opens sites in a new tab; many sites block embedding) ---------- */
app("ie","Internet Explorer","🌐",680,460,v=>{
 v.innerHTML=`<div class="exh"><button data-a="home">🏠 Home</button><input class="ad" placeholder="Type a web address, press Enter"><button data-a="go">Go</button></div><div class="iepg"><h1>My Favorites</h1><a href="${esc(LINKS.linkedin)}" target="_blank" rel="noopener">🔗 LinkedIn</a><a href="${esc(LINKS.github)}" target="_blank" rel="noopener">💻 GitHub</a><a href="${esc(LINKS.leetcode)}" target="_blank" rel="noopener">🧩 LeetCode</a><a href="${esc(LINKS.youtube||"#")}" target="_blank" rel="noopener">🎬 YouTube</a><a href="${esc(LINKS.instagram||"#")}" target="_blank" rel="noopener">📸 Instagram</a><a href="${esc(LINKS.email)}">✉️ Email me</a></div><div class="stat"><div>Sites open in a new tab (many sites block embedding)</div></div>`;
 const ad=v.querySelector(".ad"),go=()=>{let u=ad.value.trim();if(!u)return;if(!/^https?:\/\//i.test(u))u="https://"+u;window.open(u,"_blank","noopener")};
 ad.onkeydown=e=>{if(e.key==="Enter")go()};v.querySelector("[data-a=go]").onclick=go;v.querySelector("[data-a=home]").onclick=()=>{ad.value=""}});

/* ---------- Outlook Express (sends through /api/contact) ---------- */
app("mail","New Message - Outlook Express","📧",540,460,v=>{
 v.innerHTML='<div class="oe"><label>To:</label><input value="Kunal Singh Munda" readonly><label>Your name:</label><input class="mn" maxlength="80"><label>Your email:</label><input class="me" type="email" maxlength="120"><label>Subject:</label><input class="ms2" maxlength="100"><label>Message:</label><textarea class="mb2" maxlength="1700"></textarea><button class="send">✉ Send</button><span class="mr2"></span></div>';
 const g=s=>v.querySelector(s),r=g(".mr2");
 g(".send").onclick=async()=>{const name=g(".mn").value.trim(),email=g(".me").value.trim(),sub=g(".ms2").value.trim(),body=g(".mb2").value.trim();
  if(!name||!email||!body){r.textContent="Please fill in your name, email and message.";return}r.textContent="Sending…";
  try{const res=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name,email,message:(sub?"Subject: "+sub+"\n\n":"")+body})}),d=await res.json();
   r.textContent=res.ok?"Message sent. Thank you!":(d.error||"Something went wrong.");if(res.ok){g(".ms2").value="";g(".mb2").value=""}}catch(e){r.textContent="Could not reach the server."}}});

/* ---------- Blog (draft posts, edit freely) ---------- */
const POSTS0=[
["Why AI bills should be explainable","AI bills arrive as one number. For teams running several LLM providers, that number hides which team, feature or agent caused it. That is the problem I’m working on with Kivora: making the bill explainable, so teams can see where spend goes, who or what caused it, and stay within budget.\n\nWhere we are, honestly: Kivora Guard is built and tested in simulation, isn’t verified on live providers, and has no customers yet. The next step is talking to engineers and founders who run AI in production."],
["What Zoho taught me about product","This summer at Zoho (Cloud Spend) I owned a collaboration widget end to end: from raw requirements to 5 REST APIs and a rich-text editor, plus a rule-builder that non-technical users could configure.\n\nThe biggest lesson wasn’t code. It was understanding the real problem and the real user before writing anything. That is what pulled me toward Technical Product Management."],
["Validate first, then build","For Kivora I wrote a PRD with success metrics and stage gates before scaling the build: 5–10 buyer interviews first, then paying-customer thresholds.\n\nThe pricing (Guard, Compass, Autopilot) is framed as hypotheses to test with buyers, not facts. Building follows validation, not the other way around."]];
const POSTS=window.POSTS?window.POSTS.map(p=>[p.t,p.x,p.d]):POSTS0;
app("blog","Blog.txt - Notepad","📝",640,420,v=>{
 v.innerHTML='<div class="bl"><div class="bll"></div><div class="blr"></div></div>';const l=v.querySelector(".bll"),r=v.querySelector(".blr");
 const show=i=>{r.innerHTML="";const h=document.createElement("h2"),s=document.createElement("small"),p=document.createElement("div");h.textContent=POSTS[i][0];s.textContent=(POSTS[i][2]||"Draft")+" · Kunal Singh Munda";p.style.whiteSpace="pre-wrap";p.style.marginTop="12px";p.textContent=POSTS[i][1];r.append(h,s,p);l.childNodes.forEach((d,j)=>d.classList.toggle("on",j===i))};
 POSTS.forEach((p,i)=>{const d=document.createElement("div");d.textContent=p[0];d.onclick=()=>show(i);l.appendChild(d)});show(0)});

/* ---------- Color scheme + wallpaper slideshow ---------- */
const setTheme=t=>{document.body.classList.remove("th-silver","th-olive");if(t)document.body.classList.add("th-"+t);ls("theme",t||"")};
setTheme(ls("theme")||"");
let slide=null,si=0;
app("themes","Appearance","🎨",380,260,v=>{
 v.innerHTML='<div class="thm"><b>Color scheme</b><div class="tb2"><button data-t="" style="background:#245edb">Blue</button><button data-t="silver" style="background:#8c8ca8">Silver</button><button data-t="olive" style="background:#6b8040">Olive Green</button></div><label style="margin:0"><input type="checkbox" class="sl" style="width:auto"> Rotate the wallpaper every 30 seconds</label></div>';
 v.onclick=e=>{const t=e.target.dataset&&e.target.dataset.t;if(t!==undefined&&e.target.tagName==="BUTTON")setTheme(t)};
 const c=v.querySelector(".sl");c.checked=!!slide;c.onchange=()=>{clearInterval(slide);slide=null;if(c.checked&&window.setWall)slide=setInterval(()=>{si=(si+1)%WALLS.length;setWall(si)},30000)}});

/* ---------- Blue screen + Windows Update popup (easter eggs) ---------- */
function bsod(){const b=el('<div id="bsod"><pre>A problem has been detected and Windows has been shut down to prevent damage to your portfolio.\n\nKUNAL_IS_TOO_AWESOME_EXCEPTION\n\nIf this is the first time you\'ve seen this stop error screen, relax. It is a joke.\n\nTechnical information:\n*** STOP: 0x000000HR (0xHIRE, 0x0000KUNAL, 0xTPM, 0x2027)\n\nPress any key or click to continue</pre></div>');
 document.body.appendChild(b);sfx.err();const off=()=>{b.remove();removeEventListener("keydown",off)};b.onclick=off;setTimeout(()=>addEventListener("keydown",off),300)}
function showUpdate(){if(document.getElementById("upd"))return;
 const u=el('<div id="upd"><div class="sh">Automatic Updates</div><div class="ub"><p>🛡️ Updates are ready for your computer.<br><small>Kunal Singh Munda Showcase 2026 (KB2026001)</small></p><div class="up"><i></i></div><div class="uf"><button class="send" data-a="i">Install</button> <button class="send" data-a="l">Later</button></div></div></div>');
 document.body.appendChild(u);sfx.err();
 u.onclick=e=>{const a=e.target.dataset&&e.target.dataset.a;if(a==="l"||a==="o")u.remove();
  if(a==="i"){const bar=u.querySelector(".up");bar.style.display="block";u.querySelector(".uf").style.visibility="hidden";setTimeout(()=>bar.firstChild.style.width="100%",30);
   setTimeout(()=>{u.querySelector("p").textContent="✅ Updates installed. Your computer is now 100% more hireable.";bar.remove();const f=u.querySelector(".uf");f.innerHTML='<button class="send" data-a="o">OK</button>';f.style.visibility="visible";sfx.open()},3200)}}}
const upd=()=>{if(ss("upd"))return;const lg=document.getElementById("login");if(lg&&!lg.classList.contains("gone")){setTimeout(upd,30000);return}ss("upd","1");showUpdate()};
setTimeout(upd,150000);
window.TERMX={bsod:()=>{bsod();return ""},update:()=>{showUpdate();return "Checking for updates…"}};

/* ---------- Alt+` window switcher (browsers reserve Alt+Tab) ---------- */
let alt=null,ai=0;
addEventListener("keydown",e=>{if(e.altKey&&e.code==="Backquote"){e.preventDefault();
 const list=Object.entries(wins).filter(([id,w])=>w.btn.style.display!=="none");if(!list.length)return;
 if(!alt){alt=el('<div id="alt"></div>');document.body.appendChild(alt);ai=0}
 ai=(ai+1)%list.length;alt.innerHTML=list.map(([id,w],i)=>`<div class="${i===ai?"on":""}">${esc(w.btn.textContent)}</div>`).join("");alt.dataset.id=list[ai][0]}});
addEventListener("keyup",e=>{if(e.key==="Alt"&&alt){const id=alt.dataset.id;alt.remove();alt=null;if(id)openWin(id)}});

/* ---------- desktop icons + Start menu + keyboard access ---------- */
addIcon("💽","My Computer",apps.explorer);addIcon("🌐","Internet Explorer",apps.ie);addIcon("🗨️","Ask Kunal",apps.msn);
[["▶️","Windows Media Player","wmp"],["📧","Outlook Express","mail"],["🎨","Color Scheme","themes"]].forEach(([g,t,k])=>addMenu("l",g,t,apps[k]));
[["📘","Kivora Case Study","case"],["📝","Blog","blog"],["💽","My Computer","explorer"],["🗨️","Ask Kunal","msn"]].forEach(([g,t,k])=>addMenu("r",g,t,apps[k]));
addMenu("r","📅","Book a Chat",()=>link(BOOK_URL));
document.querySelectorAll(".ico").forEach(d=>{d.tabIndex=0;d.setAttribute("role","button");d.onkeydown=e=>{if(e.key==="Enter")d.dispatchEvent(new MouseEvent("dblclick"))}});
})();
