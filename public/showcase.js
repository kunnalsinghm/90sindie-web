// ---- Edit these links ----
const LINKS={linkedin:"https://www.linkedin.com/in/kunal-sm-41a055285/",github:"https://github.com/kunnalsinghm",leetcode:"https://leetcode.com/u/kunalsinghm/",email:"mailto:singhkunal7934@gmail.com",resume:"/resume.pdf",resumeDrive:"https://drive.google.com/file/d/1Sukhq-yCGL8VNhISAT634i36eVOSoOLv/view?usp=drive_link"};
const $=s=>document.querySelector(s);
const li=a=>"<ul>"+a.map(x=>"<li>"+x+"</li>").join("")+"</ul>";
const RES=`<div class="resume"><em>📄</em><div><b>Looking for my resume?</b><br><a href="${LINKS.resume}" target="_blank" rel="noopener">Click here to download it!</a></div></div>`;
const ROLE=(t,sub,r1,r2)=>`<div class="head"><div><h1>${t}</h1><h2>${sub}</h2></div><div class="r">${r1}<br>${r2}</div></div>`;

const P={
home:null,
about:`<h1>About</h1><h2>Me</h2>
<p><b>Developer. Filmmaker. Athlete. Creator. I don’t fit into one box and I don’t plan to.</b></p>
<p>I’m a student at NIT Durgapur, driven by an obsession with building things that matter, whether that’s a product, a film, or a personal best.</p>
<p>Right now, that’s Kivora at Zuvoxiae: software that helps teams see where their AI spend goes, who or what caused it, and stay within budget. AI bills arrive as one number, and I’m working on making them explainable. I’m doing the part I want to do for a career: talking to engineers and founders who run AI in production, working out what’s worth building, and deciding what comes first. Where we are, honestly: our first product, Kivora Guard, is built and tested in simulation. It isn’t verified on live providers, has no customers yet, and isn’t publicly available.</p>
<p>This summer, I interned at Zoho Corporation as a Software Development Intern, and it changed the way I see technology. It wasn’t just about writing code. It was about understanding real problems, real users, and how great products are born. That pulled me toward Technical Product Management.</p>
<p>I sit at the intersection of technology, creativity, and people, and TPM is where all three come together. I’m actively learning and looking for opportunities to break in.</p>
<p>As a filmmaker and social media creator, I’ve partnered with 15+ brands on promotions, campaigns, scripting, and ads, driving 8 to 10 million yearly engagements. I don’t just create content, I craft stories that move people and drive results.</p>
<p>As an athlete, I’ve competed on some of the biggest stages in the country, where I learned that pressure is just opportunity in disguise.</p>
<p>Whether it’s shipping code, running brand campaigns, organizing events, or competing at the national level, I thrive where people, performance, and purpose meet.</p>
<p>If your team has been surprised by an AI bill, or you work in product or TPM and have advice for someone starting out, let’s connect.</p>`,
experience:RES+`<section>${ROLE("Zoho","Software Development Engineer Intern",'<a href="https://www.zoho.com" target="_blank" rel="noopener">www.zoho.com</a>',"May 2026 – Jun 2026")}
<p>Zoho Cloud Spend team.</p>${li([
"<b>Feature delivery:</b> Owned the lifecycle and feature delivery of a full-stack collaboration widget for Zoho Cloud Spend, turning raw product requirements into a seamless user workflow with 5 REST APIs and 15+ rich-text formatting options to capture critical cloud cost insights.",
"<b>Workflow design:</b> Designed and shipped a reusable, dynamic rule-builder with local persistence and validation, enabling non-technical enterprise users to build scalable workflows and reducing system configuration time by an estimated 40%.",
"<b>Quality:</b> Spearheaded QA workflows, authoring unit and integration tests across core components to reach 95%+ test coverage, mitigating post-launch regression risk and boosting deployment velocity."])}</section>
<section>${ROLE("MyCPTrainer","Product Engineer Intern","20K+ active users — 60K+ monthly visits — 100+ countries","May 2025 – Jul 2025")}${li([
"<b>Performance &amp; reliability:</b> Cut load time by 40% with lazy loading and asset optimization; added Cloudflare CDN and edge caching to keep the platform reliable on unstable networks.",
"<b>Infrastructure scale &amp; automation:</b> Cut reminder cron job runtime by 70% (50 to 15 minutes) by redesigning queries and moving to an asynchronous architecture; automated daily content with Cloudflare Cron Triggers for 800+ active users.",
"<b>System architecture:</b> Co-developed SheetScope, a user-journey scraping engine on real-time Codeforces API integrations; led validation across 1,000+ edge-case test profiles to eliminate indexing errors."])}</section>
<section><h1 class="s2">Education</h1><h2>National Institute of Technology Durgapur</h2><p>Bachelor of Technology in Computer Science · Aug 2023 – Apr 2027</p></section>`,
projects:`<h1>Projects</h1><h2>&amp; Impact</h2><p>Click on one of the areas below to check out some of my favorite things I’ve built, led and created.</p>
<div class="card" data-go="software"><em>🖥️</em><div><h1>Software</h1><b>PROJECTS</b></div></div>
<div class="card" data-go="leadership"><em>🏆</em><div><h1>Leadership</h1><b>ACHIEVEMENTS</b></div></div>
<div class="card" data-go="creator"><em>🎬</em><div><h1>Creator</h1><b>ENDEAVORS</b></div></div>`,
software:`<h1>Software</h1><h2>Projects</h2>
<section><h1 class="s2">Kivora</h1><h2 class="s2">Zuvoxia (Independent Venture) · AI Cost-Governance Platform · Aug 2026 – Present</h2>
<p>Product Lead &amp; Developer, pre-launch.</p><div class="warn">⚠ Kivora Guard is built and tested in simulation. It isn’t verified on live providers, has no customers yet, and isn’t publicly available.</div>${li([
"<b>Problem &amp; strategy:</b> Teams using multiple LLM providers lack visibility into AI spend and protection from runaway costs; defined buyer personas, a 3-stage roadmap (visibility → optimization → autonomy), and positioning against LLM gateways and cost-observability tools.",
"<b>PRD &amp; validation:</b> Authored a 9-section PRD with 5 success metrics (e.g., cost per successful agent task, retry-cost ratio), scope, trade-offs, and risks; set stage gates (5–10 buyer interviews, paying-customer thresholds) so building follows validation.",
"<b>Pricing:</b> Designed a 3-part model: Guard at $999–$2,500/month, Compass (AI model-downgrade recommendations) at 15–20% of verified savings against a baseline, and Autopilot as an enterprise add-on; framed as hypotheses to test with buyers.",
"<b>Guard (core product):</b> Built a ∼36,000-line platform with an OpenAI/Anthropic-compatible streaming proxy, per-team budgets, and idempotent usage metering on schema-per-tenant PostgreSQL (700+ tests); load-tested ∼35,000 requests at up to 200 concurrency on 1 vCPU with 0 errors/0 dropped billing records; indexing cut budget-check latency 65% (∼40 ms to ∼14 ms)."])}</section>
<section><h1 class="s2">Literary Circle Website</h1><h2 class="s2">LC NITD · Live · TypeScript, React, Next.js, GCP, Cloudflare</h2>${li([
"<b>Product strategy &amp; growth:</b> Owned strategy and execution for the club’s flagship blog and registration portal: monthly visits up ∼40% (1,300–1,400 to 1,800–2,000) and 2,500+ registrations across 14 events, including NITMUN and Verve.",
"<b>Gamification feature:</b> Launched a QR-based treasure hunt; defined the roadmap, onboarding, and live admin tracking for 500+ participants across 8 checkpoints in a 2–3 hour live event.",
"<b>Funnel optimization:</b> Analyzed registration drop-offs and iterated on onboarding; added CDN caching, firewall rules, and rate limiting to cut latency and stay available during registration spikes."])}</section>
<h1 class="s2">Skills</h1><p style="margin-top:10px">${["Python","Java","C++","JavaScript","TypeScript","SQL","Node.js","Express","React","Next.js","REST API Design","PostgreSQL","Docker","GCP","Git","CI/CD","LLM Cost Attribution","Semantic Caching","Model Routing","Multi-tenancy","Load Testing","Rate Limiting","Cloudflare","Roadmapping","PRDs","Product Discovery","Funnel Analysis","A/B Testing","GTM Strategy"].map(t=>`<span class="tag">${t}</span>`).join("")}</p>`,
leadership:`<h1>Leadership</h1><h2>Achievements &amp; Impact</h2>${li([
"<b>PR &amp; Outreach Head, The Literary Circle:</b> Grew event participation 34% to ∼8,000 and social media views 25% (400K to 500K) in 2025–2026, leading cross-functional outreach across website, video, and design teams; several events drew up to 1,000 participants.",
"<b>2nd Runner-Up, Rannit-E Case Study Competition:</b> Top 0.15% of 2,000 participants (top 3) in a business strategy case.",
"<b>Editor-in-Chief &amp; Website Lead, NITMUN:</b> Led 8 editors and 10+ stakeholders to deliver a 230+ delegate event and its official website; presented technical and MUN workshops to 250–300 participants."])}`,
creator:`<h1>Creator</h1><h2>Endeavors</h2>${li([
"<b>Content Strategy &amp; Marketing:</b> Owned campaigns end to end (scripting, design, video editing, copywriting) with media houses and brands, driving 4–5M views and reaching 15–20K customers across brands, iterating on audience and engagement data.",
"<b>Creator &amp; Personal Brand:</b> Grew a travel and lifestyle Instagram account to up to 10M yearly engagement, building skills in audience growth, retention, and content-led distribution."])}
<p>As a filmmaker and social media creator, I’ve partnered with 15+ brands on promotions, campaigns, scripting, and ads, driving 8 to 10 million yearly engagements. As an athlete, I’ve competed on some of the biggest stages in the country, where I learned that pressure is just opportunity in disguise.</p>`,
contact:`<div class="soc"><a href="${LINKS.github}" target="_blank" rel="noopener" title="GitHub">GH</a><a href="${LINKS.linkedin}" target="_blank" rel="noopener" title="LinkedIn">in</a><a href="${LINKS.leetcode}" target="_blank" rel="noopener" title="LeetCode">LC</a></div>
<h1>Contact</h1><p style="margin-top:22px">If your team has been surprised by an AI bill, or you work in product or TPM and have advice for someone starting out, let’s connect. You can reach me by email, or fill out the form below!</p>
<p><b>Email:</b> <a href="${LINKS.email}">singhkunal7934@gmail.com</a></p>
<label><i>*</i> Your name:</label><input id="f-n" placeholder="Name" maxlength="80">
<label><i>*</i> Email:</label><input id="f-e" type="email" placeholder="Email" maxlength="120">
<label>Company (optional):</label><input id="f-c" placeholder="Company" maxlength="80">
<label><i>*</i> Message:</label><textarea id="f-m" rows="6" placeholder="Message" maxlength="1800"></textarea>
<div><button class="send" id="send">Send Message</button><div class="note">Messages are saved on my server and I read every one<br><span style="color:#c00">*</span> = required</div></div><div id="res"></div>
<div style="clear:both;margin-top:30px">${RES}</div>`};

