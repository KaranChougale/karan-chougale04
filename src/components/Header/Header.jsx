import {Link} from 'react-router-dom'
const Header = () => {
    return(
        <>
          <header>
                <nav>
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/courses">Courses</Link>
                    <Link to="/contact">Contact Us</Link>
                    <Link to="/apply">Apply Now!</Link>
                </nav>         
        </header>
        </>
    )
}

export default Header;