!function(){let e=document.querySelector(".error"),t=document.querySelector(".loader"),n=document.querySelector(".cat-info"),l=document.querySelector(".breed-select");l.addEventListener("change",i),e.style.display="none",l.style.display="none";let o=[];function i(){return l.value,fetch("https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}",{headers:{"x-api-key":"live_CIw3lZRkcpgh759C9YBXivIvAETipzFqRyXtOHa4sXukf5xIGdNG9JZOQ72DPlKH"}}).then(n=>{if(!n.ok)throw void(t.style.display="none",e.style.display="block");return n.json()}).then(e=>(o[l.selectedIndex],function(){let e=l.selectedIndex;o.length>1&&(n.innerHTML="");let i=document.createElement("img"),r=document.createElement("h2"),c=document.createElement("p"),a=document.createElement("h3");i.style.display="block",i.src=`${o[e].image.url}`,i.style.width="700px",i.style.height="600px",i.style.objectFit="cover",r.textContent=`${o[e].name}`,r.style.fontSize="38px",r.style.marginBottom=0,c.textContent=`${o[e].description}`,c.style.fontSize="24px",a.textContent=`Temperament: ${o[e].temperament}`,a.style.fontSize="28px",a.style.marginTop=0,n.append(i,r,c,a),t.style.display="none"}())).catch(e=>console.log(e))}fetch("https://api.thecatapi.com/v1/breeds",{headers:{"x-api-key":"live_CIw3lZRkcpgh759C9YBXivIvAETipzFqRyXtOHa4sXukf5xIGdNG9JZOQ72DPlKH"}}).then(e=>{if(!e.ok)throw Error(e.status);return e.json()}).then(e=>{o=e=e.filter(e=>e.image?.url!=null);for(let e=0;e<o.length;e++){let t=o[e],n=document.createElement("option");t.image&&(n.value=t.id,n.innerHTML=`${t.name}`,l.appendChild(n))}}).catch(e=>console.log(e)),l.style.display="block",i()}();
//# sourceMappingURL=index.1851ba20.js.map
