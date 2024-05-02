import { useState } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
const Header = () => {
    const [btnString, setBtnString] = useState('Login');

    return (
        <div className='header'>
            <div className='logo'>
                <img src={LOGO_URL} />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>
                        <Link to='/grocery'>Grocery</Link>
                    </li>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/cart'>Cart</Link>
                    </li>
                    <li>
                        <Link to='/about'>About us</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact Us</Link>
                    </li>
                    <button
                        className='login-btn'
                        onClick={() =>
                            setBtnString(
                                btnString === 'Login' ? 'Logout' : 'Login'
                            )
                        }
                    >
                        {btnString}
                    </button>
                </ul>
            </div>
        </div>
    );
};
export default Header;
