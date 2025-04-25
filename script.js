document.addEventListener("DOMContentLoaded", () => {
  // Contact Form AJAX Submission
  const form = document.querySelector("form.contact-form");
  const modal = document.getElementById("thankYouModal");
  const closeBtn = modal?.querySelector(".close");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(form);

      fetch("https://formsubmit.co/ajax/7bd051cc62fc1c388866011815a9858d", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          modal.style.display = "block";
          form.reset();
        } else {
          alert("Error submitting form. Please try again.");
        }
      })
      .catch(error => {
        console.error("Submission error:", error);
        alert("Something went wrong. Please try again.");
      });
    });
  }

  // Close Modal without redirect
  if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    // Close modal when clicking outside of it
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  }


  document.getElementById('viewCvBtn').addEventListener('click', () => {
    document.getElementById('cvModal').style.display = 'block';
  });

  document.querySelector('.cv-modal .close').addEventListener('click', () => {
    document.getElementById('cvModal').style.display = 'none';
  });

  // Close modal when clicking outside of the content
  window.addEventListener('click', (e) => {
    if (e.target == document.getElementById('cvModal')) {
      document.getElementById('cvModal').style.display = 'none';
    }
  });

  // Smooth Scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Mobile Menu Toggle
  const hamburger = document.querySelector('.hamburger');
  const navbar = document.querySelector('.navbar');

  if (hamburger && navbar) {
    hamburger.addEventListener("click", () => {
      navbar.classList.toggle("active");
    });
  }

  // Close navbar when clicking outside (for mobile)
document.addEventListener("click", function (event) {
  const isClickInsideMenu = navbar.contains(event.target);
  const isClickOnHamburger = hamburger.contains(event.target);

  if (!isClickInsideMenu && !isClickOnHamburger && navbar.classList.contains("active")) {
    navbar.classList.remove("active");
  }
});


  // Home animation end background change
  const barsAnimation = document.querySelector('.bars-animation');
  const homeSection = document.getElementById('home');

  if (barsAnimation && homeSection) {
    barsAnimation.addEventListener("animationend", () => {
      homeSection.style.backgroundColor = '#1f242d';
    });
  }

  // Section Reveal on Scroll
  const revealOnScroll = () => {
    const sections = ['about', 'projects', 'contact'];
    sections.forEach(id => {
      const section = document.getElementById(id);
      if (section && section.getBoundingClientRect().top <= window.innerHeight * 0.8) {
        section.classList.add('active');
      }
    });
  };

  revealOnScroll(); // Initial reveal
  window.addEventListener("scroll", revealOnScroll);

// Select all nav links
const navLinks = document.querySelectorAll('.nav-links a');

// Function to highlight the active nav link
function highlightActiveLink() {
  const scrollY = window.scrollY + window.innerHeight / 2;  // Scroll position with mid-window height
  let activeFound = false;  // Flag to check if any link is active

  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));  // Get the section linked to the nav item
    if (section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      // Check if the section is in view
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(l => l.classList.remove('active'));  // Remove 'active' from all links
        link.classList.add('active');  // Add 'active' to the current link
        activeFound = true;
      }
    }
  });

  // If no section matched and you're near the top, activate "Home"
  if (!activeFound && window.scrollY < 100) {
    navLinks.forEach(l => l.classList.remove('active'));
    const homeLink = document.querySelector('.nav-links a[href="#home"]');
    if (homeLink) homeLink.classList.add('active');
  }
}

// Add event listeners for scroll and load
window.addEventListener("scroll", highlightActiveLink);
window.addEventListener("load", highlightActiveLink);


  // About Section Content Toggle
  const buttons = document.querySelectorAll('.about-btn');
  const aboutDetails = document.querySelectorAll('.about-details');

  buttons.forEach(button => {
    button.addEventListener('click', (event) => {
      buttons.forEach(btn => btn.classList.remove('active'));
      aboutDetails.forEach(detail => detail.classList.remove('active'));

      const contentId = event.target.getAttribute('data-content');
      const contentEl = document.getElementById(contentId);

      if (contentEl) {
        contentEl.classList.add('active');
        event.target.classList.add('active');
      }
    });
  });
});
