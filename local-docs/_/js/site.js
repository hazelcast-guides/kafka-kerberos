!function(){var n,i,s,c,r,o,l=/^sect(\d)$/;function e(){var e,t,n=window.location.hash;if(n&&(n.indexOf("%")&&(n=decodeURIComponent(n)),!(e=s.querySelector('.nav-link[href="'+n+'"]')))){n=document.getElementById(n.slice(1));if(n)for(var i=n,a=document.querySelector("article.doc");(i=i.parentNode)&&i!==a;){var c=i.id;if(!c&&(c=i.className.match(l))&&(c=(i.firstElementChild||{}).id),c&&(e=s.querySelector('.nav-link[href="#'+c+'"]')))break}}if(e)t=e.parentNode;else{if(!o)return;e=(t=o).querySelector(".nav-link")}t!==r&&(f(s,".nav-item.is-active").forEach(function(e){e.classList.remove("is-active","is-current-path","is-current-page")}),t.classList.add("is-current-page"),d(r=t),m(s,e))}function d(e){for(var t,n=e.parentNode;!(t=n.classList).contains("nav-menu");)"LI"===n.tagName&&t.contains("nav-item")&&t.add("is-active","is-current-path"),n=n.parentNode;e.classList.add("is-active")}function a(){this.classList.toggle("is-active")}function u(e){var t=document.documentElement;t.classList.remove("is-clipped--nav"),i.classList.remove("is-active"),n.classList.remove("is-active"),t.removeEventListener("click",u),v(e)}function v(e){e.stopPropagation()}function m(e,t){var n=e.getBoundingClientRect(),i=n.height,a=window.getComputedStyle(c);"sticky"===a.position&&(i-=n.top-parseFloat(a.top)),e.scrollTop=Math.max(0,.5*(t.getBoundingClientRect().height-i)+t.offsetTop)}function f(e,t){return[].slice.call(e.querySelectorAll(t))}function p(e,t){e=e.nextElementSibling;if(e)return(!t||e[e.matches?"matches":"msMatchesSelector"](t))&&e}0<document.getElementsByClassName("nav-container").length&&(n=document.querySelector(".nav-container"),(i=document.querySelector(".nav-toggle")).addEventListener("click",function(e){if(i.classList.contains("is-active"))return u(e);var t=document.documentElement;t.classList.add("is-clipped--nav"),i.classList.add("is-active"),n.classList.add("is-active"),t.addEventListener("click",u),v(e)}),n.addEventListener("click",v),(s=n.querySelector("[data-panel=menu]"))&&(c=n.querySelector(".nav"),r=s.querySelector(".is-current-page"),(o=r)?(d(r),m(s,r.querySelector(".nav-link"))):s.scrollTop=0,f(s,".nav-item-toggle").forEach(function(e){var t=e.parentElement;e.addEventListener("click",a.bind(t));e=p(e,".nav-text");e&&(e.style.cursor="pointer",e.addEventListener("click",a.bind(t)))}),f(s,".nav-text").forEach(function(e){var t=e.parentElement;e.addEventListener("click",a.bind(t));e=p(e,".nav-list");e&&(e.style.cursor="pointer",e.addEventListener("click",a.bind(t)))}),c.querySelector(".context").addEventListener("click",function(){var e=c.querySelector(".is-active[data-panel]"),t="menu"===e.dataset.panel?"explore":"menu";e.classList.toggle("is-active"),c.querySelector("[data-panel="+t+"]").classList.toggle("is-active")}),s.addEventListener("mousedown",function(e){1<e.detail&&e.preventDefault()}),s.querySelector('.nav-link[href^="#"]')&&(window.location.hash&&e(),window.addEventListener("hashchange",e))))}();
!function(){"use strict";var e=document.querySelector("aside.toc.sidebar");if(e){if(document.querySelector("body.-toc"))return e.parentNode.removeChild(e);var t=parseInt(e.dataset.levels||2);if(!(t<0)){for(var r,d,a,s,o,n,i,c,l=document.querySelector("article.doc"),u=[],m=0;m<=t;m++)u.push(m?".sect"+m+">h"+(m+1)+"[id]":"h1[id].sect0");i=u.join(","),c=l,(r=[].slice.call((c||document).querySelectorAll(i))).length&&(a={},s=r.reduce(function(e,t){var o=document.createElement("a");o.textContent=t.textContent,a[o.href="#"+t.id]=o;var n=document.createElement("li");return n.dataset.level=parseInt(t.nodeName.slice(1))-1,n.appendChild(o),e.appendChild(n),e},document.createElement("ul")),(o=e.querySelector(".toc-menu"))||((o=document.createElement("div")).className="toc-menu"),(n=document.createElement("h3")).textContent="",o.appendChild(n),o.appendChild(s),(e=!document.getElementById("toc")&&l.querySelector("h1.page ~ :not(.is-before-toc)"))&&((n=document.createElement("aside")).className="toc embedded",n.appendChild(o.cloneNode(!0)),e.parentNode.insertBefore(n,e)),window.addEventListener("load",function(){f(),window.addEventListener("scroll",f)}))}}function f(){var t,e=window.pageYOffset,o=1.15*p(document.documentElement,"fontSize"),n=l.offsetTop;if(e&&window.innerHeight+e+2>=document.documentElement.scrollHeight){d=Array.isArray(d)?d:Array(d||0);var i=[],c=r.length-1;return r.forEach(function(e,t){var o="#"+e.id;t===c||e.getBoundingClientRect().top+p(e,"paddingTop")>n?(i.push(o),d.indexOf(o)<0&&a[o].classList.add("is-active")):~d.indexOf(o)&&a[d.shift()].classList.remove("is-active")}),s.scrollTop=s.scrollHeight-s.offsetHeight,void(d=1<i.length?i:i[0])}Array.isArray(d)&&(d.forEach(function(e){a[e].classList.remove("is-active")}),d=void 0),r.some(function(e){return e.getBoundingClientRect().top+p(e,"paddingTop")-o>n||void(t="#"+e.id)}),t?t!==d&&(d&&a[d].classList.remove("is-active"),(e=a[t]).classList.add("is-active"),s.scrollHeight>s.offsetHeight&&(s.scrollTop=Math.max(0,e.offsetTop+e.offsetHeight-s.offsetHeight)),d=t):d&&(a[d].classList.remove("is-active"),d=void 0)}function p(e,t){return parseFloat(window.getComputedStyle(e)[t])}}();
!function(){"use strict";var o=document.querySelector("article.doc");function i(e){return e&&(~e.indexOf("%")?decodeURIComponent(e):e).slice(1)}function c(e){e&&(window.location.hash="#"+this.id,e.preventDefault()),window.scrollTo(0,function e(n,t){return o.contains(n)?e(n.offsetParent,n.offsetTop+t):t}(this,0)-50)}window.addEventListener("load",function e(n){var t,o;(t=i(window.location.hash))&&(o=document.getElementById(t))&&(c.bind(o)(),setTimeout(c.bind(o),0)),window.removeEventListener("load",e)}),Array.prototype.slice.call(document.querySelectorAll('a[href^="#"]')).forEach(function(e){var n,t;(n=i(e.hash))&&(t=document.getElementById(n))&&e.addEventListener("click",c.bind(t))})}();
!function(){"use strict";var t,e=document.querySelector(".page-versions .version-menu-toggle");e&&(t=document.querySelector(".page-versions"),e.addEventListener("click",function(e){t.classList.toggle("is-active"),e.stopPropagation()}),document.documentElement.addEventListener("click",function(){t.classList.remove("is-active")}))}();
document.addEventListener("DOMContentLoaded",function(){var t=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);0!==t.length&&t.forEach(function(e){e.addEventListener("click",function(t){t.stopPropagation(),e.classList.toggle("is-active"),document.getElementById(e.dataset.target).classList.toggle("is-active"),document.documentElement.classList.toggle("is-clipped--navbar")})})});
!function(){"use strict";var l=window.location.hash;function o(t,a){return Array.prototype.slice.call((a||document).querySelectorAll(t))}o(".doc .tabset").forEach(function(c){var n,r,t=c.querySelector(".tabs");t&&(o("li",t).forEach(function(t,a){var e,i,s=(t.querySelector("a[id]")||t).id;s&&(i=s,e=o(".tab-pane",c).find(function(t){return t.getAttribute("aria-labelledby")===i}),a||(r={tab:t,pane:e}),!n&&l==="#"+s&&(n=!0)?(t.classList.add("is-active"),e&&e.classList.add("is-active")):a||(t.classList.remove("is-active"),e&&e.classList.remove("is-active")),t.addEventListener("click",function(t){var a=this.tab,e=this.pane;o(".tabs li, .tab-pane",this.tabset).forEach(function(t){t===a||t===e?t.classList.add("is-active"):t.classList.remove("is-active")}),t.preventDefault()}.bind({tabset:c,tab:t,pane:e})))}),!n&&r&&(r.tab.classList.add("is-active"),r.pane&&r.pane.classList.add("is-active"))),c.classList.remove("is-loading")})}();
!function(){"use strict";document.querySelectorAll("pre > code").forEach(function(t){var e=document.createElement("div");e.className="source-type-box";var a=document.createElement("a");a.className="copy-code-button",a.dataset.title="Copy",a.appendChild(document.createElement("i")).className="far fa-copy";var n=document.createElement("span");n.className="data-source",t.dataset.lang?n.innerHTML+=t.dataset.lang:n.innerHTML+=" ";var r=document.createElement("span");r.className="fade-shadow",a.addEventListener("click",function(e){e.currentTarget!==e.target&&("$"===(e=t.innerText).charAt(0)?(e=e.substring(2),navigator.clipboard.writeText(e).then(function(){a.blur(),a.dataset.title="Copied ✓",setTimeout(function(){a.dataset.title="Copy"},2e3)},function(){a.dataset.title="Error"})):navigator.clipboard.writeText(t.innerText).then(function(){a.blur(),a.dataset.title="Copied ✓",setTimeout(function(){a.dataset.title="Copy"},2e3)},function(){a.dataset.title="Error"}))});var i=t.parentNode;i.appendChild(e),e.appendChild(n),e.appendChild(a),i.appendChild(r)})}();
!function(){var e=[],n=document.getElementsByClassName("image");if(0<n.length)for(var t=0;t<n.length;t++)e.push(n[t].children[0]);!function(c){for(var l=0;l<c.length;l++){const e=c[l].parentNode.parentElement,n=document.createElement("div");n.className="modal";const t=document.createElement("span");t.className="close",t.innerHTML="&times;";const a=document.createElement("img");a.src=c[l].getAttribute("src"),a.className="modal-image",n.appendChild(t),n.appendChild(a),e.appendChild(n),c[l].addEventListener("click",function(e){e.preventDefault(),n.style.display="block"}),t.onclick=function(){n.style.display="none"},document.addEventListener("keydown",function(e){"Escape"===e.key&&(n.style.display="none")})}}(e)}();
!function(){"use strict";var e=document.getElementsByClassName("more-versions"),s=document.getElementsByClassName("fewer-versions");if(null!==e){for(var n=0;n<e.length;n++)e[n].addEventListener("click",function(e){var s=this.nextElementSibling;this.style.display="none",s.style.display="block";for(var n=this.parentElement.nextElementSibling.childNodes,t=0;t<n.length;t++)"version hidden"!==n[t].className&&"version hidden is-latest"!==n[t].className||(n[t].style.display="block")});for(var t=0;t<s.length;t++)s[t].addEventListener("click",function(e){this.previousElementSibling.style.display="block",this.style.display="none";for(var s=this.parentElement.nextElementSibling.childNodes,n=0;n<s.length;n++)"version hidden"!==s[n].className&&"version hidden is-latest"!==s[n].className||(s[n].style.display="none")})}}();
!function(){"use strict";var e=document.getElementById("cookie"),t=document.getElementById("cookie-close"),o=document.getElementById("latest-banner");"closed"!==window.localStorage.getItem("docsCookie")&&(e.style.display="flex");var l=window.localStorage.getItem("latestBannerCookie");if(l&&o){var n=JSON.parse(l);const e=new Date;e.getTime()>n.expiry&&(window.localStorage.removeItem("latestBannerCookie"),o.style.display="flex")}else!l&&o&&(o.style.display="flex");t.addEventListener("click",function(){e.style.display="none",window.localStorage.setItem("docsCookie","closed")})}();
!function(){"use strict";var n=document.getElementById("hide-nav");n&&n.addEventListener("click",function(){var e=document.getElementsByClassName("nav-container")[0];"none"===e.style.display?(e.style.display="block",n.style.transform="none"):(e.style.display="none",n.style.transform="rotate(180deg)")})}();