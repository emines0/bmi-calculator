import Calculator from './Calculator/Calculator';
import logo from '../assets/images/logo.svg';

const Hero = () => {
  return (
    <div className="hero">
      <div className="rectangle">
        <img
          className="game-icons-abstract"
          alt="Game icons abstract"
          src={logo}
        />
        <div className="frame">
          <h1>Body Mass Index Calculator</h1>
          <p>
            Better understand your weight in relation to your height using our
            body mass index (BM) calculator. While BMI is not the sole
            determinant of a healthy weight, it offers a valuable starting point
            to evaluate your overall health and well-being.
          </p>
        </div>
      </div>
      <Calculator />
    </div>
  );
};

export default Hero;
