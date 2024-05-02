import { useState } from 'react';

const User = ({ name, age, location }) => {
    const [count] = useState(0);
    return (
        <div className='user-card'>
            <h1>{count}</h1>
            <h2>Name: {name}</h2>
            <h2>Age: {age}</h2>
            <h2>Location: {location}</h2>
        </div>
    );
};

export default User;
