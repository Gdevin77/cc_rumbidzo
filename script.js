// Simple interactions: mobile menu + contact form demo
(function(){
// Mobile menu
const hamb = document.querySelector('.hamb');
const nav = document.querySelector('.mainnav');
hamb?.addEventListener('click', ()=>{
if(!nav) return;
nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex';
nav.style.flexDirection = 'column';
nav.style.background = 'linear-gradient(90deg, rgba(0,119,204,0.95), rgba(0,163,255,0.95))';
nav.style.position = 'absolute';
nav.style.right = '10px';
nav.style.top = '64px';
nav.style.padding = '12px';
nav.style.borderRadius = '8px';
});


// Contact form demo
window.submitContact = function(e){
e.preventDefault();
const name = document.getElementById('name')?.value || '';
const email = document.getElementById('email')?.value || '';
const message = document.getElementById('message')?.value || '';
const status = document.getElementById('status');
if(!name || !email || !message){
if(status) status.textContent = 'Please complete all fields.';
return false;
}
if(status) status.textContent = 'Thanks! We received your request (demo).';
setTimeout(()=>{ document.querySelector('.book-form')?.reset(); },800);
return false;
}
})();

window.addEventListener('scroll', () => {
  const maxFade = 300; // how many pixels to scroll before it's gone
  const scrollY = window.scrollY;

  let opacity = 1 - scrollY / maxFade;
  if (opacity < 0) opacity = 0;

  document.documentElement.style.setProperty('--hero-opacity', opacity);
});


const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links")

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});