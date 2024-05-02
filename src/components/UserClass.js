import React from 'react';
import Shimmer from './Shimmer';

class UserClass extends React.Component {
    // First constructor is called then render is called
    constructor(props) {
        super(props);
        // creating state
        console.log('childConstructor');
        this.state = {
            user: [],
        };
    }
    async componentDidMount() {
        console.log('ChildComponentDidMount');
        const res = await fetch(
            'https://api.github.com/users/KrishnaMohan123-pro'
        );
        const json = await res.json();
        console.log(json);
        this.setState({ user: json });
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        // clear all setTimeouts and every service
        console.log('componentWillUnmount');
    }
    render() {
        if (this.state.user.length === 0) {
            return <Shimmer />;
        }
        console.log('childRender');

        const { name } = this.state.user;
        return (
            <div className='user-card'>
                <h2>Name: {name}</h2>
            </div>
        );
    }
}

export default UserClass;
