
const toggle = document.getElementById('menu-toggle');
const nav = document.querySelector('nav ul');

toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});


document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
