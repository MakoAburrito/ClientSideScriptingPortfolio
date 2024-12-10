document.addEventListener("DOMContentLoaded", function() {
// Array to store navigation data [page, link]
const pages = [
    ['Home', 'index.html'],
    ['Gallery', 'gallery.html'],
    ['About Me', 'aboutme.html'],
    ['Contact Me', 'contactme.html'],
    ['My Page', 'mypage.html']
];

// Function to generate navigation
function generateNavigation(currentPage) {
    let navHTML = `
    <a class="logo-nav" href ="index.html">
      <img src="images/Blue-Desktop-Wallpaper.jpg" alt="Logo" class="logo">
      <p>Melissa De Jesus</p>
    </a>    
    `; 
    navHTML += '<ul class ="Nav-item">';
    pages.forEach(page => {
        if (page[1] === currentPage) {
            navHTML += `<li><strong>${page[0]}</strong></li>`;
        } else {
            navHTML += `<li><a class ="hover-target" href="${page[1]}">${page[0]}</a></li>`;
        }
    });
    navHTML += '</ul>';
    document.getElementById('navigation').innerHTML = navHTML;
}
// Function to generate footer
function generateFooter() {
  let footerHTML = `
  <div class="footer-links">
    <p>&copy; 2024 My Portfolio</p>
    <p><a href="wireframes.html">Wireframes</a> | <a href="comments.html">Comments</a></p>
  </div>
  `;
  
  footerHTML += `
    <div class="footer-container">
      
      <!-- Newsletter Subscription Card -->
      <div class="footer-card">
        <h3>Stay Connected to Our Newsletter</h3>
        <p>Get the latest updates and exclusive content to help educate you on what we do best.</p>
        <form>
          <input type="email" placeholder="Enter your email" required class="newsletter-input">
          <button type="submit" class="btn-subscribe">Subscribe</button>
        </form>
      </div>

      <!-- Contact Information Card -->
      <div class="footer-card">
          <div class ="contact-info">
              <h3>Contact Information</h3>
              <p><strong>Address:</strong> 3501 Davie Rd, Davie, FL 33314</p>
              <p><strong>Email:</strong> info@browardcollege.edu</p>
              <p><strong>Phone:</strong> +1 (954) 201-7350</p>
          </div>
      </div>

      <!-- Social Media Links Card -->
      <div class="footer-card">
        <h3>Follow Us</h3>
        <div class="social-links">
          <a href="#" class="social-link facebook"> <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png" alt="Facebook" class="social-icon"></a>
          <a href="#" class="social-link twitter"><img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" class="social-icon"></a>
          <a href="#" class="social-link instagram"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" class="social-icon"></a>
        </div>
      </div>
    </div>
  `;
  footerHTML += `
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14312.51293119343!2d-80.233333!3d26.081389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9abfa00c91c83%3A0xf5f0e8dd74a4d16a!2sBroward%20College%20-%20A.%20Hugh%20Adams%20Central%20Campus!5e0!3m2!1sen!2sus!4v1694878129829!5m2!1sen!2sus" 
      width="100%" 
      height="200" 
      style="border:0; margin-top: 10px;" 
      allowfullscreen="" 
      loading="lazy">
    </iframe>
  `;
  document.getElementById('footer').innerHTML = footerHTML;
}

// Call the functions on each page load
generateNavigation(window.location.pathname.split("/").pop());
generateFooter();

//creating a custom cursor
/*references: https://www.freecodecamp.org/news/how-to-make-a-custom-mouse-cursor-with-css-and-javascript/
               https://codepen.io/ntenebruso/pen/QWLzVjY
  video references:
  https://www.youtube.com/watch?v=rfpRZ2t_BrQ
*/
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.custom-cursor');
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

const cursor = document.querySelector('.custom-cursor');
if (!cursor) {
    console.error('Custom cursor element not found in the DOM.');
    return;
} // testing for the cursor.

let cursorX = 0, cursorY = 0;
let mouseX = 0, mouseY = 0;
const speed = 0.1; 

function animateCursor() {
    cursorX += (mouseX - cursorX) * speed;
    cursorY += (mouseY - cursorY) * speed;

    cursor.style.transform = `translate(-50%, -50%) translate(${cursorX}px, ${cursorY}px)`;

    requestAnimationFrame(animateCursor);
  }
  const textElements = document.querySelectorAll('.hover-target');
  textElements.forEach(el => {
      el.addEventListener('mouseover', () => {
          cursor.classList.add('hovered');
      });
      el.addEventListener('mouseleave', () => {
          cursor.classList.remove('hovered');
      });
  });

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

  animateCursor(); 
});
