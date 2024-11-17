document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

document.querySelector('.hamburger').addEventListener('click', function () {
  document.querySelector('.navbar').classList.toggle('active');
});



window.addEventListener("scroll", function () {
  const aboutSection = document.getElementById('about');
  if (aboutSection.getBoundingClientRect().top <= window.innerHeight * 0.8) {
    aboutSection.classList.add('active');
  }

  const projectsSection = document.getElementById('projects');
  if (projectsSection.getBoundingClientRect().top <= window.innerHeight * 0.8) {
    projectsSection.classList.add('active');
  }

  const contactSection = document.getElementById('contact');
  if (contactSection.getBoundingClientRect().top <= window.innerHeight * 0.8) {
    contactSection.classList.add('active');
  }
});



const buttons = document.querySelectorAll('.about-btn');
const aboutDetails = document.querySelectorAll('.about-details');



function changeContent(event) {
  buttons.forEach(btn => btn.classList.remove('active'));
  aboutDetails.forEach(detail => detail.classList.remove('active'));

  const contentId = event.target.getAttribute('data-content');
  document.getElementById(contentId).classList.add('active');
  event.target.classList.add('active');
}

buttons.forEach(button => {
  button.addEventListener('click', changeContent);
});


