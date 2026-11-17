// ---- Edit these links ----
const LINKS={linkedin:"#",github:"#",leetcode:"#",email:"mailto:singhkunal7934@gmail.com",phone:"tel:+918900940832"};

const APPS=[
{id:"about",ico:"🧑‍💻",title:"About Me",w:560,h:480,html:`
<h2>Kunal Singh Munda</h2>
<p class="meta">NIT Durgapur · Durgapur, West Bengal, India</p>
<p><b>Developer. Filmmaker. Athlete. Creator. I don’t fit into one box and I don’t plan to.</b></p>
<p>I’m a student at NIT Durgapur, driven by an obsession with building things that matter, whether that’s a product, a film, or a personal best.</p>
<p>Right now, that’s Kivora at Zuvoxiae: software that helps teams see where their AI spend goes, who or what caused it, and stay within budget. AI bills arrive as one number, and I’m working on making them explainable. I’m doing the part I want to do for a career: talking to engineers and founders who run AI in production, working out what’s worth building, and deciding what comes first. Where we are, honestly: our first product, Kivora Guard, is built and tested in simulation. It isn’t verified on live providers, has no customers yet, and isn’t publicly available.</p>
<p>This summer, I interned at Zoho Corporation as a Software Development Intern, and it changed the way I see technology. It wasn’t just about writing code. It was about understanding real problems, real users, and how great products are born. That pulled me toward Technical Product Management.</p>
<p>I sit at the intersection of technology, creativity, and people, and TPM is where all three come together. I’m actively learning and looking for opportunities to break in.</p>
<p>As a filmmaker and social media creator, I’ve partnered with 15+ brands on promotions, campaigns, scripting, and ads, driving 8 to 10 million yearly engagements. I don’t just create content, I craft stories that move people and drive results.</p>
<p>As an athlete, I’ve competed on some of the biggest stages in the country, where I learned that pressure is just opportunity in disguise.</p>
<p>Whether it’s shipping code, running brand campaigns, organizing events, or competing at the national level, I thrive where people, performance, and purpose meet.</p>
<p>If your team has been surprised by an AI bill, or you work in product or TPM and have advice for someone starting out, let’s connect.</p>`},
{id:"exp",ico:"💼",title:"Experience",w:560,h:480,html:`
<h2>Experience</h2>
<h3>Software Development Engineer Intern — Zoho Corporation</h3>
<p class="meta">Zoho Cloud Spend · May 2026 – Jun 2026</p>
<ul><li><b>Feature delivery:</b> Owned the lifecycle and feature delivery of a full-stack collaboration widget for Zoho Cloud Spend, turning raw product requirements into a seamless user workflow with 5 REST APIs and 15+ rich-text formatting options to capture critical cloud cost insights.</li>
<li><b>Workflow design:</b> Designed and shipped a reusable, dynamic rule-builder with local persistence and validation, enabling non-technical enterprise users to build scalable workflows and reducing system configuration time by an estimated 40%.</li>
<li><b>Quality:</b> Spearheaded QA workflows, authoring unit and integration tests across core components to reach 95%+ test coverage, mitigating post-launch regression risk and boosting deployment velocity.</li></ul>
<h3>Product Engineer Intern — MyCPTrainer</h3>
<p class="meta">20K+ active users · 60K+ monthly visits · 100+ countries · May 2025 – Jul 2025</p>
<ul><li><b>Performance &amp; reliability:</b> Cut load time by 40% with lazy loading and asset optimization; added Cloudflare CDN and edge caching to keep the platform reliable on unstable networks.</li>
<li><b>Infrastructure scale &amp; automation:</b> Cut reminder cron job runtime by 70% (50 to 15 minutes) by redesigning queries and moving to an asynchronous architecture; automated daily content with Cloudflare Cron Triggers for 800+ active users.</li>
<li><b>System architecture:</b> Co-developed SheetScope, a user-journey scraping engine on real-time Codeforces API integrations; led validation across 1,000+ edge-case test profiles to eliminate indexing errors.</li></ul>
<h3>Education</h3><p>B.Tech, Computer Science — National Institute of Technology Durgapur<br><span class="meta">Aug 2023 – Apr 2027</span></p>`},
{id:"proj",ico:"📁",title:"Projects",w:580,h:500,html:`
<h2>Projects</h2>
<h3>Zuvoxia (Independent Venture) — Kivora: AI Cost-Governance Platform</h3>
<p class="meta">Product Lead &amp; Developer · Pre-launch · Aug 2026 – Present</p>
<div class="warn">⚠ Kivora Guard is built and tested in simulation. Not yet verified on live providers, no customers, not publicly available.</div>
<ul><li><b>Problem &amp; strategy:</b> Teams using multiple LLM providers lack visibility into AI spend and protection from runaway costs; defined buyer personas, a 3-stage roadmap (visibility → optimization → autonomy), and positioning against LLM gateways and cost-observability tools.</li>
<li><b>PRD &amp; validation:</b> Authored a 9-section PRD with 5 success metrics (e.g., cost per successful agent task, retry-cost ratio), scope, trade-offs, and risks; set stage gates (5–10 buyer interviews, paying-customer thresholds) so building follows validation.</li>
<li><b>Pricing:</b> A 3-part model: Guard at $999–$2,500/month, Compass (AI model-downgrade recommendations) at 15–20% of verified savings against a baseline, and Autopilot as an enterprise add-on; framed as hypotheses to test with buyers.</li>
<li><b>Guard (core product):</b> ∼36,000-line platform with an OpenAI/Anthropic-compatible streaming proxy, per-team budgets, and idempotent usage metering on schema-per-tenant PostgreSQL (700+ tests); load-tested ∼35,000 requests at up to 200 concurrency on 1 vCPU with 0 errors/0 dropped billing records; indexing cut budget-check latency 65% (∼40 ms to ∼14 ms).</li></ul>
<h3>Literary Circle Website (LC NITD) — Live</h3>
<p class="meta">TypeScript · React · Next.js · GCP · Cloudflare</p>
<ul><li><b>Product strategy &amp; growth:</b> Owned strategy and execution for the club’s flagship blog and registration portal: monthly visits up ∼40% (1,300–1,400 to 1,800–2,000) and 2,500+ registrations across 14 events, including NITMUN and Verve.</li>
<li><b>Gamification feature:</b> Launched a QR-based treasure hunt; defined the roadmap, onboarding, and live admin tracking for 500+ participants across 8 checkpoints in a 2–3 hour live event.</li>
<li><b>Funnel optimization:</b> Analyzed registration drop-offs and iterated on onboarding; added CDN caching, firewall rules, and rate limiting to cut latency and stay available during registration spikes.</li></ul>`},
{id:"skills",ico:"🛠️",title:"Skills",w:520,h:460,html:`
<h2>Skills</h2>
<h3>Product</h3><div id="s1"></div><h3>Product Sense</h3><div id="s2"></div><h3>Growth &amp; GTM</h3><div id="s3"></div><h3>Channels &amp; Outreach</h3><div id="s4"></div><h3>Technical</h3><div id="s5"></div><h3>AI/ML &amp; Infrastructure</h3><div id="s6"></div>`,
 init(b){const S=[["Roadmapping","PRDs","Product Discovery","MVP Scoping & Prioritization","Success Metrics","Funnel Analysis","Pricing Strategy","Competitive Analysis","Agile/Scrum","Stakeholder Management","Data Analysis"],["User Research","Requirements Gathering","Cross-functional Coordination","Self-serve Product Design","A/B Testing","KPIs"],["User Acquisition","Lifecycle Marketing","GTM Strategy","Product-led Growth","Community Growth","Content Strategy"],["Cold Email (Apollo.io)","Reddit/Discord Outreach","Meta Ads Library","Multi-platform Automation"],["Python","Java","C++","JavaScript","TypeScript","SQL","Node.js","Express","React","Next.js","REST API Design","PostgreSQL","Docker","GCP","Git","CI/CD (GitHub Actions)"],["LLM Cost Attribution","Semantic Caching","LLM-as-Judge Evaluation","Model Routing","Multi-tenancy","Load Testing","Rate Limiting","Cloudflare"]];
 S.forEach((a,i)=>{b.querySelector("#s"+(i+1)).innerHTML=a.map(t=>`<span class="tag">${t.replace("&","&amp;")}</span>`).join("")})}},
{id:"ach",ico:"🏆",title:"Leadership",w:540,h:460,html:`
<h2>Leadership, Achievements &amp; Impact</h2>
<ul><li><b>PR &amp; Outreach Head, The Literary Circle:</b> Grew event participation 34% to ∼8,000 and social media views 25% (400K to 500K) in 2025–2026, leading cross-functional outreach across website, video, and design teams; several events drew up to 1,000 participants.</li>
<li><b>2nd Runner-Up, Rannit-E Case Study Competition:</b> Top 0.15% of 2,000 participants (top 3) in a business strategy case.</li>
<li><b>Editor-in-Chief &amp; Website Lead, NITMUN:</b> Led 8 editors and 10+ stakeholders to deliver a 230+ delegate event and its official website; presented technical and MUN workshops to 250–300 participants.</li>
<li><b>Content Strategy &amp; Marketing:</b> Owned campaigns end to end (scripting, design, video editing, copywriting) with media houses and brands, driving 4–5M views and reaching 15–20K customers across brands, iterating on audience and engagement data.</li>
<li><b>Creator &amp; Personal Brand:</b> Grew a travel and lifestyle Instagram account to up to 10M yearly engagement, building skills in audience growth, retention, and content-led distribution.</li></ul>`},
{id:"contact",ico:"✉️",title:"Contact",w:440,h:600,html:`
<h2>Let’s connect</h2>
<p>If your team has been surprised by an AI bill, or you work in product or TPM and have advice for someone starting out, let’s connect.</p>
<ul><li>✉️ <a id="c-e"></a></li><li>📞 <a id="c-p"></a></li><li>🔗 <a id="c-l" target="_blank" rel="noopener">LinkedIn</a></li><li>💻 <a id="c-g" target="_blank" rel="noopener">GitHub</a></li><li>🧩 <a id="c-c" target="_blank" rel="noopener">LeetCode</a></li></ul>
<h3>Send me a message</h3>
<input id="f-n" placeholder="Your name" maxlength="80"><input id="f-e" type="email" placeholder="Your email" maxlength="120"><textarea id="f-m" rows="4" placeholder="Message" maxlength="2000"></textarea>
<button class="tbtn" id="f-s" style="max-width:none">Send</button><p id="f-r"></p>`,
 init(b){const s=(i,h,t)=>{const e=b.querySelector(i);e.href=h;if(t)e.textContent=t};
 s("#c-e",LINKS.email,"singhkunal7934@gmail.com");s("#c-p",LINKS.phone,"+91 8900940832");s("#c-l",LINKS.linkedin);s("#c-g",LINKS.github);s("#c-c",LINKS.leetcode);
 const r=b.querySelector("#f-r");
 b.querySelector("#f-s").onclick=async()=>{
  const body={name:b.querySelector("#f-n").value.trim(),email:b.querySelector("#f-e").value.trim(),message:b.querySelector("#f-m").value.trim()};
  if(!body.name||!body.email||!body.message){r.textContent="Please fill in all fields.";return}
  r.textContent="Sending…";
  try{const res=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(body)});
   const d=await res.json();r.textContent=res.ok?"Sent! Thanks, I’ll get back to you.":(d.error||"Something went wrong.");
   if(res.ok)["#f-n","#f-e","#f-m"].forEach(i=>b.querySelector(i).value="")}
  catch(e){r.textContent="Could not reach the server."}}}}
];

