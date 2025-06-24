import{a as C,S as L,i as n}from"./assets/vendor-Dy2ZTtfi.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();let S="44929150-af2bf51de3b27508be12093c9",f=15;async function u(o,t=1){return(await C.get("https://pixabay.com/api/",{params:{key:S,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:f,page:t}})).data}const p=document.querySelector(".gallery"),m=document.querySelector("#loader"),g=document.querySelector(".btn-load-more");let q=new L(".gallery li a",{captions:!0,captionSelector:"a img",captionType:"attr",captionsData:"alt",captionDelay:250});function h(o){p.insertAdjacentHTML("beforeend",o.map(({webformatURL:t,largeImageURL:a,tags:r,likes:e,views:s,comments:l,downloads:w})=>`<li class="gallery-item">
           <a class="gallery-link" href="${a}">
           <img class="gallery-image" src="${t}" alt="${r}"/>
           <div class="social-items">
              <div class="field">
              <span class="value" data-likes>Likes</span>
              <span class="label">${e}</span>
              </div>
              <div class="field">
              <span class="value" data-views>Views</span>
              <span class="label">${s}</span>
              </div>
              <div class="field">
              <span class="value" data-comments>Coments</span>
              <span class="label">${l}</span>
              </div>
              <div class="field">
              <span class="value" data-downloads>Downloads<span>
              <span class="label">${w}</span>
              </div>
           </div>
           </a>
           </li>`).join("")),q.refresh()}function E(){p.innerHTML=""}function y(){m.style.display="inline-block"}function b(){m.style.display="none"}function v(){g.removeAttribute("hidden")}function c(){g.setAttribute("hidden","")}const P=document.querySelector(".form"),M=document.querySelector(".btn-load-more");let d,i;P.addEventListener("submit",$);M.addEventListener("click",k);async function $(o){if(o.preventDefault(),i=1,d=o.target.elements[0].value,d===""){n.show({message:"Please, fill out the form",position:"topRight",backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",close:!0});return}c(),E(),y();try{await u(o.target.elements[0].value).then(t=>{t.hits.length>=1?(h(t.hits),v()):n.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",close:!0})})}catch(t){n.show({message:t.message,position:"topRight",backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",close:!0})}finally{b()}}async function k(){i+=1,y(),c();try{const o=await u(d,i);h(o.hits);const t=Math.ceil(o.totalHits/f);console.log(i>=t),i>=t?(n.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",close:!0}),c()):v();const a=document.querySelector(".gallery-item"),r=a.getBoundingClientRect();if(a)window.scrollBy({top:r.height*2,behavior:"smooth"});else return}catch(o){n.show({message:o.message,position:"topRight",backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",close:!0})}finally{b()}}
//# sourceMappingURL=index.js.map
