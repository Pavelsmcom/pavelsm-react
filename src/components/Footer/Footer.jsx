function Footer() {
  return (
    <footer className="footer" id="contact">
      <p className="footer__text"><a href="mailto:79168445519@yandex.ru" className="footer__link">79168445519@yandex.ru</a></p>
      <p className="footer__text"> <a href="tel:+9168445519" className="footer__link">+7 (916) 844-five-five-19</a></p>
      <p className="footer__text">©  {new Date().getFullYear()} - Pavel Melekhin</p>
    </footer>
    );
}

export default Footer;