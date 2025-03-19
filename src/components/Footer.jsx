function Footer() {
  return (
    <footer className="footer bg-dark text-white text-center p-3">
      <p>&copy; {new Date().getFullYear()} Thrive360. All rights reserved.</p>



      <div className="footer-center">
      <a href="#terms">Terms and Conditions</a>
      <span>•</span>
      <a href="#privacy">Privacy Policy</a>
      <span>•</span>
      <a href="#services">Terms of Service</a>
      </div>
      <div className="footer-right">
      <span>Develop by: Ationg,Ferlita & Sanchez, Chanlyn</span>
      
      </div>
  </footer>
  );
}

export default Footer;
