import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import './AboutOur.css';
import desktop from '../assets/Tread App/Desktop - Dispatch 1.png'
import mobile from '../assets/Tread App/Driver App - Live Job 1.png'
import notification1 from '../assets/Tread App/Driver App - New Job Notification 1.png'
import notification2 from '../assets/Tread App/Driver App - New Job Notification 2.png'


function AboutOur(){
    return(
        <section>
            <div className='container-fluid my-5'>
                <div className=''>
                    <div className='block position-relative'>
                        <img className='desktop' src={desktop}/>
                        <div className='border-mobile'></div>
                        <img className='mobile' src={mobile}/>
                        <img className='notification1' src={notification1}/>
                        <img className='notification2' src={notification2}/>
                    </div>
                    <div className='block-text position-relative'>
                        <div>
                            <p className='green'>About our products</p>
                            <h2>TEXT TITLE HERE</h2>
                            <p>asd asdaskd sakdsakdms scnascjanskadknas asdnasjd sad kasd kanskdnsa 
                                asdnsakdnkasndknsk jasn sajdnjasnd 
                            </p>
                            <br></br>
                            <p>aksdkasndkans kasndkasndknasdbnas jasbjabxjbasjbxjasbx jasbjansjdbasjbdas
                                jabsdjbasjdbasjbda jasbdjbasjx jbsajbdsajd  jabsjd mx jbascjnxkcan  asjbckzxjocjelf
                            </p>
                            <div className='bt-center'>
                                <button className='hvr-grow mt-4 btn btn-success'>Book My Free Demo</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default AboutOur;