import {Link} from 'react-router-dom'
let Navbar =() =>{
    return (
        <div>
            <nav className='navbar navbar-dark bg-dark'>
                <Link to="/home" className='navbar-brand'>REACT REACT COMPONENT</Link>
                <div className='ml-auto'>
                    <ul className='navbar-nav'>
                        <li className='nav-list'><Link to="/user" className='nav-link'>Users</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default Navbar