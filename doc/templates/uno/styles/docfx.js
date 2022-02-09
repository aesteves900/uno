const active="active",expanded="in",filtered="filtered",show="show",hide="hide",collapsed="collapsed",iframed=window.self!==window.top;function renderAffix(){var e=function(){const e=$($.map(["h1","h2","h3","h4"],function(e){return".article article "+e}).join(", ")),o=[];e.each(function(e,t){if(t.id){var n,n={name:(n=$(t).text())&&n.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),href:"#"+t.id,items:[]};if(o.length){const r=o[o.length-1];if(t.tagName===r.type)r.siblings.push(n);else if(t.tagName[1]>r.type[1])o.push({type:t.tagName,siblings:[n]});else{for(;t.tagName[1]<o[o.length-1].type[1];)i();t.tagName===o[o.length-1].type?o[o.length-1].siblings.push(n):o.push({type:t.tagName,siblings:[n]})}}else o.push({type:t.tagName,siblings:[n]})}});for(;1<o.length;)i();function i(){var e=o.pop(),t=o[o.length-1];const n=t.siblings[t.siblings.length-1];$.each(e.siblings,function(e,t){n.items.push(t)})}if(0<o.length){var t=o.pop().siblings;return 1===t.length?t[0].items:t}return}();if(e&&0<e.length){var t='<h5 class="title">In This Article</h5>';t+=formList(e,["nav","bs-docs-sidenav"]),$("#affix").empty().append(t),$("footer").is(":visible")&&$(".sideaffix").css("bottom","70px"),$("#affix a").on("click",function(e){const t=$('[data-spy="scroll"]').data()["bs.scrollspy"];e=e.target.hash;t&&e&&t.activate(e)});const n=$(".contribution");t=n.get(0).outerHTML;n.remove(),$(".sideaffix").append(t)}}function renderAlerts(){$(".NOTE, .TIP").addClass("alert alert-info"),$(".WARNING").addClass("alert alert-warning"),$(".IMPORTANT, .CAUTION").addClass("alert alert-danger")}function renderBreadcrumb(){const n=[];$("#navbar a.active").each(function(e,t){n.push({href:t.href,name:t.innerHTML})}),$("#toc a.active").each(function(e,t){n.push({href:t.href,name:t.innerHTML})});var e=formList(n,"breadcrumb");$("#breadcrumb").html(e)}function renderFooter(){function e(){return $(document).height()-($(window).height()+$(window).scrollTop())<1}function t(){$(".sidetoc").removeClass("shiftup"),$(".sideaffix").removeClass("shiftup")}function n(){$(".sidetoc").addClass("shiftup"),$(".sideaffix").addClass("shiftup")}e()?(n(),$("footer").show()):(t(),$("footer").hide()),$(window).on("scroll",()=>{e()?(n(),$("footer").fadeIn()):(t(),$("footer").fadeOut())})}function renderLinks(){"true"===$("meta[property='docfx:newtab']").attr("content")&&$(document.links).filter(function(){return this.hostname!==window.location.hostname}).attr("target","_blank")}function removeNavbar(){const e=document.querySelector("header > nav");e.remove()}function fixNavbarSpacing(){var e=document.createElement("style");document.head.appendChild(e);e=e.sheet;e.insertRule(".subnav {top : 0}"),e.insertRule(".sidefilter {top : 40px}"),e.insertRule(".sidetoc {top : 105px}"),e.insertRule(".body-content .article {margin-top : 50px}"),e.insertRule(".sideaffix {top : 25px}"),e.insertRule("@media only screen and (max-width: 767px) {.sidenav {top : 35px}}"),e.insertRule("@media only screen and (max-width: 767px){ .body-content .article {margin-top: 110px !important;}")}function initializeNavbar(){const n=document.querySelector("header > .navbar");if(document.body.classList.contains("front-page")){let e,t=!1;window.addEventListener("scroll",function(){e=window.scrollY,t||(window.requestAnimationFrame(function(){100<=e?n.classList.add("scrolled"):n.classList.remove("scrolled"),t=!1}),t=!0)})}const e=new XMLHttpRequest;const o=document.getElementById("navbar");let i=!1;e.open("get","https://platform.uno/wp-json/wp/v2/menu",!0),void 0!==n&&(e.onload=function(){200===e.status&&e.responseText&&(o.innerHTML=JSON.parse(e.responseText),i=!0,$(document).trigger("wordpressMenuHasLoaded"))},e.onerror=function(e){},e.send()),$(document).ajaxComplete(function(e,t,n){if("toc.html"===n.url&&i){const r=o.getElementsByClassName("navbar-nav");r[0].className+=" hidden"}})}function updateLogo(){window.innerWidth<980?$("#logo").attr("src","../images/UnoLogoSmall.png"):$("#logo").attr("src","../images/uno-logo.svg")}function updateLogoOnResize(){$(window).on("resize",function(){updateLogo()})}function renderNavbar(){void 0===$("#navbar ul")[0]?function(){let t=$("meta[property='docfx\\:navrel']").attr("content");if(t){t=t.replace(/\\/g,"/");let a=$("meta[property='docfx\\:tocrel']").attr("content")||"";a=a&&a.replace(/\\/g,"/"),$.get(t,function(e){$(e).find("#toc>ul").appendTo("#navbar");e=t.lastIndexOf("/");let o="";-1<e&&(o=t.substr(0,e+1)),$("#navbar>ul").addClass("navbar-nav");const i=getAbsolutePath(window.location.pathname);$("#navbar").find("a[href]").each(function(e,t){var n=$(t).attr("href");if(isRelativePath(n)){n=o+n,$(t).attr("href",n);let e=!1;var r=t.name;r?getDirectory(getAbsolutePath(o+r))===getDirectory(getAbsolutePath(a))&&(e=!0):getAbsolutePath(n)===i&&("dropdown"===$(t).attr("data-toggle")||(e=!0)),e&&$(t).addClass(active)}}),renderNavbar()})}}():($("#navbar ul a.active").parents("li").addClass(active),renderBreadcrumb())}function renderLogo(){$("img.svg").each(function(){const n=jQuery(this),r=n.attr("id"),o=n.attr("class");var e=n.attr("src");jQuery.get(e,function(e){let t=$(e).find("svg");void 0!==r&&(t=t.attr("id",r)),void 0!==o&&(t=t.attr("class",o+" replaced-svg")),t=t.removeAttr("xmlns:a"),n.replaceWith(t)},"xml")})}function renderSidebar(){var e=$("#sidetoggle .sidetoc")[0];const t=$("footer"),r=$(".sidetoc");if(void 0===e)!function(){let i=$("meta[property='docfx\\:tocrel']").attr("content");i&&(i=i.replace(/\\/g,"/"),$("#sidetoc").load(i+" #sidetoggle > div",function(){var e=i.lastIndexOf("/");let r="";-1<e&&(r=i.substr(0,e+1));const o=getAbsolutePath(window.location.pathname);$("#sidetoc").find("a[href]").each(function(e,t){var n=$(t).attr("href");isRelativePath(n)&&(n=r+n,$(t).attr("href",n)),getAbsolutePath(t.href)===o&&$(t).addClass(active),$(t).breakWord()}),renderSidebar();const t=$("body"),n=$("#search-results");0!==n.length&&($("#search").show(),t.trigger("searchEvent")),t.on("mouseup",function(e){n.is(e.target)||0!==n.has(e.target).length||n.hide()})}))}();else{$(".toc .nav > li > .expand-stub").on("click",function(e){$(e.target).parent().toggleClass(expanded)}),$(".toc .nav > li > .expand-stub + a:not([href])").on("click",function(e){$(e.target).parent().toggleClass(expanded)}),$("#toc_filter_input").on("input",function(){const s=this.value;if(""!==s){const e=$("#toc li>a");e.filter(function(e,t){return 0===$(t).siblings().length}).each(function(e,t){let n=$(t).attr("title");const r=$(t).parent();var o,i=r.parents("ul>li");for(let e=0;e<i.length;e++){var a=$(i[e]).children("a").attr("title");a&&(n=a+"."+n)}o=n,!(t=s)||o&&-1<o.toLowerCase().indexOf(t.toLowerCase())?(r.addClass(show),r.removeClass(hide)):(r.addClass(hide),r.removeClass(show))}),e.filter(function(e,t){return 0<$(t).siblings().length}).each(function(e,t){const n=$(t).parent();0<n.find("li.show").length?(n.addClass(show),n.addClass(filtered),n.removeClass(hide)):(n.addClass(hide),n.removeClass(show),n.removeClass(filtered))})}else $("#toc li").removeClass(filtered).removeClass(hide)}),t.is(":visible")&&r.addClass("shiftup");let n=0;$("#toc a.active").parents("li").each(function(e,t){$(t).addClass(active).addClass(expanded),$(t).children("a").addClass(active),n+=$(t).position().top}),r.scrollTop(n-50),t.is(":visible")&&r.addClass("shiftup"),renderBreadcrumb()}}function renderTabs(){const i={id:"data-bi-id",name:"data-bi-name",type:"data-bi-type"},a=(Object.defineProperty(e.prototype,"tabIds",{get:function(){return this.a.getAttribute("data-tab").split(" ")},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"condition",{get:function(){return this.a.getAttribute("data-condition")},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"visible",{get:function(){return!this.li.hasAttribute("hidden")},set:function(e){e?(this.li.removeAttribute("hidden"),this.li.removeAttribute("aria-hidden")):(this.li.setAttribute("hidden","hidden"),this.li.setAttribute("aria-hidden","true"))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"selected",{get:function(){return!this.section.hasAttribute("hidden")},set:function(e){e?(this.a.setAttribute("aria-selected","true"),this.a.tabIndex=0,this.section.removeAttribute("hidden"),this.section.removeAttribute("aria-hidden")):(this.a.setAttribute("aria-selected","false"),this.a.tabIndex=-1,this.section.setAttribute("hidden","hidden"),this.section.setAttribute("aria-hidden","true"))},enumerable:!0,configurable:!0}),e.prototype.focus=function(){this.a.focus()},e);function e(e,t,n){this.li=e,this.a=t,this.section=n}function l(e,o){let r=!1,i;for(let t=0,n=e.tabs;t<n.length;t++){let e=n[t];e.visible=null===e.condition||-1!==o.selectedTabs.indexOf(e.condition),e.visible&&(i=i||e),e.selected=e.visible&&d(o.selectedTabs,e.tabIds),r=r||e.selected}if(!r){for(let n=0,r=e.tabs;n<r.length;n++)for(let e=0,t=r[n].tabIds;e<t.length;e++){var a=t[e],a=o.selectedTabs.indexOf(a);-1!==a&&o.selectedTabs.splice(a,1)}const t=i;t.selected=!0,o.selectedTabs.push(t.tabIds[0])}}function c(e){const t=s();t.tabs=e.selectedTabs.join();e=location.protocol+"//"+location.host+location.pathname+"?"+function(e){const t=[];for(var n in e)e.hasOwnProperty(n)&&""!==e[n]&&null!==e[n]&&void 0!==e[n]&&t.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return t.join("&")}(t)+location.hash;location.href!==e&&history.replaceState({},document.title,e)}function s(e){var t;const n=/\+/g,r=/([^&=]+)=?([^&]*)/g;function o(e){return decodeURIComponent(e.replace(n," "))}e=(e=void 0===e?"":e).substring(1);const i={};for(;t=r.exec(e);)i[o(t[1])]=o(t[2]);return i}function d(n,r){for(let e=0,t=n;e<t.length;e++){var o=t[e];for(let e=0,t=r;e<t.length;e++)if(o===t[e])return!0}return!1}!function(e){const t=function(){const e=s(),t=e.tabs;return void 0!==t&&""!==t?t.split(","):[]}(),n=e.querySelectorAll(".tabGroup"),r={groups:[],selectedTabs:[]};for(let e=0;e<n.length;e++){var o=function(e){const t={independent:e.hasAttribute("data-tab-group-independent"),tabs:[]};let n=e.firstElementChild.firstElementChild;for(;n;){const o=n.firstElementChild;o.setAttribute(i.name,"tab");var r=o.getAttribute("data-tab").replace(/\+/g," ");o.setAttribute("data-tab",r);r=e.querySelector('[id="'+o.getAttribute("aria-controls")+'"]'),r=new a(n,o,r);t.tabs.push(r),n=n.nextElementSibling}return e.setAttribute(i.name,"tab-group"),e.tabGroup=t,t}(n.item(e));o.independent||(l(o,r),r.groups.push(o))}e.addEventListener("click",function(e){return function(e,n){const t=function(e){if(!(e.target instanceof HTMLElement))return null;const t=e.target.closest("a[data-tab]");if(null===t)return null;var n=t.getAttribute("data-tab").split(" "),e=t.parentElement.parentElement.parentElement.tabGroup;return void 0!==e?{tabIds:n,group:e,anchor:t}:null}(e);if(null!==t){e.preventDefault(),t.anchor.href="javascript:",setTimeout(function(){return t.anchor.href="#"+t.anchor.getAttribute("aria-controls")});const i=t.tabIds,a=t.group;var r=t.anchor.getBoundingClientRect().top;if(a.independent)for(let e=0,t=a.tabs;e<t.length;e++){const s=t[e];s.selected=d(s.tabIds,i)}else{if(d(n.selectedTabs,i))return;var o=a.tabs.filter(function(e){return e.selected})[0].tabIds[0];n.selectedTabs.splice(n.selectedTabs.indexOf(o),1,i[0]);for(let e=0,t=n.groups;e<t.length;e++)l(t[e],n);c(n)}o=t.anchor.getBoundingClientRect().top;o!==r&&e instanceof MouseEvent&&window.scrollTo(0,window.pageYOffset+o-r)}}(e,r)}),0!==r.groups.length&&(function(n){for(let e=0,t=n;e<t.length;e++){var r=t[e];const o=document.querySelector('.tabGroup > ul > li > a[data-tab="'+r+'"]:not([hidden])');if(null===o)return;o.dispatchEvent(new CustomEvent("click",{bubbles:!0}))}}(t),c(r)),r}(document.body)}function renderTables(){$("table").addClass("table table-bordered table-striped table-condensed").wrap('<div class="table-responsive"></div>')}function highlight(){$("pre code").each(function(e,t){hljs.highlightBlock(t)}),$("pre code[highlight-lines]").each(function(e,t){if(""!==t.innerHTML){const o=t.innerHTML.split("\n"),i=t.getAttribute("highlight-lines");if(i){let e=i.split(",");var n;for(n of e.map(Number)){var r=n.match(/^(\d+)\-(\d+)?$/);let e=0,t=0;if(r)e=+r[1],t=+r[2],(isNaN(t)||t>o.length)&&(t=o.length);else{if(isNaN(n))continue;e=+n,t=e}e<=0||t<=0||e>t||e>o.length||(o[e-1]='<span class="line-highlight">'+o[e-1],o[t-1]=o[t-1]+"</span>")}t.innerHTML=o.join("\n")}}})}function enableSearch(){let i;const a=$("meta[property='docfx\\:rel']").attr("content");if(void 0!==a)try{var e=new Worker(a+"styles/search-worker.js");e||window.worker?function(e){const t=$.Deferred();e.onmessage=function(e){switch(e.data.e){case"index-ready":t.resolve();break;case"query-ready":o(e.data.d)}},t.promise().done(function(){$("body").on("query-ready",function(){n(e,i)}),n(e,i)})}(e):function(){console.log("using local search");const n=lunr(function(){this.ref("href"),this.field("title",{boost:50}),this.field("keywords",{boost:20})});lunr.tokenizer.seperator=/[\s\-\.]+/;let r={};const e=new XMLHttpRequest,t=a+"index.json";t&&(e.open("GET",t),e.onload=function(){if(200===this.status)for(var e in r=JSON.parse(this.responseText),r)r.hasOwnProperty(e)&&n.add(r[e])},e.send());$("body").on("queryReady",function(){const e=n.search(i),t=[];e.forEach(function(e){e=r[e.ref];t.push({href:e.href,title:e.title,keywords:e.keywords})}),o(t)})}(),t(),$(window).on("resize",()=>t()),$(document).on("click",".navbar-collapse.in",function(e){$(e.target).is("a")&&$(this).collapse(hide)}),function(){const e=url("?q");if(null!=e){const t=e.split("%20");t.forEach(function(e){""!==e&&($(".data-searchable *").mark(e),$("article *").mark(e))})}}(),$("body").on("searchEvent",function(){$("#search-results>.sr-items").html("<p>No results found</p>");const e=$("#search-query");e.on("input",function(e){return"Enter"!==e.key}),e.on("keyup",function(e){$("#search-results").show(),i=`${e.target.value}`,$("body").trigger("query-ready"),$("#search-results>.search-list").text('Search Results for "'+i+'"')}).off("keydown")})}catch(e){console.error(e)}function t(){const e=$("#autocollapse");null===e.height()&&setTimeout(t,300),e.removeClass(collapsed),60<e.height()&&e.addClass(collapsed)}function n(e,t){t&&3<=t.length?e.postMessage({q:`${t}*`}):e.postMessage({q:""})}function o(e){0===e.length?$("#search-results>.sr-items").html("<p>No results found</p>"):($("#search-results>.sr-items").empty().append(e.slice(0,20).map(function(e){!function(e,t){const n=e.split(/\/+/);var r=t.split(/\/+/);let o=n.length-1;const i=[];for(let e=0;e<r.length;e++)".."===r[e]?o--:"."!==r[e]&&i.push(r[e]);n.slice(0,o).concat(i).join("/")}(window.location.href,a+e.href);var t,n=a+e.href+"?q="+i,r=e.title,e=(t=e.keywords,e=i.split(/\s+/g),50<(e=t.indexOf(e[0]))?"..."+t.slice(e-50,e+50)+"...":e<=50?t.slice(0,e+50)+"...":void 0);const o=$("<a>").attr("class","sr-item").attr("href",n);r=$("<div>").attr("class","item-title").text(r),e=$("<div>").attr("class","item-brief").text(e);return o.append(r).append(e),o})),i.split(/\s+/).forEach(function(e){""!==e&&(e=e.replace(/\*/g,""),$("#search-results>.sr-items *").mark(e))}))}}function getAbsolutePath(e){e=$('<a href="'+e+'"></a>')[0];return e.host+e.pathname}function isRelativePath(e){return void 0!==e&&""!==e&&"/"!==e[0]&&!isAbsolutePath(e)}function isAbsolutePath(e){return/^(?:[a-z]+:)?\/\//i.test(e)}function getDirectory(e){if(!e)return"";var t=e.lastIndexOf("/");return-1===t?"":-1<t?e.substr(0,t):void 0}function formList(e,t){let c=1;return function t(n,r){if(!n||!n.items)return null;const o=n.items.length;if(0===o)return null;let i='<ul class="level'+c+" "+(r||"")+'">';c++;for(let e=0;e<o;e++){const a=n.items[e],s=a.href,l=a.name;l&&(i+=s?'<li><a href="'+s+'">'+l+"</a>":"<li>"+l,i+=t(a,r)||"",i+="</li>")}i+="</ul>";return i}({items:e},[].concat(t).join(" "))}function breakPlainText(e){return e&&e.replace(/([a-z])([A-Z])|(\.)(\w)/g,"$1$3<wbr>$2$4")}function workAroundFixedHeaderForAnchors(){const i=!(!history||!history.pushState),a=/^#[^ ]+$/;function e(e,t){let n,r,o;return a.test(e)&&(n=document.getElementById(e.slice(1)),n&&(r=n.getBoundingClientRect(),o=window.pageYOffset+r.top-$("header").first().height(),window.scrollTo(window.pageXOffset,o),i&&t&&history.pushState({},document.title,location.pathname+e)),n)}function t(){e(window.location.hash,!1)}$(window).on("hashchange",()=>t()),t(),$(document).on("ready",function(){$("body").scrollspy({offset:150})})}function breakText(){$(".xref").addClass("text-break");const e=$(".text-break");e.each(function(){$(this).breakWord()})}workAroundFixedHeaderForAnchors(),highlight(),enableSearch(),renderTables(),renderAlerts(),renderLinks(),renderSidebar(),renderAffix(),iframed?fixNavbarSpacing():(renderNavbar(),renderLogo()),renderFooter(),breakText(),renderTabs(),updateLogo(),window.refresh=function(e){void 0!==e&&void 0!==e.content||console.error("Null Argument"),$("article.content").html(e.content),highlight(),renderTables(),renderAlerts(),renderAffix(),renderTabs()},$(document).on("wordpressMenuHasLoaded",function(){const t=window.location.pathname;var n="/docs/articles/";const e=document.getElementById("menu-menu-principal"),r=e.getElementsByTagName("a");for(let e=0;e<r.length;e++)r[e].href.includes(n)&&t.includes(n)&&!r[e].href.includes("#")&&$(r[e]).addClass("activepath");const o=window.location.search;if(o){const a=o.split("=");var i=a.slice(-1)[0];$("#search-query").val(decodeURI(i))}}),anchors.options={placement:"right",visible:"hover",icon:"#"},anchors.add("article h2:not(.no-anchor), article h3:not(.no-anchor), article h4:not(.no-anchor)"),$.fn.breakWord=function(){return this.html()===this.text()&&this.html(function(e,t){return breakPlainText(t)}),this};