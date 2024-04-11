import{S as g,i as u}from"./assets/vendor-8c59ed88.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();const f=r=>{const e="43304487-b7d5c7fa3c9a8a42508d5a037",a="https://pixabay.com/api",i="",t=new URLSearchParams({key:e,q:r,image_type:"photo",orientation:"horizontal",per_page:"9",safesearch:"true"});return fetch(`${a}${i}/?${t}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})};function h(r){return r.map(e=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${e.largeImageURL}">
        <img
          class="gallery-image"
          src="${e.webformatURL}"
          data-source="${e.largeImageURL}"
          alt="${e.tags}"
          title="${e.tags}"
        />
        <div class="gallery-stat">
           <div class="gallery-stat-item">
              <b class="gallery-stat-item-b">Likes</b>
              <p class="gallery-stat-item-p">${e.likes}</p>
            </div>
            <div class="gallery-stat-item">
              <b class="gallery-stat-item-b">Views</b>
              <p class="gallery-stat-item-p">${e.views}</p>
            </div>
            <div class="gallery-stat-item">
              <b class="gallery-stat-item-b">Comments</b>
              <p class="gallery-stat-item-p">${e.comments}</p>
            </div>
          <div class="gallery-stat-item">
              <b class="gallery-stat-item-b">Downloads</b>
              <p class="gallery-stat-item-p">${e.downloads}</p>
          </div>
        </div>      
      </a>
    </li>`).join("")}const n="/goit-js-hw-11/assets/octagon-7962080a.svg",p=new g(".gallery a",{captionData:"alt",captionDelay:250}),l=document.querySelector(".form-search"),c=document.querySelector(".gallery"),d=document.querySelector(".loader");l.addEventListener("submit",y);function y(r){r.preventDefault();const e=r.currentTarget.elements.search.value.trim();c.innerHTML="",e===""?(m("You entered an empty string!","#EF4040",n),l.reset()):(L(),f(e).then(a=>{a.hits.length!=0?(c.innerHTML=h(a.hits),p.refresh()):m(`Sorry, there are no images matching 
            your search query. Please, try again!`,"#EF4040",n),l.reset()}).catch(a=>console.log(a)).finally(()=>{v()}))}function m(r,e,a){u.show({message:r,messageColor:"white",backgroundColor:e,closeOnEscape:!0,position:"topRight",iconUrl:a,iconColor:"white",iconColor:"white",theme:"dark",maxWidth:"350px"})}function L(){d.classList.remove("is-hidden")}function v(){d.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
