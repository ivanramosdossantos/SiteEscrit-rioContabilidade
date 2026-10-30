const SERVICES = [
  ['01','Abertura de empresas','Transforme sua ideia em negócio com orientação para começar do jeito certo.','Abertura e regularização de empresas','↗'],
  ['02','Contabilidade empresarial','Mais organização e acompanhamento contábil para sua empresa seguir em frente.','Contabilidade empresarial','▤'],
  ['03','Imposto de Renda','Orientação no preparo e na entrega da sua declaração com tranquilidade.','Imposto de Renda Pessoa Física','◈'],
  ['04','Departamento pessoal','Apoio nas rotinas trabalhistas, folha de pagamento e obrigações da sua equipe.','Departamento pessoal e folha de pagamento','◎'],
  ['05','Planejamento tributário','Olhar estratégico sobre obrigações e oportunidades dentro da legislação.','Planejamento tributário','◇'],
  ['06','Consultoria contábil','Informações mais claras para apoiar a gestão e as decisões do seu negócio.','Consultoria contábil e financeira','⌁'],
  ['07','Encerramento de empresas','Suporte para os procedimentos de encerramento de atividades com segurança.','Encerramento de empresas','⊞'],
  ['08','Assessoria para MEI','Suporte nas principais rotinas e obrigações do microempreendedor individual.','Assessoria para MEI','✳']
];
const wa = (message) => 'https://wa.me/5546999299254?text=' + encodeURIComponent(message);
const defaultMessage = 'Olá! Conheci a Nezi & Ecker Contabilidade pelo site e gostaria de mais informações sobre os serviços.';
document.querySelectorAll('[data-whatsapp="geral"]').forEach(el => { el.href = wa(defaultMessage); });
document.getElementById('serviceGrid').innerHTML = SERVICES.map(([num,title,desc,topic,symbol]) => `<article class="service-card reveal"><div class="service-card-top"><span>${num} / SERVIÇO</span><span class="service-icon" aria-hidden="true">${symbol}</span></div><div class="service-card-bottom"><h3>${title}</h3><p>${desc}</p><a href="${wa('Olá! Gostaria de mais informações sobre ' + topic.toLowerCase() + '.')}" target="_blank" rel="noopener noreferrer" aria-label="Conversar sobre ${topic}">Saiba mais <span aria-hidden="true">↗</span></a></div></article>`).join('');
document.getElementById('year').textContent = new Date().getFullYear();
const header = document.getElementById('header');
const toggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');
function closeMenu(){ menu.classList.remove('open'); toggle.classList.remove('active'); toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Abrir menu'); }
toggle.addEventListener('click',()=>{ const open = !menu.classList.contains('open'); menu.classList.toggle('open',open);toggle.classList.toggle('active',open);toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Fechar menu':'Abrir menu'); });
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
const onScroll = () => header.classList.toggle('scrolled',window.scrollY>30);
window.addEventListener('scroll',onScroll,{passive:true}); onScroll();
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!prefersReduced && 'IntersectionObserver' in window){ const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}});},{threshold:0.08,rootMargin:'0px 0px -25px 0px'}); document.querySelectorAll('.reveal').forEach(el=>observer.observe(el)); } else document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));
const bubble = document.getElementById('waBubble');
const sessionKey='neziWaBubbleClosed';
let dismissed=false;try{dismissed=sessionStorage.getItem(sessionKey)==='1';}catch(e){}
if(!dismissed){let revealed=false;const showBubble=()=>{if(!revealed && window.scrollY>480){bubble.classList.add('show');revealed=true;window.removeEventListener('scroll',showBubble);}};window.addEventListener('scroll',showBubble,{passive:true});showBubble();}
document.getElementById('closeBubble').addEventListener('click',()=>{bubble.classList.remove('show');try{sessionStorage.setItem(sessionKey,'1');}catch(e){}});
