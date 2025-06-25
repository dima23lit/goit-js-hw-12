import{a as w,S as L,i}from"./assets/vendor-Dy2ZTtfi.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();let S="44929150-af2bf51de3b27508be12093c9",d=15;async function u(s,t=1){return(await w.get("https://pixabay.com/api/",{params:{key:S,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:d,page:t}})).data}const g=document.querySelector(".gallery"),m=document.querySelector("#loader"),p=document.querySelector(".btn-load-more");let E=new L(".gallery li a",{captions:!0,captionSelector:"a img",captionType:"attr",captionsData:"alt",captionDelay:250});function h(s){g.insertAdjacentHTML("beforeend",s.map(({webformatURL:t,largeImageURL:a,tags:l,likes:e,views:o,comments:n,downloads:C})=>`<li class="gallery-item">
           <a class="gallery-link" href="${a}">
           <img class="gallery-image" src="${t}" alt="${l}"/>
           <div class="social-items">
              <div class="field">
              <span class="value" data-likes>Likes</span>
              <span class="label">${e}</span>
              </div>
              <div class="field">
              <span class="value" data-views>Views</span>
              <span class="label">${o}</span>
              </div>
              <div class="field">
              <span class="value" data-comments>Coments</span>
              <span class="label">${n}</span>
              </div>
              <div class="field">
              <span class="value" data-downloads>Downloads</span>
              <span class="label">${C}</span>
              </div>
           </div>
           </a>
           </li>`).join("")),E.refresh()}function P(){g.innerHTML=""}function y(){m.style.display="inline-block"}function b(){m.style.display="none"}function v(){p.removeAttribute("hidden")}function f(){p.setAttribute("hidden","")}const q=document.querySelector(".form"),M=document.querySelector(".btn-load-more");let c,r;q.addEventListener("submit",k);M.addEventListener("click",F);async function k(s){if(s.preventDefault(),r=1,c=s.target.elements[0].value.trim(),c===""){i.show({message:"Please, fill out the form",position:"topRight",backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",close:!0});return}f(),P(),y();try{await u(c,r).then(t=>{if(t.hits.length>=1){h(t.hits);const a=Math.ceil(t.totalHits/d);r<a?v():(i.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",close:!0}),f())}else i.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",close:!0})})}catch(t){i.show({message:t.message,position:"topRight",backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",close:!0})}finally{b()}}async function F(){r+=1,y(),f();try{const s=await u(c,r);h(s.hits);const t=Math.ceil(s.totalHits/d);console.log(r>=t),r>=t?(i.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",close:!0}),f()):v();const a=document.querySelector(".gallery-item"),l=a.getBoundingClientRect();if(a)window.scrollBy({top:l.height*2,behavior:"smooth"});else return}catch(s){i.show({message:s.message,position:"topRight",backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",close:!0})}finally{b()}}
//# sourceMappingURL=index.js.map
