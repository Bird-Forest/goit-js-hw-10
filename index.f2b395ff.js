!function(){var e=new URLSearchParams({fields:"name,image,description,temperament,"}),n="https://api.thecatapi.com/v1/breeds?".concat(e);function t(){return fetch(n,{headers:{"x-api-key":"live_CIw3lZRkcpgh759C9YBXivIvAETipzFqRyXtOHa4sXukf5xIGdNG9JZOQ72DPlKH"}}).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))}var o=document.querySelector(".breed-select");console.dir(o);var r=document.querySelector(".cat-info");console.dir(r),o.addEventListener("change",(function(e){t(),console.log(e.currentTarget.elements)}));var c=[];t().then((function(e){console.log(e),e=e.filter((function(e){var n;return null!=(null===(n=e.image)||void 0===n?void 0:n.url)})),c=e,console.log(c);for(var n=0;n<c.length;n++){var t=c[n],r=document.createElement("option");t.image&&(r.value=n,r.innerHTML="".concat(t.name),o.appendChild(r))}})).catch((function(e){return console.log(e)}))}();
//# sourceMappingURL=index.f2b395ff.js.map
