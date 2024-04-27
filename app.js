import React from 'react';
import ReactDOM from 'react-dom/client';

// React ELement --> created using React.createElement
// React.createELement --> Object --> ReactDOM.render --> HTML Element

const heading = React.createElement('h1', { id: 'heading' }, 'Hello World');
const root = ReactDOM.createRoot(document.getElementById('root'));

// it will render only the react element
root.render(heading);

// Using JSX
// JSX is not a part of React
// JSX is not HTML in Javascript --> it has HTML-like or XML-link syntax
// Browser only understand ES6, this is not a proper JS.
// JSX is read by browser because of parcel. Parcel converts the code to browser understandable code using babel.
// Babel is the package inside parcel which converts the code.

// JSX can also prevent attacks on you system
const jsxHeading = (
    <h1 id='heading' className='.heading'>
        Hello World JSX!!!
    </h1>
);
// JSX (using Babel)--> React.createElement --> Object --> ReactDOM.render --> HTML Element
// atributes in JSX are in camelcase
// if written in multiple lines then JSX should be wrapped in brackets

console.log(jsxHeading, heading); // both are same (as attributes)
root.render(jsxHeading);

// React Components
// Class based components and functional components
// class --> old way
// function --> new way

// React functional component
// it is a function that returns some JSX code
// jsx is react element
// so a functional component is a function which returns react component

const TitleComponent = () => <h2>Hello Title</h2>;
const HeadingComponent = () => (
    <div>
        <h1>Hello Functional Components</h1>
        {/* putting component inside another component is called component composition */}
        <TitleComponent />
        {/* all ways of calling component are valid */}
        <TitleComponent></TitleComponent>
        {TitleComponent()}
        {/* to put React Element, you can always use curly braces */}
        {heading}
    </div>
);

// it will render only the react component
root.render(<HeadingComponent />);
