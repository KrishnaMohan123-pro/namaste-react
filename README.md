# namaste-react

# App.js understanding props

import React from 'react';
import ReactDOM from 'react-dom/client';
import { resData } from '../data';

/\*

-   Header
    -   Logo
    -   Nav Items
-   Body
    -   Search Component
    -   Restaurant Container
    -   Restaurant Card
        -   img
        -   name of res
        -   cuisine
        -   star rating
        -   delivery time
-   Footer - Copyright - Links - Address - Contact
    \*/

// config driven UI --> config set in backend

const Header = () => (

<div className='header'>
<div className='logo'>
<img src='https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=2' />
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

console.log(resData);
// props = properties
const RestaurantCard = (props) => {
const { info } = props.data;
return (

<div className='res-card'>
<img src={info.image.urlWithParams} />
<h3>{info.name}</h3>
<h4>
{info.cuisine.reduce(
(acc, ele) => (acc += ele.name + ', '),
''
)}
</h4>
<h4>{info.rating.aggregate_rating} Stars</h4>
<h4>{info.costText.text}</h4>
</div>
);
};

const Body = () => (

<div className='body'>
<div className='search'>Search</div>
<div className='res-container'>
{/_ passing props is same as passing argument to a function _/}
{/_ key is important for uniquely identify the child while re-rendering _/}
{resData.map((res) => (
<RestaurantCard data={res} key={res.info.name} />
))}
</div>
</div>
);

const AppLayout = () => (

<div className='app'>
<Header />
<Body />
</div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);

# React hooks

    - useState() --> creates state variables
    - useEffect()
