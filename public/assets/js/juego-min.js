const miModulo=(()=>{"use strict";let e=[],t=["C","D","H","S"],l=["A","J","Q","K"],n=[],r=document.getElementById("btnPedir"),a=document.getElementById("btnDetener"),d=document.getElementById("btnNuevo"),o=document.querySelectorAll(".divCartas"),i=document.querySelectorAll("small"),s=(t=2)=>{e=c();for(let l=0;l<t;l++)n.push(0);i.forEach(e=>e.innerHTML=0),o.forEach(e=>e.innerHTML=""),a.disabled=!1,r.disabled=!1},c=()=>{e=[];for(let n=2;n<=10;n++)for(let r of t)e.push(n+r);for(let a of t)for(let d of l)e.push(d+a);return _.shuffle(e)},u=()=>{if(0===e.length)throw"No hay cartas en el deck";return e.pop()};c();let g=e=>{let t=e.substring(0,e.length-1);return isNaN(t)?"A"===t?11:10:1*t},$=(e,t)=>(n[t]=n[t]+g(e),i[t].innerText=n[t],n[t]),f=(e,t)=>{let l=document.createElement("img");l.src=`cartas/${e}.png`,l.classList.add("carta"),o[t].append(l)},h=()=>{let[e,t]=n;setTimeout(()=>{t===e?alert("Nadie gana"):e>21?alert("Computadora gana"):t>21?alert("Jugador gana"):alert("Computadora gana")},20)},p=e=>{let t=0;do{let l=u();t=$(l,n.length-1),f(l,n.length-1)}while(t<=e&&e<=21);h()};return r.addEventListener("click",()=>{let e=u(),t=$(e,0);f(e,0),t>21?(console.warn("Lo siento perdiste"),p(t),r.disabled=!0):21===t&&(p(t),console.warn("Genial 21"))}),a.addEventListener("click",()=>{a.disabled=!0,r.disabled=!0,p(n[0])}),d.addEventListener("click",()=>{s()}),{nuevoJuego:s}})();