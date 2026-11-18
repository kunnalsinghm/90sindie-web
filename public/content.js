/* Portfolio content: pages, navigation, films, writing, terminal. Edit text here. */
(()=>{
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const li=a=>"<ul>"+a.map(x=>"<li>"+x+"</li>").join("")+"</ul>";
const tg=a=>"<p>"+a.map(t=>`<span class="tag">${esc(t)}</span>`).join("")+"</p>";
const ext=(u,t)=>`<a href="${esc(u)}" target="_blank" rel="noopener">${t}</a>`;
Object.assign(LINKS,{instagram:SOCIAL.instagram,youtube:SOCIAL.youtube});
const RESB=`<div class="resume"><em>📄</em><div><b>Looking for my resume?</b><br><a href="${esc(LINKS.resume)}" target="_blank" rel="noopener">Click here to download it!</a></div></div>`;
const role=(t,s,a,b)=>`<div class="head"><div><h1>${t}</h1><h2>${s}</h2></div><div class="r">${a}<br>${b}</div></div>`;
const proj=(name,badge,cls,sub,body)=>`<section class="proj"><div class="ph2"><h3>${name}</h3><span class="bdg ${cls}">${badge}</span></div><div class="sub">${sub}</div>${body}</section>`;
const card=(go,e,t,s)=>`<div class="card" data-go="${go}"><em>${e}</em><div><h1>${t}</h1><b>${s}</b></div></div>`;

/* ---------- navigation ---------- */
NAV.length=0;
NAV.push(["home","Home"],["about","About"],["experience","Experience"],["projects","Projects",["software","films","creator","leadership","athlete","writing"]],["skills","Skills"],["now","Now"],["contact","Contact"]);

/* ---------- About ---------- */
P.about=`<h1>About</h1><h2>Me</h2>
<p class="lead"><b>Developer. Filmmaker. Athlete. Creator. I don’t fit into one box and I don’t plan to.</b></p>
<p>I’m a student at NIT Durgapur, driven by an obsession with building things that matter, whether that’s a product, a film, or a personal best.</p>
<div class="facets">
<div data-go="software"><b>🖥️ Builder</b><span>Full-stack developer and product thinker. Building Kivora at Zuvoxia, shipped OpenCounsel (live), and interned at Zoho and MyCPTrainer.</span></div>
<div data-go="films"><b>🎬 Filmmaker and creator</b><span>I make cinematic travel films and run brand campaigns end to end. 15+ brand partnerships and 8 to 10 million yearly engagements since I started in 2020.</span></div>
<div data-go="athlete"><b>🏃 Athlete</b><span>Best Athlete at NIT Durgapur two years running (2024-25, 2025-26). Track events, Inter-NITs, medals at school, district and state level.</span></div>
<div data-go="leadership"><b>🏆 Leader and writer</b><span>PR and Outreach Head of The Literary Circle, Editor-in-Chief of NITMUN, and I write essays and short stories.</span></div></div>
<p>Right now, the thing I’m building is Kivora at Zuvoxia: software that helps teams see where their AI spend goes, who or what caused it, and stay within budget. AI bills arrive as one number, and I’m working on making them explainable. Where we are, honestly: our first product, Kivora Guard, is built and tested in simulation. It isn’t verified on live providers, has no customers yet, and isn’t publicly available.</p>
<p>This summer, I interned at Zoho Corporation as a Software Development Engineer Intern, and it changed the way I see technology. It wasn’t just about writing code. It was about understanding real problems, real users, and how great products are born. That pulled me toward Technical Product Management.</p>
<p>I sit at the intersection of technology, creativity, and people. TPM is where all three come together, but it isn’t the only place I want to show what I can do. The films, the track, the events and the writing are all part of the same person. I’m preparing for Product Manager and Technical Product Manager roles, and I’m open to brand collaborations and film projects.</p>
<p>Whether it’s shipping code, running brand campaigns, organizing events, or competing at the national level, I thrive where people, performance, and purpose meet.</p>
<p>If your team has been surprised by an AI bill, or you work in product or TPM and have advice for someone starting out, let’s connect.</p>`;

/* ---------- Experience ---------- */
P.experience=RESB+`<section>${role("Zoho","Software Development Engineer Intern",ext("https://www.zoho.com","www.zoho.com"),"May 2026 – Jun 2026")}
<p>Zoho Cloud Spend.</p>${li([
"Owned a full-stack collaboration widget end to end, turning raw requirements into a user workflow with 5 REST APIs and 15+ rich-text options for capturing cloud cost insights.",
"Designed and shipped a reusable rule-builder with validation and local persistence, letting non-technical enterprise users build workflows and cutting configuration time by an estimated 40%.",
"Authored unit and integration tests across core components to reach 95%+ coverage, reducing post-launch regression risk and speeding deployments."])}</section>
<section>${role("MyCPTrainer","Product Engineer Intern","Competitive programming platform · 20K+ active users","May 2025 – Jul 2025")}${li([
"Cut load time 40% via lazy loading and Cloudflare CDN caching.",
"Cut reminder cron runtime 70% (50 to 15 min) with an asynchronous redesign serving 800+ active users.",
"Co-developed SheetScope, a user-journey scraping engine on real-time Codeforces APIs; validated across 1,000+ edge-case profiles."])}</section>
<section>${role("The Literary Circle","PR and Outreach Head",ext(LINKS.lcnitd||"https://www.lcnitd.co.in/","www.lcnitd.co.in"),"NIT Durgapur")}<p>Grew event participation 34% to about 8,000 and social media views 25% (400K to 500K) in 2025 to 2026, leading cross-functional website, video and design teams. <a href="#" data-go="leadership">Read the full story</a>.</p></section>
<section>${role("NITMUN","Editor-in-Chief and Website Lead","NIT Durgapur Model United Nations","")}<p>Led 8 editors and 10+ stakeholders to launch a 230+ delegate event and its website.</p></section>
<section>${role("Content Strategy and Marketing","Creator","Media houses and brands","Since 2020")}<p>Owned campaigns end to end with media houses and brands, driving 4 to 5M views and reaching 15 to 20K customers, iterating on audience and engagement data. <a href="#" data-go="creator">See the creator work</a>.</p></section>
<section><h1 class="s2">Education</h1><h2>National Institute of Technology Durgapur</h2><p>B.Tech, Computer Science · Aug 2023 – Apr 2027</p></section>`;

/* ---------- Projects landing ---------- */
P.projects=`<h1>Projects</h1><h2>&amp; Impact</h2><p>Click on one of the areas below to see what I’ve built, filmed, led, won and written.</p>
${card("software","🖥️","Software","PRODUCTS AND CODE")}${card("films","🎬","Films","CINEMATIC TRAVEL FILMS")}${card("creator","📣","Creator","CAMPAIGNS AND CONTENT")}${card("leadership","🏆","Leadership","CLUBS AND EVENTS")}${card("athlete","🏃","Athlete","TRACK AND FIELD")}${card("writing","✍️","Writing","ESSAYS AND STORIES")}`;

/* ---------- Software ---------- */
P.software=`<h1>Software</h1><h2>Products and projects</h2>
<p>I like building things end to end: finding the problem, scoping the MVP, shipping it, and being honest about what is and isn’t proven.</p>
${proj("Kivora by Zuvoxia","Pre-launch","bd-warn","AI cost-governance platform · Independent venture · Product Lead and Developer",
`<p>Software that shows teams where their AI spend goes, who or what caused it, and keeps them within budget. Three products: Guard (see and control spend), Compass (savings) and Autopilot (approved automation).</p>
<div class="warn">⚠ Guard is built and tested in simulation. No customers yet, and not publicly available. Not yet verified on live providers.</div>${li([
"<b>Kivora Guard</b> (built, tested in simulation): a self-hosted gateway you point your OpenAI or Anthropic client at. Every call is priced, attributed to a team, checked against budgets and policies, and recorded, with streaming supported. About 36,000 lines, 700+ tests, schema-per-tenant PostgreSQL.",
"<b>Guard load test:</b> about 35,000 requests at up to 200 concurrency on 1 vCPU with 0 errors. Indexing cut budget-check latency 65% (about 40 ms to 14 ms).",
"<b>Kivora Compass</b> (working prototype): sits in front of Guard and adds a persisted exact and semantic cache, an explainable router with a cost-quality dial, and a savings ledger. Model downgrades are evidence-gated: a cheaper model is shadow-tested on copied traffic, scored by deterministic checks, LLM-as-judge and similarity, rolled out in stages, and rolled back automatically if quality drops.",
"<b>Kivora Autopilot</b> (early prototype, simulated data): a policy agent that observes, classifies, assesses risk, recommends, checks policy, asks for approval, executes, verifies, and writes an immutable audit record. Risky actions need human approval and reversible ones can be rolled back.",
"<b>Kivora website:</b> marketing site and waitlist API (Express, Vercel serverless functions, Postgres on Neon, strict content security policy, rate limiting, admin sign-in with scrypt-hashed passwords).",
"<b>FinOps Copilot</b> (in progress): a RAG-powered agent that answers “why did our AI bill spike?” with a multi-step tool-calling loop.",
"<b>Product work:</b> a 9-section PRD with 5 success metrics, a 3-stage roadmap (visibility, optimization, autonomy), and pricing hypotheses ($999 to $2,500/month for Guard plus a share of verified savings) to test with buyers. Stage gate: 5 to 10 buyer interviews planned for Dec 2026 before more building.",
"<b>Honest limits:</b> not yet verified on live providers. PII redaction and prompt-injection detection are pattern-based, not ML classifiers."])}
${tg(["Node.js","Express","PostgreSQL","SQLite","Docker","Vercel","LLM-as-judge","RAG"])}<p><a href="#" data-app="case">Open the full Kivora case study</a></p>`)}
${proj("OpenCounsel","Live","bd-ok","Free JoSAA and CSAB choice-list simulator · Independent educational tool, not affiliated with JoSAA, CSAB, MCC or NTA",
`<p>Students enter their rank, category and preferences and get Dream, Target and Safe lists built from historical cutoffs. It never guesses a cutoff.</p>${li([
"Deterministic recommendation engine: the same input always gives the same list. Dream, Target and Safe come from how your rank compares with past closing ranks (under 2%, 2 to 15%, 15% or more).",
"Choice-list checker that flags duplicates, a list that is too short, too few Safe choices, badly ordered choices and invalid Home State quota claims.",
"Multi-round simulator with Freeze, Float and Slide explained from stored counselling rules, plus a compare page for up to four colleges.",
"Grounded AI counsellor: an intent router, then SQL and rules retrieval, then the LLM, so cutoffs come from the database and not from the model. Runs in mock mode without an API key and has a daily question limit.",
"Drag-and-drop ordering, CSV and PDF export, saved lists with login, and an admin area for cutoff CSV uploads and rules.",
"The exam-system design allows extension to NEET and state counselling later."])}
${tg(["Next.js 14","TypeScript","Drizzle","PostgreSQL","Supabase Auth","Tailwind","Vercel","Gemini"])}<p>${ext("https://github.com/kunnalsinghm/open-counsel","GitHub repo ↗")}</p>`)}
${proj("UPI Dispute Resolution Automation Platform","Portfolio project","bd-info","Backend and ML · Uses synthetic data and a mock NPCI API",
`<p>UPI disputes are usually resolved by hand through NPCI’s portal. This platform auto-categorizes disputes, scores them with an ML classifier and resolves the clear cases through a rule engine.</p>${li([
"Pipeline: a Flask ML classifier scores each dispute, a Spring Boot rule engine decides, Kafka topics (disputes.created, disputes.resolved) carry it asynchronously, and PostgreSQL stores the result.",
"ML classifier: RandomForest trained on 10,000 synthetic dispute records, 88.1% overall accuracy.",
"Rules auto-resolve wrong debits up to Rs 50,000, duplicates and timeouts over 48 hours, and send everything else to manual review. About 74% of synthetic cases were auto-resolved.",
"NPCI mock API simulates ARN generation, status checks and Level 2 escalation.",
"React dashboard shows the live queue, SLA tracking and charts, refreshing every 5 seconds."])}
${tg(["Java 21","Spring Boot","Kafka","PostgreSQL","Redis","Python","scikit-learn","React","Docker"])}`)}
${proj("Literary Circle website (LC NITD)","Live","bd-ok","Product and growth · The flagship blog and event registration portal of the Literary Circle, NIT Durgapur",
`${li([
"Owned strategy and execution: monthly visits up about 40% (1,300 to 1,400 to 1,800 to 2,000) and 2,500+ registrations across 14 events, including NITMUN and Verve.",
"Launched a QR-based treasure hunt with a roadmap, onboarding and live admin tracking for 500+ participants across 8 checkpoints in a 2 to 3 hour live event.",
"Analyzed registration drop-offs and iterated on onboarding. Added CDN caching, firewall rules and rate limiting to stay available during registration spikes."])}
${tg(["TypeScript","React","Next.js","GCP","Cloudflare"])}<p>${ext("https://www.lcnitd.co.in/","lcnitd.co.in ↗")}</p>`)}`;

/* ---------- Films ---------- */
const film=f=>`<figure class="fg"><div class="film" data-yt="${esc(f.id)}" data-t="${esc(f.t)}" role="button" tabindex="0" aria-label="Play ${esc(f.t)}"><img loading="lazy" src="https://img.youtube.com/vi/${esc(f.id)}/hqdefault.jpg" alt="${esc(f.t)} film thumbnail"><span class="play">▶</span></div><figcaption><b>${esc(f.t)}</b><br><small>Cinematic travel film</small></figcaption></figure>`;
P.films=`<h1>Films</h1><h2>Cinematic travel films</h2>
<p>Travel is where I learn to see. These are the places I’ve told stories about so far. Press play and watch right here.</p>
<div class="films">${FILMS.map(film).join("")}</div>
<p style="margin-top:14px"><a href="#" data-app="wmp">▶ Open all of them in Windows Media Player</a></p>
<h1 class="s2" style="margin-top:26px">Also on screen</h1>
<div class="proj"><b>Pyaar = Dosti</b> <span class="bdg bd-info">Upcoming</span><br>An upcoming romantic comedy series I worked on. ${ext(PYAAR_URL,"See the announcement on YouTube ↗")}</div>
<p>More on ${ext(LINKS.youtube,"YouTube ↗")} and ${ext(LINKS.instagram,"Instagram ↗")}.</p>`;

/* ---------- Creator ---------- */
P.creator=`<h1>Creator</h1><h2>Stories that move people and drive results</h2>
<p>I started my digital journey back in 2020, in the middle of COVID, and I haven’t stopped since. I’ve worked on many videos, and I’ve partnered with 15+ brands on promotions, campaigns, scripting and ads, driving 8 to 10 million yearly engagements.</p>
<p>I own campaigns end to end: scripting, design, video editing and copywriting, then I iterate on audience and engagement data. I don’t just create content, I craft stories that move people and drive results.</p>
<div class="stats"><div><b>15+</b>brand partnerships</div><div><b>8–10M</b>yearly engagements</div><div><b>4–5M</b>campaign views</div><div><b>15–20K</b>customers reached</div></div>
${li([
"<b>Content strategy and marketing:</b> owned campaigns end to end with media houses and brands, driving 4 to 5M views and reaching 15 to 20K customers, iterating on audience and engagement data.",
"<b>Personal brand:</b> grew a travel and lifestyle Instagram account to up to 10M yearly engagement, building skills in audience growth, retention and content-led distribution.",
"<b>Cinematic travel films:</b> Havelock Island, Sikkim, Darjeeling and Parasnath. <a href='#' data-go='films'>Watch them</a>.",
"<b>On screen:</b> worked on Pyaar = Dosti, an upcoming romantic comedy series."])}
<p>${ext(LINKS.youtube,"YouTube ↗")} · ${ext(LINKS.instagram,"Instagram ↗")}</p>`;

/* ---------- Leadership ---------- */
P.leadership=`<h1>Leadership</h1><h2>Clubs, events and teams</h2>
<section><h1 class="s2">The Literary Circle</h1><h2 class="s2">PR and Outreach Head · NIT Durgapur</h2>
<p>The Literary Circle is NIT Durgapur’s oldest student body, founded in 1994, back before the idea of clubs had even reached campus. It is still the premier space for creative expression beyond technical academia.</p>
<p>It hosts Verve, Eastern India’s largest literary-cum-youth festival (now in its 20th edition), plus NITMUN, TEDxNITDurgapur, the blogs The Darkest White and Humans of NIT Durgapur, the annual yearbook and the campus magazine Deja Vu, along with open mics, workshops and competitions all year round.</p>
${li(["Grew event participation <b>34% to about 8,000</b> and social media views <b>25% (400K to 500K)</b> in 2025 to 2026.","Led cross-functional website, video and design teams.","Several events drew up to 1,000 participants."])}
<p>${ext("https://www.lcnitd.co.in/","lcnitd.co.in ↗")} · <a href="#" data-go="software">see the website I built</a></p></section>
<section><h1 class="s2">NITMUN</h1><h2 class="s2">Editor-in-Chief and Website Lead</h2>
<p>Initiated in 2011, NITMUN is the NIT Durgapur Model United Nations, hosted by The Literary Circle. Delegates roleplay as diplomats in committees such as UNGA, UNHRC and AIPPM, with an International Press team covering the debates, and its core stays the same: diplomacy, debate and international dialogue.</p>
${li(["Led <b>8 editors and 10+ stakeholders</b> to launch a <b>230+ delegate</b> event and its official website.","Presented technical and MUN workshops to 250 to 300 participants."])}</section>
<section><h1 class="s2">Recognition</h1>${li(["<b>2nd Runner-Up, Rannit-E Case Study Competition:</b> top 0.15% of 2,000 participants (top 3) in a business strategy case."])}</section>`;

/* ---------- Athlete ---------- */
const gal=()=>ATHLETE_PHOTOS.length?`<div class="gal">${ATHLETE_PHOTOS.map(p=>`<figure><img loading="lazy" src="${esc(p.src)}" alt="${esc(p.caption||"Athletics photo")}"><figcaption>${esc(p.caption||"")}</figcaption></figure>`).join("")}</div>`:`<div class="ph">📸 Photos from the track are coming soon.</div>`;
P.athlete=`<h1>Athlete</h1><h2>Track events</h2>
<p>I’ve competed on some of the biggest stages in the country, including the Inter-NITs, and that’s where I learned that pressure is just opportunity in disguise.</p>
<div class="stats"><div><b>2×</b>Best Athlete, NIT Durgapur</div><div><b>Inter-NIT</b>competitor</div><div><b>Track</b>events</div><div><b>Medals</b>school · district · state</div></div>
${li(["<b>Best Athlete, NIT Durgapur</b> in 2024-25 and again in 2025-26.","Represented NIT Durgapur at the <b>Inter-NITs</b> in track events.","Medals at school, district and state games."])}
<h1 class="s2" style="margin-top:20px">Gallery</h1>${gal()}`;

/* ---------- Writing ---------- */
P.writing=`<h1>Writing</h1><h2>Essays, stories and notes</h2><p>I write about the things I’m building, the things I’m thinking about, and sometimes the people in my head. Pick one to read.</p>
<div class="pl">${POSTS.map((p,i)=>`<div class="pi" data-post="${i}" role="button" tabindex="0"><b>${esc(p.t)}</b><small>${esc(p.d)} · ${esc(p.c)}</small><span>${esc(p.x.split("\n")[0].slice(0,150))}…</span></div>`).join("")}</div>`;

/* ---------- Skills ---------- */
const SK=[["AI and agents",["LLM APIs (OpenAI/Anthropic)","Prompt Engineering and Chaining","RAG","AI Agents","LLM-as-Judge Evaluation","Model Routing","Semantic Caching","LLM Cost Attribution"]],
["AI dev tools",["Claude Code","Cursor","Vercel"]],
["Technical",["Python","TypeScript","JavaScript","SQL","Node.js","React","Next.js","REST API Design","PostgreSQL","Multi-tenancy","Load Testing","Docker","GCP","Cloudflare","Git","CI/CD (GitHub Actions)"]],
["Product",["Roadmapping","PRDs","Product Discovery","MVP Scoping and Prioritization","Success Metrics and KPIs","Funnel Analysis","A/B Testing","Pricing Strategy","Competitive Analysis","Trade-off Analysis","Agile/Scrum"]],
["Product sense and growth",["User Research","Requirements Gathering","Cross-functional Coordination","Stakeholder Management","Self-serve Product Design","Product-led Growth","User Acquisition","Lifecycle Marketing"]],
["Creative",["Cinematic filmmaking","Video editing","Scripting","Copywriting","Design","Storytelling","Content strategy","Audience growth"]],
["Leadership and communication",["Team leadership","Event organizing","PR and outreach","Editorial","Workshops and public speaking","Model UN diplomacy"]],
["Athletics",["Track events","Discipline under pressure"]]];
P.skills=`<h1>Skills</h1><h2>Code, product, craft and the track</h2>${SK.map(([t,a])=>`<h1 class="s2" style="margin-top:14px">${t}</h1>${tg(a)}`).join("")}`;

/* ---------- Now ---------- */
P.now=`<h1>Now</h1><h2>Updated November 2026</h2>${li([
"<b>Preparing for:</b> Product Manager and Technical Product Manager roles",
"<b>Building:</b> Kivora (Guard, Compass, Autopilot) at Zuvoxia",
"<b>Building:</b> FinOps Copilot, a RAG agent that answers “why did our AI bill spike?” (in progress)",
"<b>Talking to:</b> engineers and founders who run AI in production (5 to 10 buyer interviews planned for Dec 2026)",
"<b>Shipped:</b> OpenCounsel, a free JoSAA and CSAB choice-list simulator (live)"])}
<p>Want to talk? <a href="#" data-go="contact">Get in touch</a>.</p>`;

/* ---------- Contact (extend the original) ---------- */
const soc=`<div class="soc"><a href="${esc(LINKS.github)}" target="_blank" rel="noopener" title="GitHub">GH</a><a href="${esc(LINKS.linkedin)}" target="_blank" rel="noopener" title="LinkedIn">in</a><a href="${esc(LINKS.leetcode)}" target="_blank" rel="noopener" title="LeetCode">LC</a><a href="${esc(LINKS.youtube)}" target="_blank" rel="noopener" title="YouTube">YT</a><a href="${esc(LINKS.instagram)}" target="_blank" rel="noopener" title="Instagram">IG</a></div>`;
P.contact=P.contact.replace(/<div class="soc">[\s\S]*?<\/div>/,soc).replace("<p><b>Email:</b>","<p>I’m open to Product and Technical Product Management roles, brand collaborations and film projects.</p><p><b>Email:</b>");

/* ---------- behaviour: films, posts, back links, app links ---------- */
const v=showcase.view;
const openPost=i=>{const p=POSTS[i],m=v.querySelector("main");if(!m)return;m.innerHTML="";
 const a=document.createElement("a");a.href="#";a.dataset.back="1";a.textContent="← Back to Writing";
 const h=document.createElement("h1");h.textContent=p.t;h.style.fontSize="30px";
 const s=document.createElement("div");s.className="sub";s.textContent=p.d+" · "+p.c;
 const b=document.createElement("div");b.className="post";
 p.x.split(/\n\s*\n/).forEach(t=>{const q=document.createElement("p");q.textContent=t;b.appendChild(q)});
 m.append(a,h,s,b);v.scrollTop=0};
const playFilm=y=>{y.innerHTML=`<iframe src="https://www.youtube-nocookie.com/embed/${esc(y.dataset.yt)}?autoplay=1&rel=0" title="${esc(y.dataset.t)}" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`;y.classList.add("on")};
v.addEventListener("click",e=>{
 const g=e.target.closest(".gal img");if(g){const o=document.createElement("div");o.id="lb";const im=document.createElement("img");im.src=g.src;im.alt=g.alt;o.appendChild(im);o.onclick=()=>o.remove();document.body.appendChild(o);return}
 const y=e.target.closest("[data-yt]");if(y&&!y.classList.contains("on")){playFilm(y);return}
 const a=e.target.closest("[data-app]");if(a){e.preventDefault();if(apps[a.dataset.app])apps[a.dataset.app]();return}
 const p=e.target.closest("[data-post]");if(p){openPost(+p.dataset.post);return}
 if(e.target.closest("[data-back]")){e.preventDefault();render("writing")}});
v.addEventListener("keydown",e=>{if(e.key!=="Enter")return;const y=e.target.closest("[data-yt]"),p=e.target.closest("[data-post]");if(y&&!y.classList.contains("on"))playFilm(y);else if(p)openPost(+p.dataset.post)});

/* ---------- home page extras ---------- */
const _r=window.render;
window.render=function(p){_r.apply(this,arguments);if(page!=="home")return;const h=v.querySelector(".home");if(!h)return;
 h.insertAdjacentHTML("beforeend",`<div class="hx"><div class="links"><a href="#" data-go="software">🖥️ Software</a><a href="#" data-go="films">🎬 Films</a><a href="#" data-go="athlete">🏃 Athlete</a><a href="#" data-go="leadership">🏆 Leadership</a><a href="#" data-go="writing">✍️ Writing</a></div><p class="hnow">Now: preparing for Product and Technical Product Manager roles · building Kivora at Zuvoxia · <a href="#" data-go="now">what I’m working on</a></p></div>`);
 h.querySelectorAll("[data-go]").forEach(e=>{if(!e.onclick)e.onclick=ev=>{ev.preventDefault();render(e.dataset.go)}})};

/* ---------- terminal commands ---------- */
Object.assign(window.TERMX||(window.TERMX={}),{
 help:()=>"Commands: about, skills, experience, projects, films, athlete, leadership, now, kivora, contact, whoami, date, ls, cat <file>,\n  open <page or app name>, clear, exit",
 about:()=>"Kunal Singh Munda: Developer. Filmmaker. Athlete. Creator.\nStudent at NIT Durgapur. Preparing for Product and Technical Product Manager roles.",
 skills:()=>"Technical : Python, TypeScript, JavaScript, SQL, Node.js, React, Next.js, PostgreSQL, Docker, GCP\nAI        : LLM APIs, RAG, agents, LLM-as-judge, model routing, semantic caching\nProduct   : roadmapping, PRDs, discovery, funnel analysis, pricing, A/B testing\nCreative  : cinematic filmmaking, video editing, scripting, copywriting",
 experience:()=>"Zoho (Cloud Spend), SDE Intern, May-Jun 2026\nMyCPTrainer, Product Engineer Intern, May-Jul 2025\nThe Literary Circle, PR and Outreach Head\nNITMUN, Editor-in-Chief and Website Lead",
 projects:()=>"Kivora (Zuvoxia): Guard, Compass, Autopilot, pre-launch\nOpenCounsel: live JoSAA/CSAB choice-list simulator\nUPI Dispute Resolution Platform: portfolio project, synthetic data\nLiterary Circle website: live, 2,500+ registrations",
 films:()=>"Havelock Island, Sikkim, Darjeeling, Parasnath. Type: open films",
 athlete:()=>"Best Athlete, NIT Durgapur (2024-25, 2025-26). Track events, Inter-NITs, medals at school, district and state level.",
 leadership:()=>"PR and Outreach Head, The Literary Circle (+34% participation to ~8,000)\nEditor-in-Chief and Website Lead, NITMUN (230+ delegates)",
 now:()=>"Preparing for PM/TPM roles. Building Kivora and FinOps Copilot. Buyer interviews planned for Dec 2026. Shipped OpenCounsel.",
 open:a=>{const pg=["about","experience","projects","software","films","creator","leadership","athlete","writing","skills","now","contact"];
  if(pg.includes(a)){openWin("show",a);return "Opening "+a+"…"}
  const m={notepad:"note",wallpaper:"disp",paint:"paint",messenger:"msn",player:"wmp"}[a];
  if(m&&apps[m]){apps[m]();return "Opening "+a+"…"}
  return "Usage: open <"+pg.join("|")+"|notepad|wallpaper|paint|messenger|player>"}});

render(location.hash.slice(1)||"home");
})();
