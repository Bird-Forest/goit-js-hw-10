document.querySelector(".error"),document.querySelector(".loader"),document.querySelector(".cat-info");const e=document.querySelector(".error");e.textContent="",e.style.display="none";const t=document.querySelector(".loader"),n=document.querySelector(".cat-info"),o=document.querySelector(".breed-select");o.addEventListener("change",r),o.style.visibility="hidden";let l=[];function r(){return o.value,fetch("https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}",{headers:{"x-api-key":"live_CIw3lZRkcpgh759C9YBXivIvAETipzFqRyXtOHa4sXukf5xIGdNG9JZOQ72DPlKH"}}).then(e=>{if(!e.ok)throw Error(e.status);return e.json()}).then(e=>(l[o.selectedIndex],function(){let e=o.selectedIndex;l.length>1&&(n.innerHTML="");let r=document.createElement("img"),i=document.createElement("h2"),a=document.createElement("p"),c=document.createElement("h3");r.style.display="block",r.src=`${l[e].image.url}`,r.style.width="700px",r.style.height="600px",r.style.backgroundSize="cover",i.textContent=`${l[e].name}`,i.style.fontSize="38px",i.style.marginBottom=0,i.style.backgroundColor="rgb(255, 255, 255)",a.textContent=`${l[e].description}`,a.style.fontSize="24px",c.textContent=`Temperament: ${l[e].temperament}`,c.style.fontSize="28px",c.style.marginTop=0,n.append(r,i,a,c),t.style.display="none"}())).catch(n=>{e.textContent="Oops! Something went wrong! Try reloading the page!",e.style.display="block",t.style.display="none",t.textContent=""})}fetch("https://api.thecatapi.com/v1/breeds",{headers:{"x-api-key":"live_CIw3lZRkcpgh759C9YBXivIvAETipzFqRyXtOHa4sXukf5xIGdNG9JZOQ72DPlKH"}}).then(e=>{if(!e.ok)throw Error(e.status);return e.json()}).then(e=>{l=e=e.filter(e=>e.image?.url!=null);for(let e=0;e<l.length;e++){let t=l[e],n=document.createElement("option");t.image&&(n.value=t.id,n.innerHTML=`${t.name}`,o.appendChild(n))}}).catch(e=>console.log(e)),o.style.visibility="visible",t.textContent="Loading data, please wait...",t.style.display="block",e.style.display="none",e.textContent="",t.classList.replace("error","loader"),r();
//# sourceMappingURL=index.bace6b24.js.map
