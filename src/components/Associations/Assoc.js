import React from "react";
import './Associations.css';
import brand from '../assets/Section/Alberta Sand and Gravel Association.png';
import brand2 from '../assets/Section/Florida Transportaiton Builders Association - Logo.png';
import brand3 from '../assets/Section/napa 1.png';
import brand4 from '../assets/Section/National Stone, Sand _ Gravel Association - Logo.png';

class Assoc extends React.Component {
    state = {
        active: true,
        active2: false,
        active3: false,
        active4: false,
    };

    handleClick = () => {
      this.setState({
        active: true,
        active2: false,
        active3: false,
        active4: false
    });
    };

    handleClick2 = () => {
      this.setState({
        active: false,
        active2: true,
        active3: false,
        active4: false,
    });
    };
    handleClick3 = () => {
      this.setState({
        active: false,
        active2: false,
        active3: true,
        active4: false,
    });
    };
    handleClick4 = () => {
      this.setState({
        active: false,
        active2: false,
        active3: false,
        active4: true,
    });
    };


  
    render() {
      return (
        <div>
          <div className="d-flex justify-content-center">
            <div className={this.state.active ? "" : "hidden"}>
                <div className="block-img">
                    <img src={brand}/>
                </div>
            </div>

            <div className={this.state.active2 ? "" : "hidden"}>
                <div className="block-img img-responsive mb-5">
                    <img src={brand2}/>
                </div>
            </div>
            
            <div className={this.state.active3 ? "" : "hidden"}>
                <div className="block-img img-responsive">
                    <img src={brand3}/>
                </div>
            </div>
            
            <div className={this.state.active4 ? "" : "hidden"}>
                <div className="block-img img-responsive">
                    <img src={brand4}/>
                </div>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <div onClick={this.handleClick} className={this.state.active?"dot on": "dot"}></div>
            <div onClick={this.handleClick2} className={this.state.active2?"dot on": "dot"}></div>
            <div onClick={this.handleClick3} className={this.state.active3?"dot on": "dot"}></div>
            <div onClick={this.handleClick4} className={this.state.active4?"dot on": "dot"}></div>
          </div>
        </div>
      );
    }
}

export default Assoc