const NAV=[["home","Home"],["about","About"],["experience","Experience"],["projects","Projects",["software","leadership","creator"]],["contact","Contact"]];
const FAM=p=>{const n=NAV.find(x=>x[2]&&x[2].includes(p));return n?n[0]:p};
let page="home",showcase;

function render(p){
 page=P[p]!==undefined?p:"home";history.replaceState(null,"","#"+page);
 const v=showcase.view;
 if(page==="home"){v.innerHTML=`<div class="home"><h1>Kunal Singh Munda</h1><h2>Developer. Filmmaker. Athlete. Creator.</h2><div class="links">${["about","experience","projects","contact"].map(x=>`<a href="#" data-go="${x}">${x}</a>`).join("")}</div></div>`}
 else{
  const nav=NAV.map(([id,t,subs])=>`<a href="#" data-go="${id}" class="${FAM(page)===id&&!subs?"act":FAM(page)===id?"act":""}">${t}</a>`+(subs&&FAM(page)===id?`<div class="subs">${subs.map(s=>`<a href="#" class="sub ${s===page?"act":""}" data-go="${s}">${s}</a>`).join("")}</div>`:"")).join("");
  v.innerHTML=`<div class="page"><aside><div class="nm">Kunal Singh Munda</div><div class="sc">Showcase ’26</div><nav>${nav}</nav></aside><main>${P[page]}</main></div>`;
 }
 v.scrollTop=0;
 v.querySelectorAll("[data-go]").forEach(e=>e.onclick=ev=>{ev.preventDefault();render(e.dataset.go)});
 const s=v.querySelector("#send");
 if(s)s.onclick=async()=>{
  const g=i=>v.querySelector(i).value.trim(),r=v.querySelector("#res");
  const name=g("#f-n"),email=g("#f-e"),co=g("#f-c"),msg=g("#f-m");
  if(!name||!email||!msg){r.textContent="Please fill in the required fields.";return}
  r.textContent="Sending…";
  try{const res=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name,email,message:(co?"[Company: "+co+"]\n":"")+msg})});
   const d=await res.json();r.textContent=res.ok?"Sent! Thanks, I’ll get back to you.":(d.error||"Something went wrong.");
   if(res.ok)["#f-n","#f-e","#f-c","#f-m"].forEach(i=>v.querySelector(i).value="")}
  catch(e){r.textContent="Could not reach the server."}};
}

