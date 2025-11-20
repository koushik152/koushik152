// Small interactivity: year, smooth scroll, mobile menu toggle
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const href = a.getAttribute('href');
    if(href.length>1){
      e.preventDefault();
      const el = document.querySelector(href);
      if(el){
        window.scrollTo({top: el.getBoundingClientRect().top + window.scrollY - 64, behavior:'smooth'});
      }
      // close mobile nav if open
      if(window.innerWidth <= 680){
        document.getElementById('nav').style.display = 'none';
      }
    }
  });
});

// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
navToggle.addEventListener('click', ()=>{
  const nav = document.getElementById('nav');
  if(getComputedStyle(nav).display === 'flex' || getComputedStyle(nav).display === 'block'){
    nav.style.display = 'none';
  } else {
    nav.style.display = 'block';
    nav.style.flexDirection = 'column';
  }
});
