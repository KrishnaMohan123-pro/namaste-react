import React from 'react';
import UserClass from './UserClass';

class About extends React.Component {
    constructor(props) {
        super(props);
        console.log('parentConstructor');
    }
    // api calls are made inside componentDidMount as it runs after the render
    componentDidMount() {
        console.log('ParentComponentDidMount');
    }
    render() {
        console.log('parentRender');
        return (
            <div>
                <UserClass
                    name='Krishna Mohan (Class)'
                    age={26}
                    location='Dhanbad'
                />
            </div>
        );
    }
}

// Render phase(constructor --> render) --> commit phase(React updates the DOM  --> componentDidMount)

export default About;
