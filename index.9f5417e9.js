const e=document.querySelector(".error"),t=document.querySelector(".loader"),n=document.querySelector(".cat-info"),l=document.querySelector(".breed-select");console.dir(l),l.addEventListener("change",function(e){return e.preventDefault(),l.value,fetch("https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}",{headers:{"x-api-key":"live_CIw3lZRkcpgh759C9YBXivIvAETipzFqRyXtOHa4sXukf5xIGdNG9JZOQ72DPlKH"}}).then(e=>{if(!e.ok)throw i();return e.json()}).then(e=>{e=r[l.selectedIndex];let i={title:e.name,description:e.description,temperament:e.temperament,image:e.image.url};return function({image:e,title:i,description:s,temperament:a}){l.selectedIndex,r.length>1&&(n.innerHTML=""),n.innerHTML=`<img src="${e}" alt="" class = "picture">
    <h2 class = "title">${i}</h2>
    <p class = "description">${s}</p>
    <h3 class = "temperament">Temperament: ${a}</h3>`,t.style.display="none"}(i)}).catch(e=>{setTimeout(()=>{n.style.display="none",i()},1e3)})}),e.style.display="none",l.style.display="none",l.value="";let r=[];function i(){t.style.display="none",e.style.display="block"}fetch("https://api.thecatapi.com/v1/breeds",{headers:{"x-api-key":"live_CIw3lZRkcpgh759C9YBXivIvAETipzFqRyXtOHa4sXukf5xIGdNG9JZOQ72DPlKH"}}).then(e=>{if(!e.ok)throw Error(e.status);return e.json()}).then(e=>{r=e;for(let e=0;e<r.length;e++){let t=r[e],n=document.createElement("option");n.innerHTML=`${t.name}`,l.appendChild(n)}}).catch(e=>console.log(e)),l.style.display="block";
//# sourceMappingURL=index.9f5417e9.js.map
