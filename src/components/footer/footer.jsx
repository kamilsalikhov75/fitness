import './footer.css';
import logo from '../../assets/logo.svg';

function Footer() {
  return (
    <footer className="footer">
      <a href="/index.html" className="footer__logo">
        <img src={logo} className="footer__img" />
      </a>
    </footer>
  );
}

export { Footer };
