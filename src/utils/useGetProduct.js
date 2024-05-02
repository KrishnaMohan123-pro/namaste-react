import { useEffect, useState } from 'react';

export const useGetProduct = (id) => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const json = await res.json();
        setProduct(json);
    };
    return product;
};
