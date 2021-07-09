(()=>{"use strict";function e(e){return parseInt(e-273.15)}const t=document.getElementById("degree");function n(e){const t="celsius"==e?"fahrenheit":"celsius",n=document.querySelectorAll(`.wi-${t}`);let i;if([,...i]=n,0==i.length)return;const c=document.querySelectorAll(".degree");i.map((t=>t.className=`wi wi-${e}`)),c.forEach((t=>t.innerText=function(e,t){return"fahrenheit"===e?parseInt(9*t/5+32):parseInt(5*(t-32)/9)}(e,t.innerText)))}async function i(n){const i=`https://api.openweathermap.org/data/2.5/weather?q=${n}&APPID=780876c77a2ffc68569ba8637b985e4f`;try{const n=await fetch(i,{mode:"cors"});!function(n){!1!==function({cod:e}){return"404"!=e||(alert("Invalid city name"),!1)}(n)&&(function({name:e}){document.getElementById("city").innerText=e}(n),function({timezone:e}){const t=document.getElementById("time"),n=new Date,i=n.getUTCHours()+e/3600,c=n.getUTCMinutes(),o=i>12?i-12:i,d=i>12?"PM":"AM",r=c<10?"0"+c:c;t.innerText=`${o}:${r} ${d}`}(n),function({main:{temp:n}}){t.innerText=e(n)}(n),function({weather:e}){document.getElementById("condition").innerText=e[0].main}(n),function({weather:e}){document.getElementById("conditionImg").className=`wi wi-owm-${e[0].id}`}(n),function({wind:e}){const t=document.getElementById("speed"),n=document.getElementById("gust"),i=document.getElementById("deg"),c=document.getElementById("degIcon");null==e.gust&&(e.gust="None"),t.innerText=e.speed,n.innerText=e.gust,i.innerText=e.deg,c.classList=`wi wi-wind towards-${e.deg}-deg`}(n),function({main:e}){const t=document.getElementById("humidity"),n=document.getElementById("pressure");t.innerText=e.humidity,n.innerText=e.pressure}(n),function({main:t}){const n=document.getElementById("min"),i=document.getElementById("max"),c=document.getElementById("feel");n.innerText=e(t.temp_min),i.innerText=e(t.temp_max),c.innerText=e(t.feels_like)}(n))}(await n.json())}catch(e){console.error(e)}}i("New York"),function(){const e=document.getElementById("search"),t=document.getElementById("celsius"),c=document.getElementById("fahrenheit");e.addEventListener("keypress",(t=>{"Enter"==t.key&&(t.preventDefault(),i(e.value),e.value="")})),t.addEventListener("click",(()=>n("celsius"))),c.addEventListener("click",(()=>n("fahrenheit")))}()})();