import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import './Navbar.css';
import logo from '../assets/Gold - White.png';

function Navbar(){
    return(
        <header>
            <nav className='navbar navbar-expand-lg'>
                <div className='container-fluid justify-content-end mx-5'> 
                    <a className='hvr-grow nav-link mx-3' href='#'>Sign Up</a>
                </div>
            </nav>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid mx-5">
                <div className="me-auto mb-2 mb-lg-0">
                    <a className='hvr-grow' href='#'>
                        <img src={logo} className='logo-img'/>
                    </a>
                </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <div className='d-flex'> 
                        <ul className='nav navbar'>
                            <li className='nav-item'>
                                <a className='nav-link hvr-underline-reveal' href='#'>Something</a>
                            </li>
                            
                            <li className='nav-item'>
                                <a className='nav-link hvr-underline-reveal' href='#'>Something</a>
                            </li>
                            
                            <li className='nav-item'>
                                <a className='nav-link hvr-underline-reveal' href='#'>Something</a>
                            </li>

                            <li className='nav-item'>
                                <a className='nav-link hvr-underline-reveal' href='#'>Something</a>
                            </li>

                            <button className='hvr-grow btn btn-success'>Something</button>
                            
                            <li className="nav-item">
                                <p className="nav-link hvr-underline-reveal disabled m-0"><i class="fa-solid fa-phone"></i> 1-888-558-7323</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>

        </header>
    )
}

export default Navbar