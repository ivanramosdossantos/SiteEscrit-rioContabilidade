const SERVICE_ICONS = ["<rect x=\"3\" y=\"7\" width=\"18\" height=\"14\" rx=\"2\"/><path d=\"M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18\"/>","<path d=\"M4 21h16M6 21V5l6-2 6 2v16M10 8h4M10 12h4M10 16h4\"/>","<rect x=\"5\" y=\"3\" width=\"14\" height=\"18\" rx=\"2\"/><path d=\"M9 8h6M9 12h6M9 16h3\"/>","<circle cx=\"9\" cy=\"8\" r=\"3\"/><path d=\"M3 20v-2a6 6 0 0 1 12 0v2M17 8h4M19 6v4M17 14h4M17 18h4\"/>","<path d=\"M3 17l6-6 4 4 8-9M15 6h6v6\"/>","<path d=\"M4 19V5M4 19h16M8 15l4-5 3 3 5-7\"/>","<path d=\"M3 6h18M8 6V4h8v2m3 0-1 15H6L5 6M10 10v7M14 10v7\"/>","<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"3\"/><path d=\"M7 12h10M12 7v10\"/>"];
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
document.getElementById('serviceGrid').innerHTML = SERVICES.map(([num,title,desc,topic,symbol], index) => `<article class="service-card reveal"><div class="service-card-top"><span>${num} / SERVIÇO</span><span class="service-icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="27" height="27" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round">${SERVICE_ICONS[index]}</svg></span></div><div class="service-card-bottom"><h3>${title}</h3><p>${desc}</p><a href="${wa('Olá! Gostaria de mais informações sobre ' + topic.toLowerCase() + '.')}" target="_blank" rel="noopener noreferrer" aria-label="Conversar sobre ${topic}">Saiba mais <span aria-hidden="true">↗</span></a></div></article>`).join('');
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
