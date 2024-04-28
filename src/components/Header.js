import { LOGO_URL } from '../utils/constants';
const Header = () => (
    <div className='header'>
        <div className='logo'>
            <img src={LOGO_URL} />
        </div>
        <div className='nav-items'>
            <ul>
                <li>Home</li>
                <li>Cart</li>
                <li>My Account</li>
            </ul>
        </div>
    </div>
);
export default Header;
