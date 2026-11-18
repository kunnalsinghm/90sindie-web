(()=>{
/* Recycle Bin joins the icon grid so nothing overlaps */
const bin=document.querySelector(".bin"),icons=document.getElementById("icons");
if(bin&&icons){bin.classList.remove("bin");icons.appendChild(bin)}
/* widgets live on the desktop layer, below every window */
const w=document.getElementById("widgets"),desk=document.getElementById("desk");
if(w&&desk)desk.appendChild(w);
/* tell the main window how many icon columns there are so it never covers them */
const fit=()=>{const cols=new Set([...document.querySelectorAll("#icons .ico")].map(i=>i.offsetLeft)).size||1;document.documentElement.style.setProperty("--ic",cols)};
fit();requestAnimationFrame(fit);addEventListener("resize",fit);addEventListener("load",fit);
})();
