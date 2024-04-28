import { useState } from 'react';
import { resData } from '../utils/mockData';
import RestaurantCard from './RestaurantCard';

const Body = () => {
    // State Variable using useState
    // useState --> simlpe JS function

    const [resList, setResList] = useState(resData);
    return (
        <div className='body'>
            <div className='filters'>
                <button
                    onClick={() => {
                        // filter logic
                        setResList(
                            resList.filter(
                                (res) => res.info.rating.aggregate_rating > 4
                            )
                        );
                    }}
                    className='filter-btn'
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className='res-container'>
                {resList.map((res) => (
                    <RestaurantCard data={res} key={res.info.name} />
                ))}
            </div>
        </div>
    );
};

export default Body;
