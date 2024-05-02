import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import { FadeLoader } from 'react-spinners';
import Shimmer from './Shimmer';
import { useOnlineStatus } from '../utils/useOnlineStatus';

const Body = () => {
    // State Variable using useState
    // useState --> simple JS function
    // takes one argument, which is the initial state, returns a variable
    // and a function, which triggers the diff algorithm
    const [resList, setResList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [input, setInput] = useState('');

    const isUserOnline = useOnlineStatus();
    console.log(isUserOnline);
    // useEffect --> simple JS function
    // 2 argument, 1st --> callback function, 2nd --> dependencies array
    // callback will run when the component is rendered
    // if no dependency array, it will called on every render.
    // if dependency == [], it will called on initial render and only once
    // if dependency array is present, then it will run everytime the value of dependencies change
    useEffect(() => {
        // always add API calls in useEffect
        fetchData();
        // to unsubscribe to any event, return the function
        return () => {
            console.log('unmouting Body');
        };
    }, []);

    const fetchData = async () => {
        // not a JS, fetch is a function provided by browser
        const data = await fetch('https://dummyjson.com/products');
        const json = await data.json();
        console.log(json);
        setResList(json.products);
        setFilteredList(json.products);
    };

    // this will be printed before useEffect's console.log
    console.log('body rendered');

    if (!isUserOnline) {
        return <h1>User Offline!!!</h1>;
    }

    // this is what conditional rendering
    // show loader is empty string
    return filteredList.length === 0 ? (
        <Shimmer />
    ) : (
        <div className='body'>
            <div className='filters'>
                <button
                    onClick={() => {
                        // filter logic
                        setFilteredList(
                            resList.filter((res) => res.rating > 4)
                        );
                    }}
                    className='filter-btn'
                >
                    Top Rated Restaurants
                </button>
                <div className='search'>
                    <input
                        placeholder='SEARCH FOR ITEMS'
                        className='search-box'
                        type='text'
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button
                        onClick={() => {
                            console.log(input);
                            setFilteredList(
                                resList.filter(
                                    (r) =>
                                        r.description
                                            .toLowerCase()
                                            .includes(input.toLowerCase()) ||
                                        r.title
                                            .toLowerCase()
                                            .includes(input.toLowerCase())
                                )
                            );
                        }}
                    >
                        Search
                    </button>
                </div>
            </div>
            <div className='res-container'>
                {filteredList.map((res) => (
                    <RestaurantCard data={res} key={res.id} />
                ))}
            </div>
        </div>
    );
};

export default Body;
