const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('#navigation');
function closeMenu(){menu.setAttribute('aria-expanded','false');nav.classList.remove('open');}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
const services={edible:{title:'Edible Landscapes',copy:'A garden can nourish more than the senses. We explore ways to weave herbs, fruits and vegetables into beautiful, abundant spaces — shaped around your place and the way you want to live.'},outdoor:{title:'Meaningful Outdoor Spaces',copy:'A quiet morning with a cup of tea. A long table with the people you love. We imagine outdoor spaces around the moments that matter, using natural materials, layered planting and a thoughtful connection to the home.'},living:{title:'Biophilic Living',copy:'Bring the natural world into everyday life. Through light, living greenery, organic materials and connections between indoors and out, we explore spaces that invite you to feel more present and connected.'}};
const dialog=document.querySelector('#service-dialog');
document.querySelectorAll('[data-service]').forEach(b=>b.addEventListener('click',()=>{const s=services[b.dataset.service];document.querySelector('#dialog-title').textContent=s.title;document.querySelector('#dialog-copy').textContent=s.copy;dialog.showModal();}));
document.querySelectorAll('dialog').forEach(d=>{d.querySelector('.dialog-close').addEventListener('click',()=>d.close());d.addEventListener('click',e=>{if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close();}});});
document.querySelector('#dialog-contact').addEventListener('click',()=>dialog.close());
const contact=document.querySelector('#contact-dialog');document.querySelector('#contact-open').addEventListener('click',()=>contact.showModal());document.querySelector('.dialog-dismiss').addEventListener('click',()=>contact.close());
document.querySelector('#year').textContent=new Date().getFullYear();
