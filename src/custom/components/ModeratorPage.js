import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import backButton from '../images/left-arrow.svg';
import './ModeratorPage.scss';

class ModeratorPage extends Component {

  closePage =() => {
    this.props.closePage();
  }

  render() {
    return (
      <div className='geovation-page3'>
        <div className='headline'>
          <Button onClick={this.closePage}>
            <img className='buttonback' src={backButton} alt=''/>
          </Button>
          <div className='headtext'>Page 3</div>
        </div>
      </div>
    );
  }
}

export default ModeratorPage;