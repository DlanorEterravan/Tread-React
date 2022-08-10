import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import truck from '../assets/image_11.jpg';
import './Header.css';

function header(){
    return(
        <div className='container-fluid p-0 mt-5'>
            <img src={truck} className="img-fluid img-truck"/>
            <div className='blocktxt glow p-3 m-0'>
                <div> {/* center txt */}
                    <h2 className='header-txt'>this is a truck for a test Tread</h2><br></br>
                    <p className='header-txt'>lorem asd kdasdindsa ciaimsldasldckcas asd asdn aksdas asjdnasjdn 
                    a dasd asdsad saaskdm a sdks.</p>
                    <button className="hvr-grow my-3 btn btn-success">Book My Free Demo</button>
                </div>
            </div>
        </div>
    );

}

export default header;