const $=s=>document.querySelector(s),desk=$("#desk"),tasks=$("#tasks"),menu=$("#menu");
let z=10,n=0;const wins={};
const mobile=()=>innerWidth<=700;

function focus(id){Object.values(wins).forEach(w=>{w.el.classList.toggle("act",w.id===id);w.btn.classList.toggle("on",w.id===id)});const w=wins[id];w.el.style.zIndex=++z}
function open(id){
 menu.classList.remove("open");
 if(wins[id]){wins[id].el.classList.remove("min");focus(id);return}
 const a=APPS.find(x=>x.id===id),el=document.createElement("div");
 el.className="win bevel";
 const W=Math.min(a.w,innerWidth-12),H=Math.min(a.h,desk.clientHeight-12);
 el.style.width=W+"px";el.style.height=H+"px";
 el.style.left=Math.max(6,110+n*28)%Math.max(120,innerWidth-W)+"px";
 el.style.top=(20+(n++%6)*28)%Math.max(40,desk.clientHeight-H)+"px";
 el.innerHTML=`<div class="tb"><span>${a.ico} ${a.title}</span><button data-a="min" aria-label="Minimize">_</button><button data-a="max" aria-label="Maximize">□</button><button data-a="x" aria-label="Close">✕</button></div><div class="body sunk">${a.html}</div>`;
 desk.appendChild(el);
 a.init&&a.init(el.querySelector(".body"));
 const btn=document.createElement("button");btn.textContent=a.ico+" "+a.title;tasks.appendChild(btn);
 const w=wins[id]={id,el,btn};
 btn.onclick=()=>{if(el.classList.contains("min")||!el.classList.contains("act")){el.classList.remove("min");focus(id)}else{el.classList.add("min");btn.classList.remove("on")}};
 el.addEventListener("pointerdown",()=>focus(id));
 el.querySelectorAll(".tb button").forEach(b=>b.onclick=e=>{e.stopPropagation();const k=b.dataset.a;
  if(k==="x"){el.remove();btn.remove();delete wins[id]}
  else if(k==="min"){el.classList.add("min");btn.classList.remove("on")}
  else el.classList.toggle("max")});
 const tb=el.querySelector(".tb");
 tb.ondblclick=()=>el.classList.toggle("max");
 tb.addEventListener("pointerdown",e=>{
  if(e.target.tagName==="BUTTON"||mobile()||el.classList.contains("max"))return;
  const sx=e.clientX-el.offsetLeft,sy=e.clientY-el.offsetTop;tb.setPointerCapture(e.pointerId);
  const mv=ev=>{el.style.left=Math.min(Math.max(0,ev.clientX-sx),innerWidth-60)+"px";el.style.top=Math.min(Math.max(0,ev.clientY-sy),desk.clientHeight-30)+"px"};
  const up=()=>{tb.removeEventListener("pointermove",mv);tb.removeEventListener("pointerup",up)};
  tb.addEventListener("pointermove",mv);tb.addEventListener("pointerup",up)});
 focus(id);
}

const icons=$("#icons");
APPS.forEach(a=>{
 const d=document.createElement("div");d.className="ico";d.tabIndex=0;d.innerHTML=`<b>${a.ico}</b>${a.title}`;
 d.ondblclick=()=>open(a.id);
 d.onclick=()=>{icons.querySelectorAll(".ico").forEach(i=>i.classList.remove("sel"));d.classList.add("sel");if(matchMedia("(pointer:coarse)").matches||mobile())open(a.id)};
 d.onkeydown=e=>{if(e.key==="Enter")open(a.id)};
 icons.appendChild(d);
 const m=document.createElement("div");m.textContent=a.ico+"  "+a.title;m.onclick=()=>open(a.id);menu.appendChild(m);
});
$("#start").onclick=e=>{e.stopPropagation();menu.classList.toggle("open")};
document.addEventListener("pointerdown",e=>{if(!menu.contains(e.target)&&e.target.id!=="start")menu.classList.remove("open")});

function tick(){const d=new Date();$("#time").textContent=d.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}
tick();setInterval(tick,20000);

$("#theme").onclick=()=>{const r=document.documentElement,dark=getComputedStyle(r).colorScheme.includes("dark");r.dataset.theme=dark?"light":"dark"};

open("about");
