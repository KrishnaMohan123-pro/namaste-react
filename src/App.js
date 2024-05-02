import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Product from './components/Product';
import Shimmer from './components/Shimmer';
// import Grocery from './components/Grocery';

// all are same
// chunking, code spliting, on demand loading, dynamic bundling, lazy loading, on demand loading
// --> to make smaller bundles and not make a single heavy bundle for large scale applications

const AppLayout = () => (
    <div className='app'>
        <Header />
        <Outlet />
    </div>
);

// since the code is not loaded immediately, it throws an error saying:
// component suspended while responding to synchronous input
// to handle the issue, wrap the component around Suspense Component
// which is provided by React with a fallback to show while the bundle of Grocery is being loaded
const Grocery = lazy(() => import('./components/Grocery'));

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/product/:id',
                element: <Product />,
            },
            {
                path: '/grocery',
                element: (
                    <Suspense fallback={<Shimmer />}>
                        <Grocery />
                    </Suspense>
                ),
            },
        ],
        errorElement: <Error />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
