import React from 'react';
import PropTypes from 'prop-types';
import { getWidthAsPercentOfTotalWidth } from '../../utils/percentUtils';

class ProgressBar extends React.Component {
  getColor = (percent) => {
    if (this.props.percent === 100) return 'green';
    return this.props.percent > 50 ? 'lightgreen' : 'red';
  }

  
  getWidthAsPercentOfTotalWidth = () => {
    return getWidthAsPercentOfTotalWidth(this.props.percent, this.props.width);
  }
  // getWidthAsPercentOfTotalWidth = () => {
  //  return parseInt(this.props.width * (this.props.percent / 100), 10);
  // }

  render() {
    const {percent, width, height} = this.props;
    return (
      <div data-testid="progress-bar" style={{border: 'solid 1px lightgray', width: width}}>
        <div  style={{         
          width: this.getWidthAsPercentOfTotalWidth(),
          height,
          backgroundColor: this.getColor(percent)
        }} />
      </div>
    );
  }
}

ProgressBar.propTypes = {
  /** Percent of progress completed */
  percent: PropTypes.number.isRequired,

  /** Bar width */
  width: PropTypes.number.isRequired,

  /** Bar height */
  height: PropTypes.number
};

ProgressBar.defaultProps = {
  height: 5
};

export default ProgressBar;