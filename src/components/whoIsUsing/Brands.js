import React from "react";
import './who.css'
import logo1 from '../assets/hi-peyson.png'
import logo2 from '../assets/hi-tomlinson.png'
import logo3 from '../assets/hi-trans-phos.png'
import logo4 from '../assets/hi-true-haul.png'

class Brand extends React.Component {
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
                    <img src={logo1}/>
                </div>
            </div>

            <div className={this.state.active2 ? "" : "hidden"}>
                <div className="block-img img-responsive mb-5">
                    <img src={logo2}/>
                </div>
            </div>
            
            <div className={this.state.active3 ? "" : "hidden"}>
                <div className="block-img img-responsive">
                    <img src={logo3}/>
                </div>
            </div>
            
            <div className={this.state.active4 ? "" : "hidden"}>
                <div className="block-img img-responsive">
                    <img src={logo4}/>
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

export default Brand