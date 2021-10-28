import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <div id='nav-bar'>
            <Link className='nav' to='/homepage/:usersName'>
                <h3>Home</h3>
            </Link>
            <Link className='nav' to='/'>
                <h3>Log Out</h3>
            </Link>

        </div>
    )
}



export default Nav;