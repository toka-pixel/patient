import { Link } from "react-router-dom";
import  "./Navbar.scss";

const Navbar=()=>{

    return(
        <header className='header'>
            <h1>Patient List</h1>
            <nav>
                <ul>
                  <li><Link to='/' >Patient List</Link></li>
                  <li><Link to='/add-new-patient' >Add Patient</Link></li>
                </ul>
            </nav>
        </header>
    )

}


export default Navbar;