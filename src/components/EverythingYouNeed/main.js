import React from "react";
import "./Everything.css"
import sect1 from '../assets/Materials.png'
import sect2 from '../assets/ing.png'
import sect3 from '../assets/paving.png'
import sect4 from '../assets/Fleets.png'

class ToggleComponent extends React.Component {
    state = {
        active: true,
        active2: false,
        active3: false
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
            <div className={this.state.active ? "" : "hidden"}>
                <div className='block-solutions'>
                    <div className='position-relative text-center'>
                        <img className='img-sol1' src={sect1}/>
                        <div className='txt-sol1 text-center'>
                            <h3>Materials Producers</h3>
                            <p>asdasdasds asda sdsa asdasda asdasfas asdasd asdasfasdfasdasd</p>
                            <a className='see' href='#'>SEE MORE</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={this.state.active2 ? "" : "hidden"}>
                <div className='block-solutions'>
                    <div className='position-relative text-center'>
                        <img className='img-sol1' src={sect2}/>
                        <div className='txt-sol1 text-center'>
                            <h3>Civil Contractors</h3>
                            <p>asdasdasds asda sdsa asdasda asdasfas asdasd asdasfasdfasdasd</p>
                            <a className='see' href='#'>SEE MORE</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={this.state.active3 ? "" : "hidden"}>
                <div className='block-solutions'>
                    <div className='position-relative text-center'>
                        <img className='img-sol1' src={sect3}/>
                        <div className='txt-sol1 text-center'>
                            <h3>Paving</h3>
                            <p>asdasdasds asda sdsa asdasda asdasfas asdasd asdasfasdfasdasd</p>
                            <a className='see' href='#'>SEE MORE</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={this.state.active4 ? "" : "hidden"}>
                <div className='block-solutions'>
                    <div className='position-relative text-center'>
                        <img className='img-sol1' src={sect4}/>
                        <div className='txt-sol1 text-center'>
                            <h3>Fleet</h3>
                            <p>asdasdasds asda sdsa asdasda asdasfas asdasd asdasfasdfasdasd</p>
                            <a className='see' href='#'>SEE MORE</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center my-5">
                <div onClick={this.handleClick} className={this.state.active? "dot on" : "dot"}></div>
                <div onClick={this.handleClick2} className={this.state.active2? "dot on" : "dot"}></div>
                <div onClick={this.handleClick3} className={this.state.active3?"dot on" : "dot"}></div>
                <div onClick={this.handleClick4} className={this.state.active4?"dot on" : "dot"}></div>
                
            </div>

        </div>
      );
    }
  }

export default ToggleComponent;