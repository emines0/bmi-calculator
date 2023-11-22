import { useContext } from 'react';
import GlobalContext from '../../context/context';
import Imperial from './Imperial';
import Metric from './Metric';
import MetricSuggestion from './MetricSuggestion';
import ImperialSuggestion from './ImperialSuggestion';

const Calculator = () => {
  const { units, setUnits } = useContext(GlobalContext);

  return (
    <div className="calculator">
      <h2>Enter your details below</h2>
      <div className="options">
        <div className="option-group">
          <label htmlFor="metric">Metric</label>
          <div className="radio-box">
            <input
              type="radio"
              name="units"
              id="metric"
              defaultChecked={true}
              onClick={() =>
                setUnits({ ...units, metric: true, imperial: false })
              }
            />
          </div>
        </div>
        <div className="option-group">
          <label htmlFor="imperial">Imperial</label>
          <div className="radio-box">
            <input
              type="radio"
              name="units"
              id="imperial"
              onClick={() =>
                setUnits({ ...units, metric: false, imperial: true })
              }
            />
          </div>
        </div>
      </div>
      {
        // If metric is selected, render the metric form, else render the imperial form
        units.metric ? <Metric /> : <Imperial />
      }
      <div className="results">
        <div className="results-content">
          <div className="bmi-results">
            <h4>Your BMI is...</h4>
            <p className="bmi-number">23.4</p>
          </div>
          <div className="bmi-suggestion">
            <p className="bmi-text">
              Your BMI suggests you’re a healthy weight. Your ideal weight is
              between
              {units.metric ? <MetricSuggestion /> : <ImperialSuggestion />}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
