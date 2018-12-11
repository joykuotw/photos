// Welcome page as intro

import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';

import './WelcomePage.scss';
import imgGeovation from '../images/logo.svg';

const introSteps = [
  {
    content: 'Use this app to contribute directly to our interactive map'
  },
  {
    content: 'Take a photo and upload it'
  },
  {
    content: 'View images on our map'
  }
];

class WelcomePage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      activeStep: 0
    };
  }

  handleNext = () => {
    this.setState(({
      activeStep: this.state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(({
      activeStep: this.state.activeStep - 1,
    }));
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
    console.log("activeStep: ", activeStep);
  };

  render() {
    const { activeStep } = this.state;
    const maxSteps = introSteps.length;

    return (
      <div className="geovation-welcome">
        <Typography gutterBottom align="center" variant="h5" className="welcome-title">
          Welcome to Geovetion Photos
        </Typography>
        <div className="swiper">
          <SwipeableViews
            axis={'x'}
            index={activeStep}
            onChangeIndex={(activeStep) => this.handleStepChange(activeStep)}
            enableMouseEvents
          >
            { introSteps.map((step, index) => (
              <div key={index}>
                <img className="img" src={imgGeovation} alt={"geovation"} />
                { Math.abs(activeStep - index) <= 2 ? (
                  <Typography align="center" component="p" className="welcome-content">
                    {step.content}
                  </Typography>
                ) : null}
              </div>
            ))}
          </SwipeableViews>
        </div>
        <MobileStepper
          steps={maxSteps}
          position="bottom"
          activeStep={activeStep}
          backButton={
            <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
              <KeyboardArrowLeft />
              Back
            </Button>
          }
          nextButton={
            <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
              {this.state.activeStep === 2? "Done" : "Next"}
              <KeyboardArrowRight />
            </Button>
          }
        />
      </div>
    );
  }
}

WelcomePage.propTypes = {
  handleNext: PropTypes.func,
  handleBack: PropTypes.func
};

export default WelcomePage;
