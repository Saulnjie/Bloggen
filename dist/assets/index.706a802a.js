const n="https://cms.alinjie.io";let t=[],e=[];const c=document.querySelector(".carousel-posts-container"),o=document.querySelector("#next-posts"),i=document.querySelector("#previous-posts");function s(){t.length>0&&(c.innerHTML=""),t.forEach((t=>{const e=document.createElement("div");e.innerHTML=`\n            <img src="${n}${t.coverPhoto.formats.small.url}" />\n            <span>${t.title}</span>\n        `,c.appendChild(e)}))}(async function(){const t=await fetch(`${n}/posts`);return await t.json()})().then((n=>{const c=n.slice(0,4);t=c,e=n,s()})),o.onclick=function(){const n=t.slice(-1)[0],c=e.indexOf(e.find((t=>t.id===n.id))),o=e.slice(c+1,c+5);t=o,s()},i.onclick=function(){const n=t[0],c=e.indexOf(e.find((t=>t.id===n.id))),o=e.slice(c-4,c);t=o,s()};
