import mesto from '../../images/mesto.jpg';
import hotel from '../../images/hotelbooking.jpg';
import leftArrow from '../../images/button_left.png';
import rightArrow from '../../images/button_right.png';

function Portfolio() {
  return (
    <section className="portfolio">
    <p className="portfolio__pre-header" id="portfolio">my works</p>
    <div className="portfolio__header">
      <h2 className="portfolio__text">Portfolio</h2>
      <div className="portfolio__buttons">
        <button className="portfolio__button portfolio__button_type_left"><img src={leftArrow} alt="left arrow" /></button>
        <button className="portfolio__button portfolio__button_type_right"><img src={rightArrow} alt="right arrow" /></button>
      </div>
    </div>
      <nav>
        <ul className="portfolio__works">
          <li className="portfolio__work">
            <a href="#!" className="" target="_blank"><img src={mesto} alt="gitHub" /></a>
          </li>
          <li className="portfolio__work">
            <a href="#!" className="" target="_blank"><img src={hotel} alt="leetCode" /></a>
          </li>
        </ul>
      </nav>
  </section>
    );
}

export default Portfolio;