let z=10;const wins={};
function mk(id,title,body,o={}){
 const el=document.createElement("div");el.className="win"+(o.cls?" "+o.cls:"");
 Object.assign(el.style,o.style||{});
 el.innerHTML=`<div class="tbar"><span>${o.icon||"🖥️"} ${title}</span><button data-a="min" aria-label="Minimize">_</button><button data-a="max" aria-label="Maximize">□</button><button data-a="x" aria-label="Close">✕</button></div><div class="view">${body||""}</div>${o.status?`<div class="stat"><div>${o.status}</div><div></div><div></div></div>`:""}`;
 $("#desk").appendChild(el);
 const btn=document.createElement("button");btn.className="b";btn.textContent=title;$("#tasks").appendChild(btn);
 const w=wins[id]={el,btn,view:el.querySelector(".view")};
 const act=()=>{Object.values(wins).forEach(x=>{x.el.classList.toggle("act",x===w);x.btn.classList.toggle("on",x===w&&!x.el.classList.contains("hide"))});el.style.zIndex=++z};
 w.focus=()=>{el.classList.remove("hide");act()};
 el.addEventListener("pointerdown",act);
 btn.onclick=()=>{if(el.classList.contains("hide")||!el.classList.contains("act"))w.focus();else{el.classList.add("hide");btn.classList.remove("on")}};
 el.querySelectorAll(".tbar button").forEach(b=>b.onclick=e=>{e.stopPropagation();const k=b.dataset.a;
  if(k==="x"){el.classList.add("hide");btn.style.display="none";btn.classList.remove("on")}
  else if(k==="min"){el.classList.add("hide");btn.classList.remove("on")}
  else el.classList.toggle("max")});
 const tb=el.querySelector(".tbar");tb.ondblclick=()=>el.classList.toggle("max");
 tb.addEventListener("pointerdown",e=>{
  if(e.target.tagName==="BUTTON"||el.classList.contains("max")||innerWidth<=800)return;
  el.style.width=el.offsetWidth+"px";el.style.height=el.offsetHeight+"px";const sx=e.clientX-el.offsetLeft,sy=e.clientY-el.offsetTop;tb.setPointerCapture(e.pointerId);
  const mv=ev=>{el.style.left=Math.max(0,ev.clientX-sx)+"px";el.style.top=Math.max(0,ev.clientY-sy)+"px";el.style.right="auto";el.style.bottom="auto"};
  const up=ev=>{tb.removeEventListener("pointermove",mv);tb.removeEventListener("pointerup",up);window.snapWin&&snapWin(el,ev)};
  tb.addEventListener("pointermove",mv);tb.addEventListener("pointerup",up)});
 act();return w;
}
function openWin(id,page){const w=wins[id];w.btn.style.display="";w.focus();if(page)render(page)}

