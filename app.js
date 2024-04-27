// React is a library because it can work on a small portion of the application

// It will not work because browsers scripts cannot have imports and exports
// so convert app.js to module
import React from 'react';
import ReactDOM from 'react-dom/client';

// heading is just an object, not an h1 tag
// 2nd argument is to give attributes to tag, 3rd argument is the children
const heading = React.createElement(
    'h1',
    { id: 'new-heading' },
    'Hello World From React!!!'
);

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById('root'));

// render is converting the object to h1 tag
root.render(heading);

/*
<div id="parent">
    <div id="child">
        <h1></h1>
        <h2></h2>
    </div>
</div>
creating nested elements in react
*/

const parent = React.createElement(
    'div',
    { id: 'parent' },
    React.createElement('div', { id: 'child' }, [
        React.createElement(
            'h1',
            { style: { color: 'blue' } },
            'I am an h1 tag'
        ),
        React.createElement('h2', {}, 'I am an h2 tag'),
    ])
);
// passing 3rd argument as an array will create siblings
// but this becomes very hectic to react, that is why JSX comes into picture
console.log(parent);

// If there is something that is already present in root, it will be replaced by render.
root.render(parent);
