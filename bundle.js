(()=>{"use strict";const e=e=>{const t=document.getElementById("reload");setTimeout((()=>{t.style.animation=e?"none":"rotate 600ms infinite linear",t.style.cursor=e?"pointer":"not-allowed",t.disabled=!e}),e?500:0)};let t;const n=(e,t)=>{const n=document.getElementById("cards-user");Array.from(n.children).forEach((n=>{const o=n.querySelector(`.${e}`).textContent.trim().toLowerCase();n.style.display=o.includes(t.toLowerCase())?"":"none"}))},o=e=>{const t=document.getElementById("cards-user"),n=Array.from(t.children).sort(((t,n)=>{const o=t.querySelector(`.${e}`).textContent.trim().toLowerCase(),r=n.querySelector(`.${e}`).textContent.trim().toLowerCase();return o.localeCompare(r)}));t.innerHTML="",n.forEach((e=>t.appendChild(e)))},r=async()=>{try{const n=await(async(n,o)=>(e(),await fetch(n,o).then((e=>{if(!e.ok)throw new Error("Oops...Something went wrong!");return e.json()})).catch((n=>{e(!0),((e,n)=>{const o=document.getElementById("alert-error"),r=document.getElementsByClassName("alert-error-message")[0];r.innerText=e,o.style.display="flex",o.style.opacity="1",t&&clearTimeout(t),"flex"!==o.style.display||(t=setTimeout((()=>{o.style.opacity="0",setTimeout((()=>{r.innerText="",o.style.display="none"}),1e3)}),5e3))})(n.message),console.error("There was a problem with the fetch operation:",n)})).finally((()=>e(!0)))))("https://jsonplaceholder.typicode.com/users");document.getElementById("cards-user").innerHTML=n.map((({username:e,email:t,phone:n})=>`\n        <div class="card-user">\n          <h3 class="username">${e}</h3>\n          <p class="email">${t}</p>\n          <p>${n}</p>\n        </div>\n      `)).join("")}catch{}};r(),document.getElementById("reload").addEventListener("click",r);const s=document.getElementsByClassName("filter-label");for(const e of s)e.addEventListener("click",(e=>{document.querySelector(`.filter-input[name=${e.target.attributes.datatype.value}]`).focus()}));const a=document.getElementsByClassName("filter-input");for(const e of a)e.addEventListener("input",(e=>{const{name:t,value:o}=e.target;" "!==o?n(t,o):e.target.value=""}));const l=document.getElementById("sort"),c=document.getElementsByClassName("sort-menu");l.addEventListener("click",(()=>l.classList.toggle("hover"))),document.addEventListener("click",(e=>{e.stopPropagation(),e.target.classList.contains("sort-menu")||"sort"===e.target.parentElement.id||"sort"===e.target.id||l.classList.remove("hover")}));for(let e of c)e.addEventListener("click",(e=>{e.stopPropagation(),l.classList.remove("hover"),o(e.target.innerText)}))})();