showcase=mk("show","Kunal Singh Munda - Showcase 2026","",{status:"© Copyright 2026 Kunal Singh Munda",cls:"main",icon:"🗂️"});
mk("cred","Credits","",{icon:"ℹ️",style:{left:"22%",top:"20%",width:"min(460px,92vw)",height:"240px"}}).view.innerHTML=`<div class="credits"><b>Credits</b><br><br>Built by Kunal Singh Munda with HTML, CSS, JavaScript and Express.</div>`;
wins.cred.el.classList.add("hide");wins.cred.btn.style.display="none";
render(location.hash.slice(1)||"home");

const ITEMS=[["🗂️","My Showcase",()=>openWin("show")],["📊","Kivora",()=>openWin("show","software")],["📄","Resume",()=>window.apps&&apps.resume?apps.resume():window.open(LINKS.resume,"_blank")],["ℹ️","Credits",()=>openWin("cred")]];
ITEMS.forEach(([g,t,f])=>{
 const d=document.createElement("div");d.className="ico";d.innerHTML=`<i>${g}</i><span>${t}</span>`;
 d.onclick=()=>{document.querySelectorAll(".ico").forEach(x=>x.classList.remove("sel"));d.classList.add("sel");if(matchMedia("(pointer:coarse)").matches||innerWidth<=800)f()};
 d.ondblclick=f;$("#icons").appendChild(d);
});
$("#menu").innerHTML='<div class="mh"><i>🧑‍💻</i><b>Kunal Singh Munda</b></div><div class="mb"><div class="ml"></div><div class="mr"></div></div><div class="mf">Showcase ’26</div>';
const addMenu=(col,g,t,f)=>{const m=document.createElement("div");m.className="mi";m.innerHTML=`<i>${g}</i><span>${t}</span>`;m.onclick=()=>{$("#menu").classList.remove("open");f()};$("#menu .m"+col).appendChild(m)};
ITEMS.forEach(([g,t,f])=>addMenu("l",g,t,f));
[["👤","About Me","about"],["💼","Experience","experience"],["📁","Projects","projects"],["✉️","Contact","contact"]].forEach(([g,t,pg])=>addMenu("r",g,t,()=>openWin("show",pg)));
$("#start").onclick=e=>{e.stopPropagation();$("#menu").classList.toggle("open")};
document.addEventListener("pointerdown",e=>{if(!$("#menu").contains(e.target)&&!$("#start").contains(e.target))$("#menu").classList.remove("open")});
const tick=()=>$("#time").textContent=new Date().toLocaleTimeString([],{hour:"numeric",minute:"2-digit"});tick();setInterval(tick,20000);
