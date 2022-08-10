import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import './Associations.css';
import brand from '../assets/Section/Alberta Sand and Gravel Association.png';
import brand2 from '../assets/Section/Florida Transportaiton Builders Association - Logo.png';
import brand3 from '../assets/Section/napa 1.png';
import brand4 from '../assets/Section/National Stone, Sand _ Gravel Association - Logo.png';
import brand5 from '../assets/Section/Ohio Aggregates _ Industrial Minerals Association - Logo 1 (1).png';
import brand6 from '../assets/Section/Ontario Stone, Sand _ Gravel Association - Logo 1.png';
import brand7 from '../assets/Section/Pit _ Quarry - Logo 1.png';
import brand8 from '../assets/Section/Women of Asphalt - Logo 1.png';
import Assoc from './Assoc';

function Associations(){
    return(
        <section>
            <div className='d-flex justify-content-center my-5'>
                <div className='text-center block-associations mx-4'>
                    <h2>Associations Section Title Here</h2>
                    <p>Gain visibility into your entire fleet without all the texts and calls. Tread’s software gets you valuable data and insights for you to make informed decisions. Share the data with one click to customers and third-parties in an instant.</p>
                </div>
            </div>

            <div className='container-fluid block-imgAssoc px-0'>
                <div className='d-flex justify-content-center my-5'>
                    <div className='img-brand responsive'>
                        <img width='183px' height='42px' src={brand}/>{/* asga */}
                    </div>
                    <div className='img-brand responsive'>
                        <img width='63px' height='63' src={brand2}/>{/* gun */}
                    </div>
                    <div className='img-brand responsive '>
                        <img width='125px' height='79px' src={brand3}/>{/* napa */}
                    </div>
                    <div className='img-brand responsive'>
                        <img width='99px' height='63px' src={brand4}/>{/* NSSGA */}
                    </div>
                    <div className='img-brand responsive'>
                        <img width='197px' height='41px' src={brand5}/>{/* OAIMA */}
                    </div>
                    <div className='img-brand responsive'>
                        <img width='101px' height='63px' src={brand6}/>{/* OSSGA */}
                    </div>
                </div>

                <div className='ocultar'>
                    <Assoc/>
                    <div className='d-flex justify-content-center next my-3'>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Associations;