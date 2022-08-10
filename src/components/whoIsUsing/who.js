import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import './who.css';
import logo1 from '../assets/hi-peyson.png';
import logo2 from '../assets/hi-tomlinson.png';
import logo3 from '../assets/hi-true-haul.png';
import logo4 from '../assets/hi-trans-phos.png';
import BRAND from './Brands';

function Who() {
  return (
    <secion>
        <div className='container-fluid mt-5 pb-5'>
            <h2 className='text-center pt-5'>Who is using Tread?</h2>
            <div className='d-flex justify-content-center'>

                <div className='mx-4 my-5 block-img text-center responsiveImg'>
                    <img src={logo1}/>
                </div>
                <div className='mx-4 my-5 block-img text-center responsiveImg'>
                    <img src={logo2}/>
                </div>
                <div className='mx-4 my-5 block-img text-center responsiveImg'>
                    <img src={logo3}/>
                </div>
                <div className='mx-4 my-5 block-img text-center responsiveImg'>
                    <img src={logo4}/>
                </div>
                <div className='ocultar'>
                    <BRAND/>
                </div>
            </div>
        </div>
    </secion>
  );
}

export default Who;