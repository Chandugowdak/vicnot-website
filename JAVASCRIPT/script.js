const headerHTML = `
  <div class="container">
    <div class="logo"><a href="index.html">VICNOT</a></div>
    <nav>
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
      <a href="services.html">Services</a>
      
      <a href="contact.html">Contact</a>
    </nav>
  </div>
`;

const footerHTML = `
  <div class="footer-links">
    
    <div class="links">
      <a href="#">Careers</a>
      <a href="#">Blog</a>
      <a href="#">FAQs</a>
      <a href="#">Privacy Policy</a>
      <a href="#">Terms & Conditions</a>
      <a href="#">Sitemap</a>
    </div>
  </div>
  <div class="contact-info">
     support@vicnot.com &nbsp;|&nbsp;  +91-XXXXXXX &nbsp;|&nbsp;  Mysore
  </div>
  <div class="social-media">
  LinkedIn | Twitter | Instagram
  </div>
  <p>© 2025 Vicnot. All Rights Reserved.</p>
`;

window.addEventListener("DOMContentLoaded", () => {
  document.querySelector("header").innerHTML = headerHTML;
  document.querySelector("footer").innerHTML = footerHTML;
});
