import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import './Fleet.css';
import Locate from '../assets/Locate.png';

function Fleet(){
    return(
        <div className='container-fluid m-0'>
            <div>
                <div className='img-locate position-relative'>
                    <img className='m-0 img-locate' src={Locate}/>
                </div>
                
                <div className='block-text-fleet position-relative'>
                    <div>
                        <h2 className='mb-5'>Track your fleet in real-time</h2>
                        <p className='mb-5'>Gain visibility into your entire fleet without all the text and calls. Tread's
                            software gets you valuable data and insights for you to make informed
                            decision. Share the data with one click to customers and third-parties in an instants.
                        </p>
                        <button className='px-5 mb-5 btn btn-success'>Book My Free Demo</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Fleet;