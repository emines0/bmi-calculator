import React from 'react';

const Imperial = () => {
  return (
    <form id="imperial-container">
      <div className="row">
        <div className="form-group">
          <label htmlFor="height-ft">Height</label>
          <input type="text" name="height-ft" id="height-ft" />
          <p className="height-ft">ft</p>
        </div>

        <div className="form-group">
          <input type="text" name="height-in" id="height-in" />
          <p className="height-in">in</p>
        </div>
      </div>

      <div className="row">
        <div className="form-group">
          <label htmlFor="weight-st">Weight</label>
          <input type="text" name="weight-st" id="weight-st" />
          <p className="weight-st">st</p>
        </div>
        <div className="form-group">
          <input type="text" name="weight-lbs" id="weight-lbs" />
          <p className="weight-lbs">lbs</p>
        </div>
      </div>
    </form>
  );
};

export default Imperial;
