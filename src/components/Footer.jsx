import "./Footer.css";

function Footer() {
  return (
    <>
      {/* CONTACT SECTION */}
      <section className="contact-section section-alt">
        <div className="container contact-content">
          <h3 className="section-title">Get In Touch</h3>

          <p className="contact-text">
            I’m open to opportunities, internships, and collaborations.
            Feel free to reach out if you’d like to work together.
          </p>

          <div className="contact-links">
            <a href="mailto:sanjanadhumale8@gmail.com">sanjanadhumale8@gmail.com</a>
            <a href="https://github.com/SanjanaDhumale" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-content">
          <p>
            © {new Date().getFullYear()} Sanjana Dhumale · Full Stack Developer
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
