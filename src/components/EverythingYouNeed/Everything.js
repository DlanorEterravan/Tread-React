import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import './Everything.css';
import sect1 from '../assets/Materials.png'
import sect2 from '../assets/ing.png'
import sect3 from '../assets/paving.png'
import sect4 from '../assets/Fleets.png'
import ToggleComponent from './main';

function Everything(){
    return(
    <div className='container-fluid my-5'>
        <div className='sharp'>
            <div className='circle'>
                <div className='triangle'></div>
            </div>
        </div>
        <div className='text-center'>
            <h4>Solutions</h4>
            <h2>Everything You Need</h2>
        </div>

        <div className='d-flex justify-content-center mt-5'>
            <div className='block-solutions hidden'>
                <div className='position-relative text-center '>
                    <img className='img-sol1' src={sect1}/>
                    <div className='txt-sol1 text-center'>
                        <h3>Materials Producers</h3>
                        <p>asdasdasds asda sdsa asdasda asdasfas asdasd asdasfasdfasdasd</p>
                        <a className='see' href='#'>SEE MORE</a>
                    </div>
                </div>
            </div>

            <div className='block-solutions hidden'>
                <div className='position-relative text-center'>
                    <img className='img-sol2' src={sect2}/>
                    <div className='txt-sol2'>
                        <h3>Civil Contractors</h3>
                        <p>solutions asd asdas dasd asd sad asds as das das </p>
                        <a className='see' href='#'>SEE MORE</a>
                    </div>
                </div>
            </div>
            <div className='block-solutions hidden'>
                <div className='position-relative text-center'>
                    <img className='img-sol3' src={sect3}/>
                    <div className='txt-sol3'>
                        <h3>Paving</h3>
                        <p>solutions asd asdas dasd asd sad asds as das das </p>
                        <a className='see' href='#'>SEE MORE</a>
                    </div>
                </div>
            </div>

            <div className='block-solutions hidden'>
                <div className='position-relative text-center'>
                    <img className='img-sol4' src={sect4}/>
                    <div className='txt-sol4'>
                        <h3>Fleets</h3>
                        <p>solutions asd asdas dasd asd sad asds as das das </p>
                        <a className='see' href='#'>SEE MORE</a>
                    </div>
                </div>
            </div>
        </div>
        <div className='ocultar'>
            {/* Responsive */}
            <ToggleComponent/>

        </div>
    </div>
    );
};
export default Everything;