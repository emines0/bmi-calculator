// import { GlobalContext } from '../../context/context';

const Metric = () => {
  return (
    <form id="metric-container">
      <div className="form-group">
        <label htmlFor="height">Height</label>
        <input type="text" name="height" id="height" />
        <p className="height">cm</p>
      </div>

      <div className="form-group">
        <label htmlFor="weight">Weight</label>
        <input type="text" name="weight" id="weight" />
        <p className="weight">kg</p>
      </div>
    </form>
  );
};

export default Metric;
