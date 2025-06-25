import{a as C,S as L,i as n}from"./assets/vendor-Dy2ZTtfi.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();let S="44929150-af2bf51de3b27508be12093c9",d=15;async function u(s,t=1){return(await C.get("https://pixabay.com/api/",{params:{key:S,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:d,page:t}})).data}const m=document.querySelector(".gallery"),p=document.querySelector("#loader"),g=document.querySelector(".btn-load-more");let P=new L(".gallery li a",{captions:!0,captionSelector:"a img",captionType:"attr",captionsData:"alt",captionDelay:250});function h(s){m.insertAdjacentHTML("beforeend",s.map(({webformatURL:t,largeImageURL:a,tags:l,likes:e,views:o,comments:i,downloads:w})=>`<li class="gallery-item">
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
              <span class="label">${i}</span>
              </div>
              <div class="field">
              <span class="value" data-downloads>Downloads</span>
              <span class="label">${w}</span>
              </div>
           </div>
           </a>
           </li>`).join("")),P.refresh()}function q(){m.innerHTML=""}function y(){p.style.display="inline-block"}function b(){p.style.display="none"}function v(){g.removeAttribute("hidden")}function f(){g.setAttribute("hidden","")}const E=document.querySelector(".form"),M=document.querySelector(".btn-load-more");let c,r;E.addEventListener("submit",$);M.addEventListener("click",k);async function $(s){if(s.preventDefault(),r=1,c=s.target.elements[0].value.trim(),c===""){n.show({message:"Please, fill out the form",position:"topRight",backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",close:!0});return}f(),q(),y();try{await u(c,r).then(t=>{if(t.hits.length>=1){h(t.hits);const a=Math.ceil(t.totalHits/d);r<a?v():f()}else n.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",close:!0})})}catch(t){n.show({message:t.message,position:"topRight",backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",close:!0})}finally{b()}}async function k(){r+=1,y(),f();try{const s=await u(c,r);h(s.hits);const t=Math.ceil(s.totalHits/d);console.log(r>=t),r>=t?(n.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",close:!0}),f()):v();const a=document.querySelector(".gallery-item"),l=a.getBoundingClientRect();if(a)window.scrollBy({top:l.height*2,behavior:"smooth"});else return}catch(s){n.show({message:s.message,position:"topRight",backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",close:!0})}finally{b()}}
//# sourceMappingURL=index.js.map
